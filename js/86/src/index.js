// (function (){
// 'use strict';

import $ from 'jquery';
import './css/index.css';
import theApple from '../images/redapple.png';

let theDiv = $('body').append($("<div>"));

theDiv.append($('<button/>').text("button").click(() => {
    $('body').css("background-color", `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}).addClass("myButtonClass"));



const img1 = new Image();
// img1.src = "images/redapple.png";
img1.src = theApple;

theDiv.append(img1);

// })();