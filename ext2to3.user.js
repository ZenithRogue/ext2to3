// ==UserScript==
// @name         Scratch Ext2to3
// @namespace    https://github.com/NitroCipher/ext2to3
// @version      0.8b
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
    var argDescriptor;
    var argDefaults;
    var argNames;
    document.title = "Ext2to3 - Convert 2.0 extensions to work with 3.0";
    $(".box-head").html("<h2>Ext2to3</h2><button id='extDownload' type='button'>Please wait as we make the 3.0 extension</button>"); // While it's loading, show some content
    $(".box-content").html(`<img src="//cdn.scratch.mit.edu/scratchr2/static/__238e692fba4864e9ff337c17d8a4033d__/images/404-giga.png" style="margin:20px;padding: 10px;"><div class="box-header"> <h1>Trying to convert ${url}...</h1></div><br><p>If this message doesn't disappear, than this extension may be incompatible at this time, please check back later, or <a href="https://github.com/NitroCipher/ext2to3/issues/new">create an issue on our github</a></p><br><br>`);
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
                    text: getNewArgs(block, ext[block[2]]), // TODO: Change the inputs to the new format
                    arguments: argDescriptor
                }
            }),
            menus: getMenus(descriptor)
        };
        /* Create a String with the code for the Scratch 3 extension */
        let result = `class ${id} {
            //Converted from ${url} to Scratch 3.0 using Ext2to3!
            getInfo() {
                return ${JSON.stringify(info).replace(/\"&&&{/gi, "{").replace(/}&&&\"/gi, "}")};
            }
            ${convertFunctions(descriptor, ext)}
            _formatMenu (menu) {
                const m = [];
                for (let i = 0; i < menu.length; i++) {
                    const obj = {};
                    obj.text = menu[i];
                    obj.value = i.toString();
                    m.push(obj);
                }
                    return m;
                }
        }
        Scratch.extensions.register(new ${id}());`; // TODO: Add functions
        setTimeout(function(){
            $(".box-content").css("text-align", "left");
            $(".box-content").css("padding-left", "50px");
            $(".box-content").html("<pre>" + js_beautify(result) + "</pre>");
            $(".box-head").html("<h2>Ext2to3</h2><button id='extDownload' type='button'>Download " + name + " as a 3.0 extension file</button>");
            $( "#extDownload" ).click(function() {
                download(js_beautify(result), name + "_3.js", "text/javascript");
            });
        }, 3000);
    });

    function getMenus(descriptor) {
        var newMenu = '&&&{';
        Object.keys(descriptor.menus).map((menu, index) => { // convert the menu to the new format
            newMenu += [menu] + ": this._formatMenu(['"+descriptor.menus[menu].join("', '")+ "']),";
        });
        return newMenu + '}&&&';
    }

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

    function getNewArgs (oldText, func) {
        var splitArg = oldText[1].split(" ");
        argNames = getArgNames(func); // Add to window so that getArgNames can read
        argValue = 0;
        fullArg = "";
        argDescriptor = {};
        argDefaults = oldText.slice(3, oldText.length);
        console.log(argDefaults);
        splitArg.forEach(switchArgs);
        return fullArg.substr(1);
    }
    
    function getArgNames (func) {
        let funcString = func.toString(); // Get the function as a string
        let args = funcString.split('(')[1].split(')')[0]; // Get the arguments
        let argsList = args.split(',').map(arg => { // Split them at the commas
          return arg.trim(); // Trim whitespace and return them as an argument name
        })
        return argsList;
      }

    function switchArgs(oldText) {
        var myArg;
        switch (oldText) {
            default:
                if (oldText.startsWith("%m.")){
                    myArg = argNames[argValue];
                    fullArg = fullArg + " [" + myArg + "]";
                    argDescriptor[myArg] = {
                        "type": "string",
                        "menu": oldText.split('.')[1],
                        "defaultValue": argDefaults[argValue],
                    };
                    argValue++;
                } else {
                    fullArg = fullArg + " " + oldText;
                }
                break;
            case '%b':
                myArg = argNames[argValue];
                fullArg = fullArg + " [" + myArg + "]";
                argDescriptor[myArg] = {
                    "type": "Boolean",
                    "defaultValue": argDefaults[argValue],
                };
                argValue++;
                break;
            case '%n':
                myArg = argNames[argValue];
                fullArg = fullArg + " [" + myArg + "]";
                argDescriptor[myArg] = {
                    "type": "number",
                    "defaultValue": argDefaults[argValue],
                };
                argValue++;
                break;
            case '%s':
                myArg = argNames[argValue];
                fullArg = fullArg + " [" + myArg + "]";
                argDescriptor[myArg] = {
                    "type": "string",
                    "defaultValue": argDefaults[argValue],
                };
                argValue++;
                break;
            case '%c':
                myArg = argNames[argValue];
                fullArg = fullArg + " [" + myArg + "]";
                argDescriptor[myArg] = {
                    "type": "color",
                    "defaultValue": argDefaults[argValue],
                };
                argValue++;
                break;
        }
    }

    function convertFunctions (descriptor, ext) {
        let functions = '';
        descriptor.blocks.forEach((block, index) => {
            let func = ext[block[2]]; // Get the function for the block
            let named = func.toString().replace('function', block[2]); // Convert to string and replace the function prefix with the function name
            functions += named.replace('(', '({').replace(')', '})'); // Encase the arguments in {} for the new format
        });
        return functions;
    }

    function download(data, filename, type) {
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(file, filename);
        } else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
    // Your code here...
})();
