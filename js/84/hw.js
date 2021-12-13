(function (){
    'use strict';
    
    let theDiv = $('body').append($("<div>"));

    theDiv.append($('<button/>').text("button").click(()=>{
        $('body').css("background-color", "orange");
    }));



})();