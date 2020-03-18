// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
let noProblems = 50;
let perRow = 3;
let mode = 0;
// 0 : fixed sala
// 1 : fixed alphabet
// 2 : free style
// 3 : alphabet only

if (args.shortcutParameter) {
    mode = parseInt(args.shortcutParameter);
}
let alphabets = [
    '&#3585;',
    '&#3586;',
    '&#3588;',
    '&#3590;',
    '&#3591;',
    '&#3592;',
    '&#3593;',
    '&#3594;',
    '&#3595;',
    '&#3596;',
    '&#3597;',
    '&#3598;',
    '&#3599;',
    '&#3600;',
    '&#3601;',
    '&#3602;',
    '&#3603;',
    '&#3604;',
    '&#3605;',
    '&#3606;',
    '&#3607;',
    '&#3608;',
    '&#3609;',
    '&#3610;',
    '&#3611;',
    '&#3612;',
    '&#3613;',
    '&#3614;',
    '&#3615;',
    '&#3616;',
    '&#3617;',
    '&#3618;',
    '&#3619;',
    '&#3621;',
    '&#3623;',
    '&#3624;',
    '&#3625;',
    '&#3626;',
    '&#3627;',
    '&#3628;',
    '&#3629;',
    '&#3630;'
];
let sounds = [
    'x&#3632;', // อะ
    'x&#3634;', // อา
    'x&#3636;', // อิ
    'x&#3637;', // อี
    'x&#3638;', // อึ
    'x&#3639;', // อื
    'x&#3640;', // อุ
    'x&#3641;', // อู
    '&#3648;x&#3632;', // เอะ
    '&#3648;x', // เอ
    '&#3649;x&#3632;', // แอะ
    '&#3649;x', // แอ
    '&#3650;x&#3632;', // โอะ
    '&#3650;x', // โอ
    '&#3648;x&#3634;&#3632;', // เอาะ
    'x&#3629;', // ออ
    '&#3648;x&#3629;&#3632;', // เออะ
    '&#3648;x&#3629;', // เออ
    '&#3648;x&#3637;&#3618;&#3632;', // เอียะ
    '&#3648;x&#3637;&#3618;', // เอีย
    '&#3648;x&#3639;&#3629;&#3632;', // เอือะ
    '&#3648;x&#3639;&#3629;', // เอือ
    'x&#3633;&#3623;&#3632;', // อัวะ
    'x&#3633;&#3623;', // อัว
    'x&#3635;', // อำ
    '&#3652;x', // ไอ
    '&#3651;x', // ใอ
    '&#3648;x&#3634;' // เอา
];

let final ='<table>xxx</table>';
let symbol = 0;
let alpha = 0;
let sara = '';
let payan = '';
symbol = Math.floor(Math.random() * (sounds.length));
alpha = Math.floor(Math.random() * (alphabets.length));


let rowTrack = 0;
let str = '';
for (var i=0;i< noProblems;i++) {
    if (rowTrack === 0) {
        str = str + '<tr>';
    }
    if (mode !== 0) {
        symbol = Math.floor(Math.random() * (sounds.length));
    }
    sara = sounds[symbol];
    if (mode === 3) {
        sara = 'x';
    }
    if (mode !== 1) {
        alpha = Math.floor(Math.random() * (alphabets.length));
    }
    payan = alphabets[alpha];
    str = str + '<td><svg width="100px" height="200px"><text x="0" y="50" font-size="3em">' + sara.replace('x', payan) + '</text></svg></td><td><svg width="200px" height="200px"><text x="0" y="50" font-size="3em">_____________________</text></svg></td>';
    rowTrack++;
    if (rowTrack === perRow) {
        str = str + '</tr>';
        rowTrack = 0;
    }
}
if (rowTrack !== perRow) {
    str = str + '</tr>';
}

final = final.replace('xxx', str);
Pasteboard.copyString(final);
Script.complete();
