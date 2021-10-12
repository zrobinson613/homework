(function () {

    'use strict';
    const form = $("<form/>").appendTo('body');


    function createInputDiv() {
        return $("<div/>").append(('<label/>')).append("<input/>");
    }

    /*const nameInput = createInputDiv();
    const emailInput = createInputDiv();

    form.append([nameInput, emailInput]);*/

    const nameInputv2 = $("<div/>").append($("<label/>").attr("for", "name").text("Name:")
        .css("display", "block")).append($("<input/>").attr({ "id": "name", "type": "textarea" }));

    const addressInput2 = $("<div/>").append($("<label/>").attr("for", "address").text("Address:")
        .css("display", "block")).append($("<input/>").attr("id", "address"));

    const checkBox = $("<input/>").attr("type", "checkbox");

    form.append([nameInputv2, addressInput2, checkBox, $("<button/>").attr("type", "submit").text("Submit")]);

    function showMessage(a) {
        a.preventDefault();

        if (checkBox.prop("checked")) {



            $("body").append($("<div/>").attr("id", "messageDiv").append($("<p/>"))
            );

            // console.log(a.target[0].value);    

            $("p").text(`Your name is ${a.target[0].value} and your address is ${a.target[1].value}.`);
        }

        console.log(checkBox.prop("checked"));
        console.log(checkBox.val("checked"));
    }

    $("form").submit((a) => showMessage(a));

    // console.log(checkBox.val());


}());