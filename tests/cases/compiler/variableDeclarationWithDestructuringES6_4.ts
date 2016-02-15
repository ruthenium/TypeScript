// @module: umd
// @target: es6

export let { a, x:[c] } = {a: 1, x: ["123"]}, {a1} = {a1: 100};
let { b, y:[d] } = {b: 1, y: ["123"]}, {b1} = {b1:100};

export let [{ a_1, x:[c_1] }] = [{a_1: 1, x: ["123"]}], [{a1_1}] = [{a1_1: 100}];
let [{ b_1, y:[d_1] }] = [{b_1: 1, y: ["123"]}], [{b1_1}] = [{b1_1:100}];