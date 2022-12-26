/* main.js */
// import * as md from "./module.js"; // 참조변수
// md.module("test");
// md.area(10, 20);
import { module as mod, area } from "./module.js";
import sq, { circle } from "./moduleone.js";
mod("test");
area(10, 20);
sq();
circle();
