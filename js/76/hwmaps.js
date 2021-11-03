/*globals google*/
(function () {
    'use strict';

    const userInput = $("#searchInput");
    const defaultLoc = { lat: -34.397, lng: 150.644 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLoc,
        zoom: 8
    });

    let infoWindow = new google.maps.InfoWindow();
    const bounds = new google.maps.LatLngBounds();

    function addMarker(location, thumbnail) {
        let marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
                url: thumbnail,
                scaledSize: new google.maps.Size(30, 30)
            }
        });
        return marker;
    }

    function addToSideBar(item, i) {
        $("#sidebar").append(
            `<div id="item${i}">
            <h3>${item.title} <img src="${item.thumbnailImg}" align="bottom"
                    height="20px" width="20px" />
            </h3>
            <p>${item.summary}</p>

        </div>
        <hr>`
        );
        return $(`#item${i}`);
    }

    $("#searchButton").click(() => {

        $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${userInput.val()}&maxRows=5&username=zrobinson613&type=json`)
            .then(x => {
                console.log(x);
                x = x.geonames;
                // console.log(x.length);

                for (let i = 0; i < x.length; i++) {



                    console.log(x[i].lat, x[i].lng, x[i].wikipediaUrl);
                    let marker = addMarker({ "lat": x[i].lat, "lng": x[i].lng }, x[i].thumbnailImg);
                    infoWindow.setContent(
                        `${x[i].title}<br>${x[i].summary}<br>
                    <a target="_blank" href="https://${x[i].wikipediaUrl}">more info</a>`);

                    marker.addListener('click', () => {
                        infoWindow.open({ map, anchor: marker });
                    });

                    let item = addToSideBar(x[i], i);

                    item.click(() => {
                        map.panTo({ lat: x[i].lat, lng: x[i].lng });
                        console.log("clicked");
                    });
                    bounds.extend({ lat: x[i].lat, lng: x[i].lng });
                }
                map.fitBounds(bounds);

            });

    });

    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 0.25,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);



    let drawings = [];

    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        console.log(marker.position);

        drawings.push({ position: marker.position, type: "marker" });
        localStorage.setItem('mydrawings', JSON.stringify(drawings));
    });



    google.maps.event.addListener(drawingManager, 'circlecomplete', e => {


        drawings.push({ center: e.getCenter(), radius: e.getRadius(), type: "circle" });
        localStorage.setItem('mydrawings', JSON.stringify(drawings));


    });





    let drawingsString = localStorage.getItem('mydrawings');
    let drawingsNew = JSON.parse(drawingsString);

    if (drawingsNew) {

        drawingsNew.forEach(d => {

            if (d.type === "circle") {
                new google.maps.Circle({
                    center: d.center,
                    radius: d.radius,
                    map: map,

                });
            } else if (d.type === "marker") {
                new google.maps.Marker({
                    position: d.position,
                    map: map,

                });
            }
        });
    }














})();