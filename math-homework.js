
// Math only
let noProblems = 5;
let problemPerLine = 5;
let noOperand = 7;
let operation = 'school_fraction_algebra';
//
//operation = 'abacus_integer_add_sub';
operation = 'abacus_decimal_add_sub';
//operation = 'abacus_integer_mult_div';
//operation = 'school_decimal_mult_div';
//operation = 'school_grade1_expanded_form';
//operation = 'school_fraction_algebra';
//operation = 'school_integer_algebra';
//operation = 'school_decimal_algebra';
let problems = {};

problems.abacus = {};
problems.school = {};
problems.helper = {};

problems.helper.fraction_simplify = (num, den) => {
    let final_num = num;
    let final_den = den;

    while (final_num % 2 == 0 && final_den % 2 == 0) {
        final_num = final_num / 2;
        final_den = final_den / 2;
    }
    while (final_num % 3 == 0 && final_den % 3 == 0) {
        final_num = final_num / 3;
        final_den = final_den / 3;
    }
    while (final_num % 5 == 0 && final_den % 5 == 0) {
        final_num = final_num / 5;
        final_den = final_den / 5;
    }
    while (final_num % 7 == 0 && final_den % 7 == 0) {
        final_num = final_num / 7;
        final_den = final_den / 7;
    }
    while (final_num % 11 == 0 && final_den % 11 == 0) {
        final_num = final_num / 11;
        final_den = final_den / 11;
    }
    while (final_num % 13 == 0 && final_den % 13 == 0) {
        final_num = final_num / 13;
        final_den = final_den / 13;
    }
    while (final_num % 17 == 0 && final_den % 17 == 0) {
        final_num = final_num / 17;
        final_den = final_den / 17;
    }
    while (final_num % 19 == 0 && final_den % 19 == 0) {
        final_num = final_num / 19;
        final_den = final_den / 19;
    }
    while (final_num % 23 == 0 && final_den % 23 == 0) {
        final_num = final_num / 23;
        final_den = final_den / 23;
    }
    while (final_num % 29 == 0 && final_den % 29 == 0) {
        final_num = final_num / 29;
        final_den = final_den / 29;
    }
    while (final_num % 31 == 0 && final_den % 31 == 0) {
        final_num = final_num / 31;
        final_den = final_den / 31;
    }
    while (final_num % 37 == 0 && final_den % 37 == 0) {
        final_num = final_num / 37;
        final_den = final_den / 37;
    }
    return [final_num, final_den];
};

problems.abacus.integer_add_sub = (probCnt, operCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 100;
        let q = [];
        for (var j=0;j < operCnt;j++) {
            let value = -1*total - 1;
            let sign = -1;
            while (total + value < 0) {
                value = Math.floor(Math.random() * maxValue);
                sign = Math.random() < 0.5 ? -1 : 1;
                value = value * sign;
            }
            total = total + value;
            q.push(value);
        }
        sets.push(q);
    }
    return sets;
};

problems.abacus.decimal_add_sub = (probCnt, operCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0.0;
        let maxValue = 100.0;
        let q = [];
        for (var j=0;j < operCnt;j++) {
            let value = -1.0*total - 1.0;
            let sign = -1;
            while (total + value < 0) {
                value = Math.floor(Math.random() * maxValue * 100.0);
                sign = Math.random() < 0.5 ? -1.0 : 1.0;
                value = value * sign / 100.0;
            }
            total = total + value;
            q.push(value);
        }
        sets.push(q);
    }
    return sets;
};

problems.abacus.integer_mult_div = (probCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 100;
        let q = [];
        let sign = 1;
        let op1 = 1.0;
        let op2 = 1.0;
        op1 = Math.ceil(Math.random() * maxValue);
        op2 = Math.ceil(Math.random() * maxValue);
        sign = Math.random() < 0.5 ? 0 : 1;
        q.push(sign);

        if (sign === 0) {
            q.push(op1);
        } else {
            q.push(op2 * op1);
        }
        q.push(op2);
        sets.push(q);
    }
    return sets;
};

