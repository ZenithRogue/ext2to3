// ==UserScript==
// @name         Scratch 2.0 extension converter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NitroCipher
// @match        https://scratch.mit.edu/convert/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var namespace;
    var newDesc = "";
    var url = getUrlVars()["url"];
    fetch(url).then(data => data.text()).then(data => {
        var desc = "descriptor" + data.split("var descriptor")[1].split("ScratchExtensions.register")[0];
        var descriptor;
        namespace = data.split("ScratchExtensions.register(")[1].split(", descriptor, ext);")[0].replace(/\s/g, '');;
        eval(desc);
        //here we go...
        descriptor.blocks.forEach(reformat);

        document.querySelector(".box-content").innerHTML = newDesc;
    });

    function reformat(item, index) {
        var block = "{opcode: '" + item[2] + "',text: formatMessage({ id:" +namespace+ "." +item[2]+ ", default: '";
        newDesc = newDesc + block + "</br>";
    }

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    // Your code here...
})();
