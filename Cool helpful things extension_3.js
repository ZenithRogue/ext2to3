class Coolhelpfulthingsextension {
    getInfo() {
        return {
            "id": "Coolhelpfulthingsextension",
            "name": "Cool helpful things extension",
            "blocks": [{
                "opcode": "alert_stuffs",
                "blockType": "command",
                "text": "alert [alert]",
                "arguments": {
                    "alert": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "calculate",
                "blockType": "reporter",
                "text": "calculate [mathystuffs]",
                "arguments": {
                    "mathystuffs": {
                        "type": "string",
                        "defaultValue": "1 + 1"
                    }
                }
            }, {
                "opcode": "power",
                "blockType": "reporter",
                "text": "[base] ^ [exponent]",
                "arguments": {
                    "base": {
                        "type": "number",
                        "defaultValue": 2
                    },
                    "exponent": {
                        "type": "number",
                        "defaultValue": 3
                    }
                }
            }, {
                "opcode": "openurl",
                "blockType": "command",
                "text": "open [url] in new tab",
                "arguments": {
                    "url": {
                        "type": "string",
                        "defaultValue": "http://www.google.com/"
                    }
                }
            }, {
                "opcode": "searchNewTab",
                "blockType": "command",
                "text": "search [query] on %m.searchEngine",
                "arguments": {
                    "query": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "userPage",
                "blockType": "command",
                "text": "open user page for [user]",
                "arguments": {
                    "user": {
                        "type": "string",
                        "defaultValue": "Lightnin"
                    }
                }
            }, {
                "opcode": "pieBlock",
                "blockType": "reporter",
                "text": "%m.PIE",
                "arguments": {}
            }, {
                "opcode": "trueBlock",
                "blockType": "Boolean",
                "text": "true",
                "arguments": {}
            }, {
                "opcode": "falseBlock",
                "blockType": "Boolean",
                "text": "false",
                "arguments": {}
            }, {
                "opcode": "factorialBlock",
                "blockType": "reporter",
                "text": "[num] factorial",
                "arguments": {
                    "num": {
                        "type": "number",
                        "defaultValue": 10
                    }
                }
            }]
        };
    }
    alert_stuffs({
        alert,
        callback
    }) {
        window.alert(alert);
        callback();
    }
    calculate({
        mathystuffs
    }) {
        return eval(mathystuffs.replace(/[^-()\d/*+.]/g, ''));
    }
    power({
        base,
        exponent
    }) {
        return Math.pow(base, exponent);
    }
    openurl({
        url,
        callback
    }) {
        var openurlwin = window.open(url, '_blank');
        openurlwin.focus();
        callback();
    }
    searchNewTab({
        query,
        engine,
        callback
    }) {
        var realquery = query.replace(" ", "+");
        if (engine == 'Google') {
            window.open('http://www.google.com/search?q=' + realquery, '_blank').focus();
        } else if (engine == 'Duck Duck Go') {
            window.open('http://www.duckduckgo.com/?q=' + realquery, '_blank').focus();
        } else if (engine == 'Bing') {
            window.open('http://bing.com/search?q=' + realquery, '_blank').focus();
        } else if (engine == 'Ask') {
            window.open('http://ask.com/web?q=' + realquery, '_blank').focus();
        } else if (engine == 'Yahoo') {
            window.open('http://search.yahoo.com/search?q=' + realquery + '&fr=sfp', '_blank').focus();
        } else {
            return;
        }
        callback();
    }
    userPage({
        user,
        callback
    }) {
        window.open('http://scratch.mit.edu/users/' + user, '_blank').focus();
        callback();
    }
    pieBlock({
        pie
    }) {
        if (pie == 'pi') {
            return Math.PI;
        } else if (pie == 'e') {
            return Math.E;
        } else {
            return;
        }
    }
    trueBlock({}) {
        return true;
    }
    falseBlock({}) {
        return false;
    }
    factorialBlock({
        num
    }) {
        var rval = 1;
        for (var i = 2; i <= num; i++) {
            rval = rval * i;
        }
        if (true) {
            return rval;
        }
    }
}
Scratch.extensions.register(new Coolhelpfulthingsextension());