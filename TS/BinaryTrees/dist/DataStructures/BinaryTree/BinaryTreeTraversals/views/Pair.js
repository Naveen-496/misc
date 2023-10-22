"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    static of(a, b) {
        return new Pair(a, b);
    }
}
exports.default = Pair;
console.log(Pair.of(2, 3).first);
