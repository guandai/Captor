(function (undefined) {      
    var SPECIAL_KEYS = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        19: 'pause',
        27: 'escape',
        37: 'left arrow',
        39: 'right arrow',
        38: 'up arrow',
        40: 'down arrow',
        46: 'delete',
        91: 'cmd left',
        93: 'cmd right',
        '91-93': 'cmd',
        106: 'multiply',
        107: 'add',
        109: 'subtract',
        110: '^',
        111: '\\',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        221: ']',
        222: '\'',
        220: '\\',
        48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9',
        33: 'pgup', 34: 'pgdown',
        112: 'f1',
        113: 'f2',
        114: 'f3',
        115: 'f4',
        116: 'f5',
        117: 'f6',
        118: 'f7',
        119: 'f8',
        120: 'f9',
        121: 'f10',
        122: 'f11',
        123: 'f12'
    };

    var MAP = {
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        esc: 27,
        space: 32,
        cmd: [91, 93],
        arrowup: 38,
        arrowdown: 40,
        tilde: 192,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    };

    var REG_KEYS = {
        '=': 187,
        '-': 189,
        '0': 48, '1': 49, '2': 50,
        '3': 51, '4': 52, '5': 53,
        '6': 54, '7': 55, '8': 56,
        '9': 57
    };

    var start = 65;
    for (var i = start; i <= start + 25; ++i) {
        MAP[String.fromCharCode(i + 32)] = i;
        REG_KEYS[String.fromCharCode(i + 32)] = i;
    }

    var MOD_KEYS = {
        alt: true,
        ctrl: true,
        shift: true,
        cmd: true,
        f1: true, f2: true, f3: true, f4: true, f5: true, f6: true,
        f7: true, f8: true, f9: true, f10: true, f11: true, f12: true,
        win: true
    };

    var isModificationKey = function (key) {
        return key in MOD_KEYS;
    };

    var isRegularKey = function (key) {
        return key in REG_KEYS;
    };
    
    var pushed = false
    $(document).on('keydown', function(event) {
        if (Captor && Captor.enabled && pushed == false && event.keyCode == 118) {
            console.log("keydown F7")
            pushed = true
            Captor.loadclip()
        }
        
        if (Captor && pushed == false && event.keyCode == 117) {
            console.log("keydown F6")
            pushed = true
            Captor.toggle()
        }
    });

    $(document).on('keyup', function(event) {
        console.log("Captor.enabled:",Captor.enabled)
        pushed = false
    });

})();
