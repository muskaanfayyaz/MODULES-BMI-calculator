"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_js_1 = __importDefault(require("./first.js"));
let result1 = first_js_1.default.add(5, 1);
let result2 = first_js_1.default.sub(10, 1);
console.log("result1 : ", result1, "\n", "result2 : ", result2);
