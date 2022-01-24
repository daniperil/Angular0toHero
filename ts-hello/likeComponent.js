"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(pLikesCount, pIsSelected, pTest) {
        this._likesCount = pLikesCount;
        this._isSelected = pIsSelected;
        this.test = pTest;
    }
    LikeComponent.prototype.onClick = function () {
        this.test++;
        /**         if (this.isSelected) {
                   this._likesCount--;
                   this._isSelected = false;
               }
               else {
                   this.likesCount++;
                   this.isSelected = true;
               }*/
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
