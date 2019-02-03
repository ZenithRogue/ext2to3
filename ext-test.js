class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                "opcode": "ncheck",
                "blockType": "Boolean",
                "text": "nitroblock?"
            }, {
                "opcode": "color",
                "blockType": "reporter",
                "text": "color %c"
            }, {
                "opcode": "rgb",
                "blockType": "reporter",
                "text": "red [A] green [B] blue [C]"
            }, {
                "opcode": "power",
                "blockType": "reporter",
                "text": "[A] ^ [B]"
            }, {
                "opcode": "textif",
                "blockType": "reporter",
                "text": "if [A] then [B] else [C]"
            }, {
                "opcode": "alertbox",
                "blockType": "command",
                "text": "alert [A]"
            }, {
                "opcode": "whenThis",
                "blockType": "hat",
                "text": "when [A]"
            }, {
                "opcode": "mathy",
                "blockType": "reporter",
                "text": "[A] %m.supermath [B]"
            }, {
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "letters [A] through [B] of [C]"
            }, {
                "opcode": "javablock",
                "blockType": "reporter",
                "text": "javascript [A]"
            }, {
                "opcode": "blank",
                "blockType": "command",
                "text": "[A]"
            }, {
                "opcode": "itOfStr",
                "blockType": "reporter",
                "text": "word [A] of [B] separated by [C]"
            }, {
                "opcode": "exclu",
                "blockType": "Boolean",
                "text": "[A] xor [B]"
            }, {
                "opcode": "strCont",
                "blockType": "Boolean",
                "text": "[A] contains [B]"
            }, {
                "opcode": "dPrompt",
                "blockType": "reporter",
                "text": "prompt user with [A]"
            }, {
                "opcode": "repAll",
                "blockType": "reporter",
                "text": "replace all of [A] in [B] with [C]"
            }, {
                "opcode": "greaterOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≥ [B]"
            }, {
                "opcode": "lessOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≤ [B]"
            }, {
                "opcode": "jQuGet",
                "blockType": "reporter",
                "text": "get data from url: [A]"
            }]
        };
    }
}
Scratch.extensions.register(new NitroBlock());
