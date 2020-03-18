let noProblems = 50;
let perRow = 5;
let thai = {};
thai.number = {
'0': '&#3664;', // ๐
'1': '&#3665;', // ๑
'2': '&#3666;', // ๒
'3': '&#3667;', // ๓
'4': '&#3668;', // ๔
'5': '&#3669;', // ๕
'6': '&#3670;', // ๖
'7': '&#3671;', // ๗
'8': '&#3672;', // ๘
'9': '&#3673;'  // ๙
};

let maxNum = 100;
let num = 0;
let divisor = 10000;
let mult = 1;
let solutions = [];
let answers = [];
let str = '';
let start = false;
for (var i = 0;i < noProblems;i++) {
    num = Math.floor(Math.random() * (maxNum + 0.99999));
    str = '';
    start = false;
    divisor = 10000;
    solutions.push(num);
    while (num > 0) {
        mult = Math.floor(num / divisor);
        if (mult >= 1.0) {
            start = true;
        }
        if (start) {
            num = Math.floor(num - (mult * divisor));
            str = str + thai.number[mult.toString()];
        }
        divisor = divisor / 10;
    }
    answers.push(str);
}

str = '<table><tr>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">English</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">0</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">1</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">2</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">3</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">4</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">5</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">6</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">7</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">8</text></svg></td>';
str = str + '<td><svg width="50px" height="30px"><text x="0" y="15" font-size="1em">9</text></svg></td></tr><tr>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="1em">Thai</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3664;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3665;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3666;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3667;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3668;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3669;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3670;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3671;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3672;</text></svg></td>';
str = str + '<td><svg width="50px" height="90px"><text x="0" y="45" font-size="3em">&#3673;</text></svg></td></tr></table>';

str = str + '<table>';
let rowTrack = 0;
for (var i = 0;i < noProblems;i++) {
    if (rowTrack === 0) {
        str = str + '<tr>';
    }
    str = str + '<td><svg width="50px" height="75px"><text x="0" y="30" font-size="1em">' + solutions[i].toString() + '</text></svg></td><td><svg width="100px" height="75px"><text x="0" y="30" font-size="1em">____________</text></svg></td>';
    rowTrack++;
    if (rowTrack === perRow) {
        str = str + '</tr>';
        rowTrack = 0;
    }
}
str = str + '</table>';
str = str + '<br><svg width="200px" height="90px"><text x="0" y="45" font-size="1em">5 Minutes</text></svg>';
