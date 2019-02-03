// ==UserScript==
// @name         Scratch ext2to3
// @namespace    http://tampermonkey.net/
// @version      0.4d
// @description  try to take over the world!
// @author       NitroCipher and Jamesbmadden
// @match        https://scratch.mit.edu/convert/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://cdn.rawgit.com/beautify-web/js-beautify/v1.8.9/js/lib/beautify.js
// ==/UserScript==

(function() {
    'use strict';
    var fullArg = "";
    var url = getUrlVars()["url"];
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var argValue = 0;
    $.ajax({
        url: url,
        text: "text/plain"
    }).done( function (data) {
        //alert("done");
        let name, descriptor, ext, id;
        const ScratchExtensions = { // Get the properties of the extension
            register: (_name, _descriptor, _ext) => {
                name = _name;
                descriptor = _descriptor;
                ext = _ext;
                id = _name.replace(/ /g, '');
            }
        }
        eval(data);

        //here we go...
        let info = {
            id, // Set the id to the extension's name without spaces
            name, // Set the display name
            blocks: descriptor.blocks.map((block, index) => { // convert the block to the new format
                return {
                    opcode: block[2],
                    blockType: getBlockType(block[0]), // Get the block type
                    text: getNewArgs(block[1]) // TODO: Change the inputs to the new format
                }
            })
        };
        /* Create a String with the code for the Scratch 3 extension */
        let result = `class ${id} {
            getInfo() {
                return ${JSON.stringify(info)};
            }
        }
        Scratch.extensions.register(new ${id}());`; // TODO: Add functions
        $(".box-content").css("text-align", "left");
        $(".box-content").css("padding-left", "50px");
        $(".box-content").html("<pre>" + js_beautify(result) + "</pre>");
    });

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    function getBlockType (oldType) {
        switch (oldType) {
            case ' ': return 'command';
            case 'w': return 'command';
            case 'r': return 'reporter';
            case 'R': return 'reporter';
            case 'b': return 'Boolean';
            case 'h': return 'hat';
        }
    }

    function getNewArgs (oldText) {
        var splitArg = oldText.split(" ");
        argValue = 0;
        fullArg = "";
        splitArg.forEach(switchArgs);
        return fullArg.substr(1);
    }

    function switchArgs (oldText) {
        switch (oldText) {
            default: fullArg = fullArg + " " + oldText; break;
            case '%b': fullArg = fullArg + " [" +letters[argValue]+ "]"; argValue++; break;
            case '%n': fullArg = fullArg + " [" +letters[argValue]+ "]"; argValue++; break;
            case '%s': fullArg = fullArg + " [" +letters[argValue]+ "]"; argValue++; break;
        }
    }
    // Your code here...
})();
