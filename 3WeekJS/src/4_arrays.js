"use strict";

/* global describe, it */
var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;


describe("arrays", function () {
    it("push", function () {
        var array = [1, 2, 3];
        console.log(array.push(4));
        console.log(array);
    });

    it("pop", function () {
        var array = [1, 2, 3];
        console.log(array.pop());
        console.log(array);
    });

    it("shift", function () {
        var array = [1, 2, 3];
        console.log(array.shift());
        console.log(array);
    });

    it("unshift", function () {
        var array = [1, 2, 3];
        console.log(array.unshift(0));
        console.log(array);
    });

    it("unshift", function () {
        var array = [1, 2, 3];
        console.log(array.unshift(0));
        console.log(array);
    });

    it("sort", function () {
        var array = [2, 1, 3];
        console.log(array.sort());
        console.log(array);
    });

    it("reverse", function () {
        var array = [1, 2, 3];
        console.log(array.reverse());
        console.log(array);
    });

    it("join", function () {
        var array = [1, 2, 3];
        console.log(array.join(", "));
        console.log(array);
    });

    it("concat", function () {
        var array = [1, 2, 3];
        console.log(array.concat([4, 5]));
        console.log(array);
    });

    it("splice", function () {
        var array = [1, 2, 3, 4, 5];
        console.log(array.splice(1, 3));
        console.log(array);
    });

    it("slice", function () {
        var array = [1, 2, 3, 4, 5];
        console.log(array.slice(1, 3));
        console.log(array);
    });

    it("str_splice", function () {
        var string = "string";
        console.log(string.slice(1, 3));
        console.log(string);
    });


    /**
     * JS vs Java streams
     * map  - map
     * filter - filter
     * forEach - forEach
     * reduce - collect
     */
});

