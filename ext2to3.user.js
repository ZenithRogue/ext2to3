// ==UserScript==
// @name         Scratch 2.0 extension converter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NitroCipher
// @match        https://scratch.mit.edu/convert/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var namespace;
    var newDesc = "";
    var url = getUrlVars()["url"];
    $.ajax({
        url: url,
        text: "text/plain"
    }).done( function (data) {
        //alert("done");
        var desc = "descriptor" + data.split("var descriptor")[1].split("// Register")[0];
        var descriptor;
        namespace = data.split("ScratchExtensions.register('")[1].split("', descriptor, ext);")[0];
        eval(desc);
        //here we go...
        descriptor.blocks.forEach(reformat);

        $(".box-content").html(newDesc);
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