problems.school.decimal_mult_div = (probCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 10;
        let q = [];
        let sign = 1;
        let op1 = 1.0;
        let op2 = 1.0;
        op1 = Math.ceil(Math.random() * maxValue * 100.0);
        op2 = Math.ceil(Math.random() * maxValue * 100.0);
        sign = Math.random() < 0.5 ? 0 : 1;
        q.push(sign);

        if (sign === 0) {
            q.push(op1 / 100.0);
        } else {
            q.push(Math.ceil(op2 * op1) / 10000.0);
        }
        q.push(op2 / 100.0);
        sets.push(q);
    }
    return sets;
};

problems.school.fraction_algebra = (probCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 17;
        let q = [];
        let sign = 1;
        let op1 = 1;
        let op2 = 1;
        let op3 = 1;
        let op4 = 1;
        let op5 = 1;
        op2 = Math.floor(Math.random() * maxValue) + 1;
        op1 = Math.floor(Math.random() * (op2 - 1)) + 1;
        op4 = Math.floor(Math.random() * maxValue) + 1;
        op3 = Math.floor(Math.random() * (op4 - 1)) + 1;
        let s = Math.random();
        sign = s < 0.25 ? 0 : (s < 0.50 ? 1 : 2);
        q.push(sign);

        q.push(op1);
        q.push(op2);
        q.push(op3);
        q.push(op4);
        if (sign < 2) {
            
            if (sign == 0) {
                op5 = Math.floor(Math.random() * (op3 - 1)) + 1;
            } else {
                op5 = Math.floor(Math.random() * (op4 - 1)) + 1;
            }
            q.push(op5);
            q.push(op4);
        }
        sets.push(q);
    }
    return sets;
};

problems.school.decimal_algebra = (probCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 17;
        let q = [];
        let sign = 1;
        let op1 = 1;
        let op2 = 1;
        let op3 = 1;
        let op4 = 1;
        let op5 = 1;
        op1 = Math.ceil(Math.random() * 100.0);
        op3 = Math.ceil(Math.random() * 100.0);
        op5 = Math.ceil(Math.random() * 10) + 5; 
        let s = Math.random();
        sign = s < 0.25 ? 0 : (s < 0.50 ? 1 : 2);
        q.push(sign);
        q.push(op1 / 100.0);
        
        if (sign > 1) {
            q.push(Math.ceil(op3 * op1) / 10000.0);
        } else {
            let value = 0.0;
            if (sign === 0) {
                value = Math.ceil(op5 * op1 + op3) / 100.0; 
            } else {
                value = Math.ceil(op5 * op1 - op3) / 100.0; 
            }
            while (value <= 0.0) {
                value = Math.ceil((value + op1) * 100.0) / 100.0;
            }
            q.push(value);
            q.push(op3 / 100.0);
        }
        sets.push(q);
    }
    return sets;
};

problems.school.integer_algebra = (probCnt) => {
    let sets = [];
    for (var i=0;i < probCnt;i++) {
        let total = 0;
        let maxValue = 17;
        let q = [];
        let sign = 1;
        let op1 = 1;
        let op2 = 1;
        let op3 = 1;
        let op4 = 1;
        let op5 = 1;
        op2 = 1.0;
        op1 = Math.ceil(Math.random() * maxValue);
        op4 = 1.0;
        op3 = Math.ceil(Math.random() * maxValue);
        let s = Math.random();
        sign = s < 0.25 ? 0 : (s < 0.50 ? 1 : 2);
        q.push(sign);

        if (sign > 1) {
            q.push(op1);
            q.push(Math.ceil(op3 * op1));
        } else {
            op5 = Math.ceil(Math.random() * 12.0); 
            q.push(op1);
            if (sign === 0) {
                q.push(op1 * op5 + op3);
            } else {
                q.push(op1 * op5 - op3);
            }
        }
        if (sign < 2) {
            q.push(op3);
        }
        sets.push(q);
    }
    return sets;
};


problems.school.grade1_expanded_form = (probCnt) => {
    return problems.abacus.integer_add_sub(probCnt, 1)
};


