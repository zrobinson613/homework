(function (){
    'use strict';
    
    let theDiv = $('body').append($("<div>"));

    theDiv.append($('<button/>').text("button").click(()=>{
        $('body').css("background-color", `#${Math.floor(Math.random()*16777215).toString(16)}`);
    }));

})();