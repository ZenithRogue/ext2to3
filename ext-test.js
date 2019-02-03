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
                        "type": "number"
                    },
                    "B": {
                        "type": "number"
                    },
                    "C": {
                        "type": "number"
                    }
                }
            }, {
                "opcode": "power",
                "blockType": "reporter",
                "text": "[A] ^ [B]",
                "arguments": {
                    "A": {
                        "type": "number"
                    },
                    "B": {
                        "type": "number"
                    }
                }
            }, {
                "opcode": "textif",
                "blockType": "reporter",
                "text": "if [A] then [B] else [C]",
                "arguments": {
                    "A": {
                        "type": "Boolean"
                    },
                    "B": {
                        "type": "string"
                    },
                    "C": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "alertbox",
                "blockType": "command",
                "text": "alert [A]",
                "arguments": {
                    "A": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "whenThis",
                "blockType": "hat",
                "text": "when [A]",
                "arguments": {
                    "A": {
                        "type": "Boolean"
                    }
                }
            }, {
                "opcode": "mathy",
                "blockType": "reporter",
                "text": "[A] %m.supermath [B]",
                "arguments": {
                    "A": {
                        "type": "number"
                    },
                    "B": {
                        "type": "number"
                    }
                }
            }, {
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "letters [A] through [B] of [C]",
                "arguments": {
                    "A": {
                        "type": "number"
                    },
                    "B": {
                        "type": "number"
                    },
                    "C": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "javablock",
                "blockType": "reporter",
                "text": "javascript [A]",
                "arguments": {
                    "A": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "blank",
                "blockType": "command",
                "text": "[A]",
                "arguments": {
                    "A": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "itOfStr",
                "blockType": "reporter",
                "text": "word [A] of [B] separated by [C]",
                "arguments": {
                    "A": {
                        "type": "number"
                    },
                    "B": {
                        "type": "string"
                    },
                    "C": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "exclu",
                "blockType": "Boolean",
                "text": "[A] xor [B]",
                "arguments": {
                    "A": {
                        "type": "Boolean"
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
                        "type": "string"
                    },
                    "B": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "dPrompt",
                "blockType": "reporter",
                "text": "prompt user with [A]",
                "arguments": {
                    "A": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "repAll",
                "blockType": "reporter",
                "text": "replace all of [A] in [B] with [C]",
                "arguments": {
                    "A": {
                        "type": "string"
                    },
                    "B": {
                        "type": "string"
                    },
                    "C": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "greaterOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≥ [B]",
                "arguments": {
                    "A": {
                        "type": "string"
                    },
                    "B": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "lessOrEqual",
                "blockType": "Boolean",
                "text": "[A] ≤ [B]",
                "arguments": {
                    "A": {
                        "type": "string"
                    },
                    "B": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "jQuGet",
                "blockType": "reporter",
                "text": "get data from url: [A]",
                "arguments": {
                    "A": {
                        "type": "string"
                    }
                }
            }]
        };
    }
}
Scratch.extensions.register(new NitroBlock());
