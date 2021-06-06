var startDate = new Date("02/01/2017"), speedDelay = 200, conferenceMarkers = [], openedMarker, arrMarkers = [], arrBundledClickMarkers = [], objBundledMarkers = {}, arrCoordinates = [], map, mapView, i = 0;
L.mapbox.accessToken = "pk.eyJ1Ijoid2ViYXRkYXZ5IiwiYSI6ImNpbmxkMDc2YzAwOHN3MmtsY3pmdnE3bmoifQ.FpyHODVdW4sw1thT55i2QQ";
var MapView = function() {
    this.map = null,
    this.createMaps = function() {
        mapView.map = new L.mapbox.map("map","mapbox.light",{
            dragging: !0,
            minZoom: 10,
            maxZoom: 16,
            touchZoom: !0,
            zoomAnimation: !0
        }).setView([51.500152, -.126236], 13),
        this.addGradient(),
        this.addMarkers()
    }
    ,
    this.addMarkers = function() {
        var a = (L.mapbox.featureLayer().addTo(mapView.map),
        L.mapbox.featureLayer());
        a.loadURL(ROOT + "web/js/json/social-feed.json"),
        a.on("layeradd", mapView.markerHandler),
        mapView.map.on("click", mapView.buildDownMarker),
        mapView.map.on("viewreset", mapView.buildDownMarker)
    }
    ,
    this.buildDownMarker = function(a) {
        "undefined" != typeof a.originalEvent && ($(a.originalEvent.target).hasClass("circle") || $(a.originalEvent.target).hasClass("slick-arrow") || $(a.originalEvent.target).attr("href") || ($(".marker-wrapper.open .hide-icon").removeClass("hide-icon"),
        $(".marker-wrapper.open").removeClass("open"),
        openedMarker && ($(".marker-wrapper").not(".notThereYet").stop().animate({
            opacity: 1
        }),
        openedMarker = null)))
    }
    ,
    this.writeSlide = function(a) {
        var b = '<div class="slide">';
        return "message" == a.properties.contentType ? (b += '<div class="avatar">',
        b += '<svg height="84" width="84"><circle cx="42" cy="42" r="40" fill="none" stroke="white" stroke-dasharray="0.3,8" stroke-width="2" stroke-linecap="round" /></svg>',
        b += '<img src="' + a.properties.avatar + '"/>',
        b += "</div>",
        b += "<p>" + a.properties.content + "</p>") : (b += '<div class="image">',
        b += '<svg height="395" width="395"><circle cx="196" cy="196" r="193" fill="none" stroke="white" stroke-dasharray="0.3,8" stroke-width="2" stroke-linecap="round" /><circle cx="196" cy="196" r="183" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" id="inner" /></svg>',
        b += '<div class="content" style="background-image: url(' + a.properties.content + ');"/></div>',
        b += "</div>",
        b += "<p>" + a.properties.caption + "</p>"),
        b += '<div class="meta">',
        b += '<div class="meta-content"><img src="' + ROOT + 'web/graphics/svg/categories/inline/conference.svg" /><p>' + a.properties.date + " • " + a.properties.time + "</p>",
        b += "</div></div></div>"
    }
    ,
    this.calculateHalfHours = function(a, b) {
        var c = new Date(a + " " + b)
          , d = c.getTime() / 1e3
          , e = d - startDate.getTime() / 1e3
          , f = Math.round(e / 900)
          , g = .0104 * f;
        return g
    }
    ,
    this.markerHandler = function(a) {
        var b = a.layer
          , c = b.feature
          , d = mapView.calculateHalfHours(c.properties.date, mapView.convertTime(c.properties.time))
          , e = [c.geometry.coordinates[0], c.geometry.coordinates[1]]
          , f = !1;
        $.each(arrCoordinates, function(a, b) {
            if ("undefined" != typeof b && b[0] == e[0] && b[1] == e[1]) {
                var d = b[0] + "" + b[1];
                d = d.replace(".", ""),
                objBundledMarkers.hasOwnProperty(d) ? objBundledMarkers[d].indexOf(c.id) === -1 && (f = !0,
                objBundledMarkers[d].push(c.id)) : (f = !0,
                objBundledMarkers[d] = [a, c.id])
            }
        }),
        arrCoordinates[c.id] = e;
        var g;
        if ("conference" == c.properties.category) {
            var h = {};
            "message" == c.properties.contentType ? (h = {
                halfhours: d,
                contentType: "message",
                category: "conference",
                avatar: c.properties.avatar,
                content: c.properties.content,
                date: c.properties.date,
                time: c.properties.time,
                coordinates: c.geometry.coordinates
            },
            conferenceMarkers.push(h)) : (h = {
                halfhours: d,
                contentType: "photo",
                content: c.properties.content,
                caption: c.properties.caption,
                date: c.properties.date,
                time: c.properties.time,
                coordinates: c.geometry.coordinates
            },
            conferenceMarkers.push(h))
        } else if (!f) {
            g = "message" == c.properties.contentType ? L.divIcon({
                className: "marker-wrapper " + c.properties.category,
                html: '<div id="' + c.id + '" data-halfhours="' + d + '" class="outerCircle ' + c.properties.category + '"><div class="circle"><img src="' + ROOT + "web/graphics/svg/categories/" + c.properties.category + '.svg" /></div></div><div class="content"><div class="avatar"><svg height="84" width="84"><circle cx="42" cy="42" r="40" fill="none" stroke="white" stroke-dasharray="0.3,8" stroke-width="2" stroke-linecap="round" /></svg><img src="' + c.properties.avatar + '"/></div><p>' + c.properties.content + '</p><div class="meta"><div class="meta-content"><img src="' + ROOT + "web/graphics/svg/categories/inline/" + c.properties.category + '.svg" /><p>' + c.properties.date + " • " + c.properties.time + '</p></div><div class="line"></div><div class="border"></div></div></div>'
            }) : L.divIcon({
                className: "marker-wrapper " + c.properties.category,
                html: '<div id="' + c.id + '" data-halfhours="' + d + '" class="outerCircle ' + c.properties.category + '"><div class="circle"><img src="' + ROOT + "web/graphics/svg/categories/" + c.properties.category + '.svg" /></div></div><div class="content"><div class="image"><svg height="395" width="395"><circle cx="196" cy="196" r="193" fill="none" stroke="white" stroke-dasharray="0.3,8" stroke-width="2" stroke-linecap="round" /><circle cx="196" cy="196" r="183" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" id="inner" /></svg><div class="content" style="background-image: url(' + c.properties.content + ');"/></div></div><p>' + c.properties.caption + '</p><div class="meta"><div class="meta-content"><img src="' + ROOT + "web/graphics/svg/categories/inline/" + c.properties.category + '.svg" /><p>' + c.properties.date + " • " + c.properties.time + '</p></div><div class="line"></div><div class="border"></div></div></div>'
            });
            var i = L.marker([c.geometry.coordinates[0], c.geometry.coordinates[1]], {
                icon: g
            });
            i.addTo(mapView.map),
            i.on("mouseover", mapView.markerHover),
            i.on("mouseout", mapView.markerOut),
            i.on("click", function(a) {
                if (!$(a.originalEvent.target).attr("href")) {
                    var b = [c.geometry.coordinates[0], c.geometry.coordinates[1]];
                    mapView.map.panTo(b, {
                        animate: !1
                    }),
                    "message" == c.properties.contentType ? mapView.map.panBy([0, -150], {
                        animate: !1
                    }) : mapView.map.panBy([0, -200], {
                        animate: !1
                    }),
                    $(".marker-wrapper.open").not(a.target._icon).length && (openedMarker.on("mouseover", mapView.markerHover),
                    openedMarker.on("mouseout", mapView.markerOut),
                    $(".marker-wrapper.open .hide-icon").removeClass("hide-icon"),
                    $(".marker-wrapper.open").removeClass("open"),
                    openedMarker && ($(".marker-wrapper").stop().animate({
                        opacity: 1
                    }),
                    openedMarker = null),
                    i.on("mouseover", mapView.markerHover),
                    i.on("mouseout", mapView.markerOut)),
                    $(".marker-wrapper").not(a.target._icon).not(".marker-wrapper.open").not(".notThereYet").stop().animate({
                        opacity: .3
                    });
                    var d = $(a.target._icon)
                      , e = $(a.target._icon).children(".outerCircle").children(".circle").children("img")
                      , f = $(a.target._icon).children(".content");
                    f.children(".image").show(),
                    f.children(".avatar").show(),
                    f.children("p").show(),
                    f.children(".meta").children(".meta-content").show(),
                    f.children(".meta").children(".line").show(),
                    f.children(".meta").children(".border").show(),
                    d.toggleClass("open"),
                    d.hasClass("open") ? (e.addClass("hide-icon"),
                    openedMarker = i,
                    a.target.off("mouseover"),
                    a.target.off("mouseout")) : (i.on("mouseover", mapView.markerHover),
                    i.on("mouseout", mapView.markerOut))
                }
            })
        }
        arrMarkers[c.id] = c;
        var j = a.layer.feature;
        j.properties.lastGeoItem && mapView.buildSliders()
    }
    ,
    this.buildSliders = function() {
        for (var a in objBundledMarkers) {
            var b = objBundledMarkers[a]
              , c = mapView.calculateHalfHours(arrMarkers[b[0]].properties.date, mapView.convertTime(arrMarkers[b[0]].properties.time))
              , d = '<div id="' + arrMarkers[b[0]].id + '" data-halfhours="' + c + '" class="outerCircle ' + arrMarkers[b[0]].properties.category + '">';
            d += '<div class="circle"><img src="' + ROOT + "web/graphics/svg/categories/" + arrMarkers[b[0]].properties.category + '.svg" /></div>',
            d += "</div>",
            d += '<div class="content">',
            d += '<div class="bundled-slider">';
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                $(".outerCircle#" + f + " + .content").remove(),
                $(".outerCircle#" + f).remove();
                arrMarkers[f];
                d += mapView.writeSlide(arrMarkers[f])
            }
            d += "</div>",
            d += '<div class="line"></div>',
            d += '<div class="border"></div>',
            d += "</div></div>";
            var g = L.divIcon({
                className: "marker-wrapper bundled-wrapper " + arrMarkers[b[0]].properties.category,
                html: d
            })
              , h = L.marker([arrMarkers[b[0]].geometry.coordinates[0], arrMarkers[b[0]].geometry.coordinates[1]], {
                icon: g
            });
            h.addTo(mapView.map),
            h.on("mouseover", mapView.markerHover),
            h.on("mouseout", mapView.markerOut),
            arrBundledClickMarkers[arrMarkers[b[0]].id] = h,
            $(h._icon.children[0]).on("click", function(a) {
                a.stopPropagation();
                var b = $(this).attr("id")
                  , c = $(".outerCircle#" + b).parent()[0]
                  , d = arrBundledClickMarkers[b]
                  , e = [arrMarkers[b].geometry.coordinates[0], arrMarkers[b].geometry.coordinates[1]];
                e[0] += .001,
                $(".marker-wrapper.open").not(c).length && (openedMarker.on("mouseover", mapView.markerHover),
                openedMarker.on("mouseout", mapView.markerOut),
                $(".marker-wrapper.open .hide-icon").removeClass("hide-icon"),
                $(".marker-wrapper.open").removeClass("open"),
                openedMarker && ($(".marker-wrapper").stop().animate({
                    opacity: 1
                }),
                openedMarker = null),
                d.on("mouseover", mapView.markerHover),
                d.on("mouseout", mapView.markerOut)),
                $(".marker-wrapper").not(c).not(".marker-wrapper.open").not(".notThereYet").stop().animate({
                    opacity: .3
                });
                var f = $(c)
                  , g = $(c).children(".outerCircle").children(".circle").children("img")
                  , h = $(c).children(".content").children(".slick-slider").children(".slick-list").children(".slick-track").children(".slide");
                h.show(),
                h.children(".image").show(),
                h.children(".avatar").show(),
                h.children("p").show(),
                h.children(".meta").children(".meta-content").show(),
                $(c).children(".content").children(".line").show(),
                $(c).children(".content").children(".border").show(),
                f.toggleClass("open"),
                f.hasClass("open") ? (g.addClass("hide-icon"),
                openedMarker = d,
                d.off("mouseover"),
                d.off("mouseout")) : (d.on("mouseover", mapView.markerHover),
                d.on("mouseout", mapView.markerOut))
            })
        }
        vendor.carousel(".bundled-slider", {
            infinite: !1,
            adaptiveHeight: !1
        }),
        $(".bundled-slider").on("beforeChange", function(a, b, c, d) {
            var e = $(this).children(".slick-list").children(".slick-track").children().eq(d).height();
            $(this).height(e),
            $(this).children(".slick-list").height(e)
        })
    }
    ,
    this.markerHover = function(a) {
        $(".marker-wrapper").not(a.target._icon).not(".marker-wrapper.open").not(".notThereYet").stop().animate({
            opacity: .3
        }),
        $(a.target._icon).stop().animate({
            opacity: 1
        })
    }
    ,
    this.markerOut = function(a) {
        var b = $(a.target._icon).children(".outerCircle").children(".circle").children("img");
        $(".marker-wrapper.open").not(a.target._icon).length ? $(a.target._icon).stop().animate({
            opacity: .3
        }) : $(".marker-wrapper").not(a.target._icon).not(".marker-wrapper.open").not(".notThereYet").stop().animate({
            opacity: 1
        }),
        b.removeClass("hide")
    }
    ,
    this.convertTime = function(a) {
        var b = Number(a.match(/^(\d+)/)[1])
          , c = Number(a.match(/:(\d+)/)[1])
          , d = a.match(/\s(.*)$/)[1];
        "PM" == d && b < 12 && (b += 12),
        "AM" == d && 12 == b && (b -= 12);
        var e = b.toString()
          , f = c.toString();
        return b < 10 && (e = "0" + e),
        c < 10 && (f = "0" + f),
        e + ":" + f
    }
    ,
    this.addGradient = function() {
        $(".leaflet-tile-pane").after("<div id='gradient-overlay'></div>"),
        $("#gradient-overlay").css({
            width: $(document).width(),
            height: $(document).height()
        }),
        mapView.map.on("move", function() {
            var a = mapView.matrixToArray($(".leaflet-map-pane").css("transform"))
              , b = a.slice(4, 6);
            $("#gradient-overlay").css("transform", "translate3D(" + -b[0] + "px," + -b[1] + "px,0px)")
        }),
        $(window).on("resize", function() {
            $("#gradient-overlay").css({
                height: $(window).height(),
                width: $(window).width()
            })
        })
    }
    ,
    this.addSlider = function() {
        var a = (new Date).getTime() / 1e3
          , b = startDate.getTime() / 1e3
          , c = a - b
          , d = Math.round(c / 900)
          , e = Math.round(d / 96 * 100) / 100;
        $("#slider").slider({
            orientation: "vertical",
            min: -4,
            max: 0,
            step: .0104,
            range: "max",
            value: -e,
            slide: function(a, b) {
                var c = b.value;
                if ($(".marker-wrapper.open .hide-icon").removeClass("hide-icon"),
                $(".marker-wrapper.open").removeClass("open"),
                openedMarker && ($(".marker-wrapper").stop().animate({
                    opacity: 1
                }),
                openedMarker = null),
                c <= -e)
                    return !1;
                var d = -b.value;
                for ($(".marker-wrapper").each(function() {
                    var a = $(this).children().attr("data-halfhours");
                    $(this).hasClass("hidden-marker") || (a < d ? ($(this).removeClass("notThereYet"),
                    $(this).css({
                        opacity: 1,
                        pointerEvents: "auto"
                    })) : ($(this).addClass("notThereYet"),
                    $(this).css({
                        opacity: 0,
                        pointerEvents: "none"
                    }),
                    a > 4 && 4 == d && ($(this).removeClass("notThereYet"),
                    $(this).css({
                        opacity: 1,
                        pointerEvents: "auto"
                    }))))
                }),
                $("#slider p").css("opacity", .5),
                $("#slider p").eq(0).css("opacity", 1),
                i = 0; i < Math.floor(d); i++)
                    $("#slider p").eq(i + 1).css("opacity", 1)
            }
        })
    }
    ,
    this.showFilters = function() {
        $("#btn-filter").on("click", function(a) {
            a.preventDefault(),
            $(this).toggleClass("down"),
            $("#filter-bar").toggleClass("down")
        }),
        $("#filter-bar a").click(function() {
            var a = $(this).attr("data-toggle");
            $("#filter-bar .active").removeClass("active"),
            $(this).parent().addClass("active"),
            $(".marker-wrapper").each(function() {
                $(this).removeClass("hidden-marker"),
                "all" != a && ($(this).hasClass(a) || $(this).addClass("hidden-marker"))
            })
        })
    }
    ,
    this.matrixToArray = function(a) {
        return a.match(/(-?[0-9\.]+)/g)
    }
    ,
    this.isEqual = function(a, b) {
        var c = Object.getOwnPropertyNames(a)
          , d = Object.getOwnPropertyNames(b);
        if (c.length != d.length)
            return !1;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] !== b[f])
                return !1
        }
        return !0
    }
};
document.body.contains(document.getElementById("page-map")) && $(document).ready(function() {
    mapView = new MapView,
    mapView.createMaps(),
    mapView.showFilters(),
    mapView.addSlider(),
    project.createViewslider(1)
});
