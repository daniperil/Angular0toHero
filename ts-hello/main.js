"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeComponent_1 = require("./likeComponent");
var component = new likeComponent_1.LikeComponent(10, true, 0);
component.onClick();
console.log("Likes count: ".concat(component.likesCount, ", Is selected ").concat(component.isSelected));
console.log(component.test);
