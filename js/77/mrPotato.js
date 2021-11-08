(function () {
    'use strict';

    let dragging = null; //false;
    let offset;
    const piecesSelector = $("#piecesSelector");

    $(document)
        .on('mousedown', '.image', e => {
            console.log('mousedown');
            //dragging = true;
            dragging = $(e.target);

            offset = { x: e.offsetX, y: e.offsetY };
            console.log(offset);
        })
        .mousemove(e => {
            if (dragging) {
                e.preventDefault(); // prevent weird occasional no drag cursor
                //   console.log('mousemove', e.offsetY, e.offsetX);
                console.log(e.pageY);

                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x, position: "absolute" });
            }
        })
        .mouseup(() => {
            if (dragging) {
                console.log('mouseup');

                dragging = null;
            }
        });


    $("form").submit((e) => {
        e.preventDefault();

        console.log('submitted', e);
        console.log(piecesSelector.val());
        $("#appear")
        .append(`<img class="image" src="media/images/${piecesSelector.val()}.png">`);
    });
})();