problems.generate = (operation, probCnt, operCnt) => {
    let result = [];
    if (operation === 'abacus_integer_add_sub') {
        result = problems.abacus.integer_add_sub(probCnt, operCnt);
    }
    if (operation === 'abacus_decimal_add_sub') {
        result = problems.abacus.decimal_add_sub(probCnt, operCnt);
    }
    if (operation === 'abacus_integer_mult_div') {
        result = problems.abacus.integer_mult_div(probCnt);
    }
    if (operation === 'school_decimal_mult_div') {
        result = problems.school.decimal_mult_div(probCnt);
    }
    if (operation === 'school_grade1_expanded_form') {
        result = problems.school.grade1_expanded_form(probCnt);
    }
    if (operation === 'school_fraction_algebra') {
        result = problems.school.fraction_algebra(probCnt);
    }
    if (operation === 'school_decimal_algebra') {
        result = problems.school.decimal_algebra(probCnt);
    }
    if (operation === 'school_integer_algebra') {
        result = problems.school.integer_algebra(probCnt);
    }
    return result;
};

problems.render = (operation, probSet) => {
    let result = [];
    let answer = [];

    if ((operation === 'abacus_integer_add_sub') ||
        (operation === 'abacus_decimal_add_sub')){
        let anitem = probSet[0];
        let len = anitem.length;
        for (var k=0;k<len;k++){
            let str = '';
            for (var i=0;i<probSet.length;i++) {
                let item = probSet[i];
                str = str + item[k] + ' \& \& ';
            }
            result.push(str);
        }
        for (var i=0;i<probSet.length;i++) {
            let item = probSet[i];
            let str = '';
            let total = 0;
            for (var j = 0;j < item.length; j++){
                // str = str + item[j] + '<br>';
                total = total + item[j];
            }
            if (operation === 'abacus_decimal_add_sub') {
                answer.push(Math.ceil(total * 100.0) / 100.0);
            } else {
                answer.push(total);
            }
        }
    }
    if (operation === 'abacus_integer_mult_div') {
        for (var i = 0;i < probSet.length;i++) {
            let item = probSet[i];
            var str = '';
            let value = 0;
            if (item[0] === 1) {
                str = `${item[1]} \\div ${item[2]} = \?`;
                value = item[1] / item[2];
                result.push(str);
                answer.push(value);
            } else {
                str = `${item[1]} \\ast ${item[2]} = \?`;
                value = item[1] * item[2];
                result.push(str);
                answer.push(value);
            }
        }
    }
    if (operation === 'school_decimal_mult_div') {
        for (var i = 0;i < probSet.length;i++) {
            let item = probSet[i];
            var str = '';
            let value = 0;
            if (item[0] === 1) {
                str = `${item[1]} \\div ${item[2]} = \?`;
                value = Math.ceil(item[1] * 100.0 / item[2]) / 100.0;
                result.push(str);
                answer.push(value);
            } else {
                str = `${item[1]} \\ast ${item[2]} = \?`;
                value = Math.ceil(item[1] * item[2] * 10000.0) / 10000.0;
                result.push(str);
                answer.push(value);
            }
        }
    }
    if (operation === 'school_grade1_expanded_form') {
        for (var i = 0;i < probSet.length;i++) {

            let item = probSet[i];
            var str = '';

            let firstOrSecond = Math.random() < 0.5 ? 0 : 1;
            let second = item[0] % 10;
            let first = item[0] - second;
            let value = 0;
            if (firstOrSecond === 1) {
                str = `${item[0]} = ${first} + ____`;
                result.push(str);
                answer.push(second);
            } else {
                str = `${item[0]} = ____ + ${second}`;
                result.push(str);
                answer.push(first);
            }
        }
    }
    if (operation === 'school_fraction_algebra') {
        for (var i = 0;i < probSet.length;i++) {
            let item = probSet[i];
            var str = '';
            let ans = [];
            let ans_num = 0;
            let ans_den = 0;
            let value = 0;
            if (item[0] === 2) {
                str = `\\frac\{${item[1]}\}\{${item[2]}\} \\ast x = \\frac\{${item[3]}\}\{${item[4]}\}`;
                ans = problems.helper.fraction_simplify(item[3] * item[2], item[4] * item[1]);
                value = `\\frac\{${ans[0]}\}\{${ans[1]}\}`;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 1) {
                str = `\\frac\{${item[1]}\}\{${item[2]}\} \\ast x - \\frac\{${item[5]}\}\{${item[6]}\} = \\frac\{${item[3]}\}\{${item[4]}\}`;
                let num = (item[3] * item[6]) + (item[5] * item[4]);
                let den = item[4] * item[6];
                ans = problems.helper.fraction_simplify(num * item[2], den * item[1]);
                value = `\\frac\{${ans[0]}\}\{${ans[1]}\}`;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 0) {
                str = `\\frac\{${item[1]}\}\{${item[2]}\} \\ast x + \\frac\{${item[5]}\}\{${item[6]}\} = \\frac\{${item[3]}\}\{${item[4]}\}`;
                let num = (item[3] * item[6]) - (item[5] * item[4]);
                let den = item[4] * item[6];
                ans = problems.helper.fraction_simplify(num * item[2], den * item[1]);
                value = `\\frac\{${ans[0]}\}\{${ans[1]}\}`;
                result.push(str);
                answer.push(value);
            }
        }
    }
    if (operation === 'school_decimal_algebra') {
        for (var i = 0;i < probSet.length;i++) {
            let item = probSet[i];
            var str = '';
            let value = 0;
            if (item[0] === 2) {
                str = `${item[1]} \\ast x = ${item[2]}`;
                value = Math.ceil((item[2] / item[1]) * 100.0) / 100.0;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 1) {
                str = `${item[1]} \\ast x - ${item[3]} = ${item[2]}`;
                value = Math.ceil(((item[2] + item[3]) * 100.0 / item[1])) / 100.0;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 0) {
                str = `${item[1]} \\ast x + ${item[3]} = ${item[2]}`;
                value = Math.ceil(((item[2] - item[3]) * 100.0 / item[1])) / 100.0;
                result.push(str);
                answer.push(value);
            }
        }
    }
    if (operation === 'school_integer_algebra') {
        for (var i = 0;i < probSet.length;i++) {
            let item = probSet[i];
            var str = '';
            let value = 0;
            if (item[0] === 2) {
                if (item[1] === 1) {
                    str = `x = ${item[2]}`;
                } else {
                    str = `${item[1]} \\ast x = ${item[2]}`;
                }
                value = Math.ceil((item[2] / item[1]) * 100.0) / 100.0;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 1) {
                if (item[1] === 1) {
                    str = `x - ${item[3]} = ${item[2]}`;
                } else {
                    str = `${item[1]} \\ast x - ${item[3]} = ${item[2]}`;
                }
                value = Math.ceil(((item[2] + item[3]) * 100.0 / item[1])) / 100.0;
                result.push(str);
                answer.push(value);
            }
            if (item[0] === 0) {
                if (item[1] === 1) {
                    str = `x + ${item[3]} = ${item[2]}`;
                } else {
                    str = `${item[1]} \\ast x + ${item[3]} = ${item[2]}`;
                }
                value = Math.ceil(((item[2] - item[3]) * 100.0 / item[1])) / 100.0;
                result.push(str);
                answer.push(value);
            }
        }
    }


    let eqn = '';

    let solution = '';
        

    for (var j = 0;j < result.length;j++) {
        eqn = eqn + result[j] + '\\\\';
    }
    eqn = `\\begin\{bmatrix\} ${eqn} \\end\{bmatrix\}`;
    for (var j = 0;j < answer.length;j++) {
        solution = solution + answer[j] + ' \& \& ';
    }
    solution = solution.substring(0, solution.length - 4);
    solution = `\\begin\{pmatrix\} ${solution} \\end\{pmatrix\}`
    return eqn + ` \\\\\\\\\\\\\\\\ ` + solution; //[result, answer];
};

let probSet = problems.generate(operation, noProblems, noOperand);
let result = problems.render(operation, probSet);
console.log(result);
