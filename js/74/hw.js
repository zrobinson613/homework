(function () {
    'use strict';



    $("#searchButton").click(() => {

        if (loadImages) {
            $("#results").empty();
        }
        const userInput = $("#searchInput").val();

        loadImages(userInput);
    });


    function loadImages(string) {
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${string}&format=json&jsoncallback=?`)
            .then(x => {
                const resultsLength = x.items.length;

                for (let i = 0; i < resultsLength; i++) {
                    // console.log(i);
                    $("#results")
                        .append(`<div id="div${i}" class="p-2"><h3>${x.items[i].title}</h3><img src="${x.items[i].media.m}"/></div>`);
                }

                console.log('ajax got', x);
                console.log(x.items);
                console.log(x.items.length);

            });
    }

    function loadOneAtATime(string) {
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${string}&format=json&jsoncallback=?`)
            .then(x => {
                const resultsLength = x.items.length;
                let i = 0;
                // for (let i = 0; i < resultsLength;) {
                // console.log(i);
                $("#results")
                    .append(`<div id="div${i}" class="p-2"><h3>${x.items[i].title}</h3><img src="${x.items[i].media.m}"/><button id=next>=></button></div>`);
                // }

                $("#next").click(() => {
                    i++;
                    $("#results").empty();
                    $("#results").append(`<div id="div${i}" class="p-2"><h3>${x.items[i].title}</h3><img src="${x.items[i].media.m}"/><button id=next>=></button></div>`);

                });



            });
    }

    // loadImages("flower");
    // loadOneAtATime("flower");
})();