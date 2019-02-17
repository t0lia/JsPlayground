"use strict";


var APP = {};
APP.createCalculator = function (initial) {
    var acc = initial;
    var op;
    var sum = function (arg) {
        acc += arg;
    };
    var sub = function (arg) {
        acc -= arg;
    };
    var mul = function (arg) {
        acc *= arg;
    };
    var div = function (arg) {
        acc /= arg;
    };
    return {
        "acc": function () {
            return acc;
        },
        "sum": function (arg) {
            acc = arg;
            op = sum;
        },
        "sub": function (arg) {
            acc = arg;
            op = sub;
        },
        "mul": function (arg) {
            acc = arg;
            op = mul;
        },
        "div": function (arg) {
            acc = arg;
            op = div;
        },
        "clr": function () {
            acc = 0;
            op = undefined;
        },
        "eql": function (arg) {
            op(arg);
            op = undefined;
            return acc;
        }
    };
};


var calc = APP.createCalculator(0);

/* This assigns the element with id 'buttonId' to 'btn' */
var bntDot = document.getElementById("bntDot");
var btn0 = document.getElementById("btn0");
var btn00 = document.getElementById("btn00");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

var btnSum = document.getElementById("btnSum");
var btnDiv = document.getElementById("btnDiv");
var btnEql = document.getElementById("btnEql");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnClr = document.getElementById("btnClr");

var res = document.getElementById("res");

btnDot.onclick = function () {
    res.innerHTML = res.innerHTML + ".";
};
btn00.onclick = function () {
    res.innerHTML = res.innerHTML + "00";
};
btn0.onclick = function () {
    res.innerHTML = res.innerHTML + "0";
};
btn1.onclick = function () {
    res.innerHTML = res.innerHTML + "1";
};
btn2.onclick = function () {
    res.innerHTML = res.innerHTML + "2";
};
btn3.onclick = function () {
    res.innerHTML = res.innerHTML + "3";
};
btn4.onclick = function () {
    res.innerHTML = res.innerHTML + "4";
};
btn5.onclick = function () {
    res.innerHTML = res.innerHTML + "5";
};
btn6.onclick = function () {
    res.innerHTML = res.innerHTML + "6";
};
btn7.onclick = function () {
    res.innerHTML = res.innerHTML + "7";
};
btn8.onclick = function () {
    res.innerHTML = res.innerHTML + "8";
};
btn9.onclick = function () {
    res.innerHTML = res.innerHTML + "9";
};

btnClr.onclick = function () {
    res.innerHTML = "";
    calc.clr();
};
btnSum.onclick = function () {
    calc.sum(Number(res.innerHTML));
    res.innerHTML = "";
};
btnSub.onclick = function () {
    calc.sub(Number(res.innerHTML));
    res.innerHTML = "";
};
btnMul.onclick = function () {
    calc.mul(Number(res.innerHTML));
    res.innerHTML = "";
};
btnDiv.onclick = function () {
    calc.div(Number(res.innerHTML));
    res.innerHTML = "";
};
btnEql.onclick = function () {
    res.innerHTML = calc.eql(Number(res.innerHTML));
};
