<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoicnNiYXVtYW5uIiwiYSI6ImNqNmhkZnhkZDA4M3Yyd3AwZDR4cmdhcDIifQ.TGKKAC6pPP0L-uMDJ5xFAA';
    var bounds = [
        [-75.04728500751165, 39.68392799015035],
        [-72.91058699000139, 41.87764500765852]
    ];
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-74.0059, 40.7128],
        zoom: 10,
        minZoom: 9,
        maxZoom: 18,
        pitch: 40,
        maxBounds: bounds
    });

    function init() {
        map.addSource('veh-incidents-1', {
            type: 'geojson',
            data: 'https://data.cityofnewyork.us/resource/h9gi-nx95.geojson',
            buffer: 0,
            maxzoom: 16
        });

        if (window.location.search.indexOf('embed') !== -1) map.scrollZoom.disable();

        map.addLayer({
            'id': 'veh-incd-1',
            'type': 'circle',
            'source': 'veh-incidents-1',
            'paint': {
                'circle-color': {
                    property: 'CYC_INJ',
                    type: 'interval',
                    stops: [
                        [1, 'orange'],
                        [2, 'red']
                    ]
                },
                'circle-radius': {
                    property: 'CYC_INJ',
                    base: 3,
                    type: 'interval',
                    stops: [
                        [1, 3],
                        [2, 8],
                        [3, 12]
                    ]
                },
                'circle-opacity': 0.8,
                'circle-blur': 0.5
            },
            'filter': ['>=', 'CYC_INJ', 1]
        }, 'waterway-label');
        
        map.addLayer({
            'id': 'veh-incd-base-1',
            'type': 'circle',
            'source': 'veh-incidents-1',
            'paint': {
                'circle-color': 'yellow',
                'circle-radius': 3,
                'circle-opacity': 0.3,
                'circle-blur': 1
            },
            'filter': ['<', 'CYC_INJ', 1]
        }, 'waterway-label');



    map.once('style.load', function(e) {
        init();
        map.addControl(new mapboxgl.NavigationControl());
        map.on('click', function(e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['veh-incd-1', 'veh-incd-2']
            });
            if (!features.length) {
                return;
            }
            var feature = features[0];

            var popup = new mapboxgl.Popup()
                .setLngLat(map.unproject(e.point))
                .setHTML('<h3>Collision Detail</h3>' +
                    '<ul>' +
                    '<li>Year: <b>' + feature.properties.YEAR + '</b></li>' +
                    '<li>Pedestrian Injuries: <b>' + feature.properties.PED_INJ + '</b></li>' +
                    '<li>Pedestrian Fatalities: <b>' + feature.properties.PED_KIL + '</b></li>' +
                    '<li>Cyclist Injuries: <b>' + feature.properties.CYC_INJ + '</b></li>' +
                    '<li>Cyclist Fatalities: <b>' + feature.properties.CYC_KIL + '</b></li>' +
                    '</ul>')
                .addTo(map);
        });

        //Hide loading bar once tiles from geojson are loaded
        map.on('data', function(e) {
            if (e.dataType === 'source' && e.sourceId === 'veh-incidents-1') {
                document.getElementById("loader").style.visibility = "hidden";
            }
        })

        // Use the same approach as above to indicate that the symbols are clickable
        // by changing the cursor style to 'pointer'.
        map.on('mousemove', function(e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['veh-incd-1', 'veh-incd-2']
            });
            map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
        });
        var prop = document.getElementById('prop');
        prop.addEventListener('change', function() {
            map.setPaintProperty('veh-incd-1', 'circle-color', {
                property: prop.value,
                type: 'interval',
                stops: [
                    [1, 'orange'],
                    [2, 'red']
                ]
            });

            map.setPaintProperty('veh-incd-1', 'circle-radius', {
                property: prop.value,
                base: 3,
                type: 'interval',
                stops: [
                    [1, 3],
                    [2, 6],
                    [3, 9]
                ]
            });

            map.setFilter('veh-incd-1', ['>=', prop.value, 1])
        });
    });
    </script>