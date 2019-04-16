class Gamepad {
    //Converted from https://gist.githubusercontent.com/NitroCipher/11a62e25e10a583c7e6af671e30f2451/raw/05296e14abe4165cac472e03bd05e125d7c52785/gamepad.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "Gamepad",
            "name": "Gamepad",
            "blocks": [{
                "opcode": "ispressed",
                "blockType": "Boolean",
                "text": "[b] is pressed?",
                "arguments": {
                    "b": {
                        "type": "string",
                        "menu": "buttons",
                        "defaultValue": "A"
                    }
                }
            }, {
                "opcode": "ispressed",
                "blockType": "hat",
                "text": "When [b] is pressed",
                "arguments": {
                    "b": {
                        "type": "string",
                        "menu": "buttons",
                        "defaultValue": "A"
                    }
                }
            }, {
                "opcode": "stickpos",
                "blockType": "reporter",
                "text": "[s] stick [hv] position",
                "arguments": {
                    "s": {
                        "type": "string",
                        "menu": "lr",
                        "defaultValue": "Left"
                    },
                    "hv": {
                        "type": "string",
                        "menu": "hv",
                        "defaultValue": "Horizontal"
                    }
                }
            }, {
                "opcode": "stickfacing",
                "blockType": "reporter",
                "text": "[s] stick [hvb] direction",
                "arguments": {
                    "s": {
                        "type": "string",
                        "menu": "lr",
                        "defaultValue": "Left"
                    },
                    "hvb": {
                        "type": "string",
                        "menu": "hvb",
                        "defaultValue": "Both"
                    }
                }
            }, {
                "opcode": "stickis",
                "blockType": "Boolean",
                "text": "[s] stick is facing [dir]",
                "arguments": {
                    "s": {
                        "type": "string",
                        "menu": "lr",
                        "defaultValue": "Left"
                    },
                    "dir": {
                        "type": "string",
                        "menu": "dir?",
                        "defaultValue": "Up"
                    }
                }
            }, {
                "opcode": "stickis",
                "blockType": "hat",
                "text": "When [s] stick is facing [dir]",
                "arguments": {
                    "s": {
                        "type": "string",
                        "menu": "lr",
                        "defaultValue": "Left"
                    },
                    "dir": {
                        "type": "string",
                        "menu": "dir",
                        "defaultValue": "Up"
                    }
                }
            }, {
                "opcode": "aefe",
                "blockType": "reporter",
                "text": "[s] stick [af]",
                "arguments": {
                    "s": {
                        "type": "string",
                        "menu": "lr",
                        "defaultValue": "Left"
                    },
                    "af": {
                        "type": "string",
                        "menu": "aefe",
                        "defaultValue": "Angle"
                    }
                }
            }],
            "menus": {
                buttons: this._formatMenu(['Y', 'B', 'A', 'X', 'LB', 'RB', 'LT', 'RT', 'SELECT', 'START', 'LEFT STICK', 'RIGHT STICK']),
                lr: this._formatMenu(['Left', 'Right']),
                hv: this._formatMenu(['Horizontal', 'Vertical']),
                hvb: this._formatMenu(['Horizontal', 'Vertical', 'Both']),
                dir: this._formatMenu(['Up', 'Down', 'Left', 'Right', 'Up Left', 'Up Right', 'Down Left', 'Down Right']),
                aefe: this._formatMenu(['Angle', 'Force']),
            }
        };
    }
    ispressed({
        b
    }) {
        return (controllers[0].buttons[["Y", "B", "A", "X", "LB", "RB", "LT", "RT", "SELECT", "START", "LEFT STICK", "RIGHT STICK"].indexOf(b)].pressed); // Return if the user is pressing the button given to the function
    }
    ispressed({
        b
    }) {
        return (controllers[0].buttons[["Y", "B", "A", "X", "LB", "RB", "LT", "RT", "SELECT", "START", "LEFT STICK", "RIGHT STICK"].indexOf(b)].pressed); // Return if the user is pressing the button given to the function
    }
    stickpos({
        s,
        hv
    }) {
        return (controllers[0].axes[(["LeftHorizontal", "LeftVertical", "RightHorizontal", "", "", "RightVertical"].indexOf(s + hv))]); // Return the value of the axes for the stick and the direction specified
    }
    stickfacing({
        s,
        hvb
    }) { // Return a plaintext direction for a control stick
        let output = "";
        if (s == "Left") {
            if (hvb == "Both" || hvb == "Vertical") {
                if (controllers[0].axes[1] < -.5) {
                    output += "Up "
                } else if (controllers[0].axes[1] > .5) {
                    output += "Down "
                }
            }
            if (hvb == "Both" || hvb == "Horizontal") {
                if (controllers[0].axes[0] < -.5) {
                    output += "Left"
                } else if (controllers[0].axes[0] > .5) {
                    output += "Right"
                }
            }

        };
        if (s == "Right") {
            if (hvb == "Both" || hvb == "Vertical") {
                if (controllers[0].axes[5] < -.5) {
                    output += "Up "
                } else if (controllers[0].axes[5] > .5) {
                    output += "Down "
                }
            }
            if (hvb == "Both" || hvb == "Horizontal") {
                if (controllers[0].axes[2] < -.5) {
                    output += "Left"
                } else if (controllers[0].axes[2] > .5) {
                    output += "Right"
                }
            }
        };
        return (output);
    }
    stickis({
        s,
        dir
    }) { // Return true or false depending on if the specified stick is facing a direction
        if (s == "Left") {
            if (dir == "Up") {
                return (controllers[0].axes[1] < -.5)
            }
            if (dir == "Down") {
                return (controllers[0].axes[1] > .5)
            }
            if (dir == "Left") {
                return (controllers[0].axes[0] < -.5)
            }
            if (dir == "Right") {
                return (controllers[0].axes[0] > .5)
            }
            if (dir == "Up Left") {
                return (controllers[0].axes[1] < -.5 && (controllers[0].axes[0] < -.5))
            }
            if (dir == "Up Right") {
                return (controllers[0].axes[1] < -.5 && (controllers[0].axes[0] > .5))
            }
            if (dir == "Down Left") {
                return (controllers[0].axes[1] > .5 && (controllers[0].axes[0] < -.5))
            }
            if (dir == "Down Right") {
                return (controllers[0].axes[1] > .5 && (controllers[0].axes[0] > .5))
            }
        }
        if (s == "Left") {
            if (dir == "Up") {
                return (controllers[0].axes[5] < -.5)
            }
            if (dir == "Down") {
                return (controllers[0].axes[5] > .5)
            }
            if (dir == "Left") {
                return (controllers[0].axes[2] < -.5)
            }
            if (dir == "Right") {
                return (controllers[0].axes[2] > .5)
            }
            if (dir == "Up Left") {
                return (controllers[0].axes[5] < -.5 && (controllers[0].axes[2] < -.5))
            }
            if (dir == "Up Right") {
                return (controllers[0].axes[5] < -.5 && (controllers[0].axes[2] > .5))
            }
            if (dir == "Down Left") {
                return (controllers[0].axes[5] > .5 && (controllers[0].axes[2] < -.5))
            }
            if (dir == "Down Right") {
                return (controllers[0].axes[5] > .5 && (controllers[0].axes[2] > .5))
            }
        }

    }
    stickis({
        s,
        dir
    }) { // Return true or false depending on if the specified stick is facing a direction
        if (s == "Left") {
            if (dir == "Up") {
                return (controllers[0].axes[1] < -.5)
            }
            if (dir == "Down") {
                return (controllers[0].axes[1] > .5)
            }
            if (dir == "Left") {
                return (controllers[0].axes[0] < -.5)
            }
            if (dir == "Right") {
                return (controllers[0].axes[0] > .5)
            }
            if (dir == "Up Left") {
                return (controllers[0].axes[1] < -.5 && (controllers[0].axes[0] < -.5))
            }
            if (dir == "Up Right") {
                return (controllers[0].axes[1] < -.5 && (controllers[0].axes[0] > .5))
            }
            if (dir == "Down Left") {
                return (controllers[0].axes[1] > .5 && (controllers[0].axes[0] < -.5))
            }
            if (dir == "Down Right") {
                return (controllers[0].axes[1] > .5 && (controllers[0].axes[0] > .5))
            }
        }
        if (s == "Left") {
            if (dir == "Up") {
                return (controllers[0].axes[5] < -.5)
            }
            if (dir == "Down") {
                return (controllers[0].axes[5] > .5)
            }
            if (dir == "Left") {
                return (controllers[0].axes[2] < -.5)
            }
            if (dir == "Right") {
                return (controllers[0].axes[2] > .5)
            }
            if (dir == "Up Left") {
                return (controllers[0].axes[5] < -.5 && (controllers[0].axes[2] < -.5))
            }
            if (dir == "Up Right") {
                return (controllers[0].axes[5] < -.5 && (controllers[0].axes[2] > .5))
            }
            if (dir == "Down Left") {
                return (controllers[0].axes[5] > .5 && (controllers[0].axes[2] < -.5))
            }
            if (dir == "Down Right") {
                return (controllers[0].axes[5] > .5 && (controllers[0].axes[2] > .5))
            }
        }

    }
    aefe({
        s,
        af
    }) { // Return the force or angle of a specified stick
        var xp, yp;
        switch (s) {
            case "Left":
                x = controllers[0].axes[0];
                y = -controllers[0].axes[1];
                break;
            case "Right":
                x = controllers[0].axes[2];
                y = -controllers[0].axes[5];
                break;
        }
        if (-ni < x && x < ni) x = 0;
        if (-ni < y && y < ni) y = 0;
        switch (af) {
            case "Angle":
                return (value = 180 * Math.atan2(x, y) / Math.PI);
                break;

            case "Force":
                return Math.sqrt(x * x + y * y);
                break;
        }
    }
    _formatMenu(menu) {
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
Scratch.extensions.register(new Gamepad());