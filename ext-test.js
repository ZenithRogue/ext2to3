class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                "opcode": "ncheck",
                "blockType": "Boolean",
                "text": "nitroblock?",
                "arguments": {}
            }, {
                "opcode": "color",
                "blockType": "reporter",
                "text": "color %c",
                "arguments": {}
            }, {
                "opcode": "rgb",
                "blockType": "reporter",
                "text": "red [A] green [B] blue [C]",
                "arguments": {
                    "A": {
                        "type": "number",
                        "defaultValue": 255
                    },
                    "B": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "C": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "power",
                "blockType": "reporter",
                "text": "[A] ^ [B]",
                "arguments": {
                    "A": {
                        "type": "number",
                        "defaultValue": 5
                    },
                    "B": {
                        "type": "number",
                        "defaultValue": 2
                    }
                }
            }, {
                "opcode": "textif",
                "blockType": "reporter",
                "text": "if [A] then [B] else [C]",
                "arguments": {
                    "A": {
                        "type": "Boolean",
                        "defaultValue": ""
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": "hello"
                    },
                    "C": {
                        "type": "string",
                        "defaultValue": "world"
                    }
                }
            }, {
                "opcode": "alertbox",
                "blockType": "command",
                "text": "alert [A]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": "hello world"
                    }
                }
            }, {
                "opcode": "whenThis",
                "blockType": "hat",
                "text": "when [A]",
                "arguments": {
                    "A": {
                        "type": "Boolean",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "mathy",
                "blockType": "reporter",
                "text": "[A] %m.supermath [B]",
                "arguments": {
                    "A": {
                        "type": "number",
                        "defaultValue": ""
                    },
                    "B": {
                        "type": "number",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "letters [A] through [B] of [C]",
                "arguments": {
                    "A": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "B": {
                        "type": "number",
                        "defaultValue": "5"
                    },
                    "C": {
                        "type": "string",
                        "defaultValue": "hello world"
                    }
                }
            }, {
                "opcode": "javablock",
                "blockType": "reporter",
                "text": "javascript [A]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": "window.alert(\"yay\")"
                    }
                }
            }, {
                "opcode": "blank",
                "blockType": "command",
                "text": "[A]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "itOfStr",
                "blockType": "reporter",
                "text": "word [A] of [B] separated by [C]",
                "arguments": {
                    "A": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": "hello world"
                    },
                    "C": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "exclu",
                "blockType": "Boolean",
                "text": "[A] xor [B]",
                "arguments": {
                    "A": {
                        "type": "Boolean",
                        "defaultValue": false
                    },
                    "B": {
                        "type": "Boolean"
                    }
                }
            }, {
                "opcode": "strCont",
                "blockType": "Boolean",
                "text": "[A] contains [B]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": "hello world"
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": "hello"
                    }
                }
            }, {
                "opcode": "dPrompt",
                "blockType": "reporter",
                "text": "prompt user with [A]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": "how are you?"
                    }
                }
            }, {
                "opcode": "repAll",
                "blockType": "reporter",
                "text": "replace all of [A] in [B] with [C]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "C": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "greaterOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≥ [B]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "lessOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≤ [B]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "B": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "jQuGet",
                "blockType": "reporter",
                "text": "get data from url: [A]",
                "arguments": {
                    "A": {
                        "type": "string",
                        "defaultValue": "http://google.com"
                    }
                }
            }]
        };
    }
    ncheck(check) {
        return true
    }
    color(color) {
        return Math.pow(color, 1);
    }
    rgb(r, g, b) {
        return ((((r * 256) + g) * 256) + b);
    }
    power(num, power) {
        return Math.pow(num, power);
    }
    textif(bool, text1, text2) {
        if (bool) {
            return text1
        } else {
            return text2
        }

    }
    alertbox(string) {
        window.alert(string);
    }
    whenThis(bool) {
        return bool;
    }
    mathy(num1, oper, num2) {
        if (oper === '+') {
            return (num1 + num2)
        }
        if (oper === '-') {
            return (num1 - num2)
        }
        if (oper === '*') {
            return (num1 * num2)
        }
        if (oper === '/') {
            return (num1 / num2)
        }
        if (oper === '^') {
            return Math.pow(num1, num2)
        }
        if (oper === 'sqrt') {
            return (num1 * (Math.sqrt(num2)))
        }
    }
    substringy(num1, num2, string) {
        return string.substring(num1 - 1, num2);
    }
    javablock(string) {
        return eval(string);
    }
    blank(string) {}
    itOfStr(num, string, seper) {
        var str = string;
        var res = str.split(seper);
        return (res[num - 1]);
    }
    exclu(bool1, bool2) {
        if (bool1 && bool2) {
            return false;
        } else {
            if (bool1) {
                return true;
            }
            if (bool2) {
                return true;
            }
        }
    }
    strCont(string1, string2) {
        return string1.includes(string2);
    }
    dPrompt(prompty) {
        return prompt(prompty);
    }
    repAll(finder, string, replacer) {
        return string.replace(new RegExp(finder, 'gi'), replacer);
    }
    greaterOrEqual(string1, string2) {
        return (string1 >= string2);
    }
    lessOrEqual(string1, string2) {
        return (string1 <= string2);
    }
    jQuGet(myURL) {

        $.ajaxSetup({
            async: false
        });
        $.get('https://cors-anywhere.herokuapp.com/' + myURL, function(data) {
            window.httpdata = data;
        });
        return window.httpdata;
    }
}
Scratch.extensions.register(new NitroBlock());
