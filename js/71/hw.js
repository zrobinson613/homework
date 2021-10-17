(async function () {
    "use strict";




    const input = $('#fileName');
    // const button = $('#myForm button');
    const myForm = $('#myForm');

    myForm.submit(q => {
        q.preventDefault();

        $('#printHere').append(JSON.stringify(step2));


        console.log(step2);
        // console.log(step3);

    });

    const step1 = await fetch(input.val()/*'practice2.json'*/); //only working when I manually put in file name
    if (step1.status > 400){
    const step2 = await step1.json();}
    // const step3 = input.val().json();

    $('#spinner1').spinner(); // this doesn't work





}());