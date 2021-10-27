(function () {
    'use strict';

    const videoSelect = $('#videoSelect');
    const resultTitle = $("#result h4");
    const resultImage = $("#result img");
    const resultElem = $("#result *");
    const resultVideo = $("#result video");

    fetch('videos.json')
        .then(response => {
            if (!response) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(videos => {

            videos.forEach(v => {
                videoSelect.append(`<option value="${v.title}">${v.title}</option>`);

            });
            videoSelect.change(function () {

                let optionSelected = $(this).find("option:selected");

                // if(resultVideo.val()){
                //     resultVideo.empty();
                // }

                // resultVideo.empty();

                // console.log(optionSelected.text());

                videos.forEach(v => {

                    if (optionSelected.text() === v.title) {
                        resultTitle.text(v.title);

                        // resultVideo.empty();

                        if (v.image) {
                            resultImage.attr({ "src": v.image });
                        } else {
                            resultImage.attr("src", "images/default.jpg");
                        }

                        resultElem.click(() => {
                            resultImage.hide();

                            resultVideo.attr({ "src": v.url, "controls": true });
                            resultVideo[0].play();
                        });
                    }


                });




            });



        }).catch(err => console.error("We have an error", err));
})();