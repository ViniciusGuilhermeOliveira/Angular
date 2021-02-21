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
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        return _super.call(this, 'Hyperdrive') || this;
    }
    //não é necessario override para sobreescrever o metodo
    MillenniumFalcon.prototype.jumpIntoHyperSpace = function () {
        var luck;
        luck = Math.random();
        //   console.log(luck) 
        luck >= 0.5 ? _super.prototype.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace');
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace();
var MillenniumFalconDois = /** @class */ (function (_super) {
    __extends(MillenniumFalconDois, _super);
    function MillenniumFalconDois() {
        var _this = _super.call(this, 'Hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    //não é necessario override para sobreescrever o metodo
    MillenniumFalconDois.prototype.jumpIntoHyperSpace = function () {
        var luck;
        luck = Math.random();
        //   console.log(luck) 
        luck >= 0.5 ? _super.prototype.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace');
    };
    return MillenniumFalconDois;
}(Spacecraft));
var falconDois = new MillenniumFalconDois();
falconDois.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job ? " + (goodForTheJob(falconDois) ? 'YES' : 'NO'));
