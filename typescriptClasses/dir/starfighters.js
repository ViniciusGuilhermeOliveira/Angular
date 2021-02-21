"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MillenniumFalcon = void 0;
var base_ships_1 = require("./base-ships");
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'Hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    //não é necessario override para sobreescrever o metodo
    MillenniumFalcon.prototype.jumpIntoHyperSpace = function () {
        var luck;
        luck = Math.random();
        console.log(luck);
        luck >= 0.5 ? _super.prototype.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace');
    };
    return MillenniumFalcon;
}(base_ships_1.Spacecraft));
exports.MillenniumFalcon = MillenniumFalcon;
