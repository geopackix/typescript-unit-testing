"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.License = void 0;
class License {
    //Constructor
    constructor(type) {
        this.type = type;
    }
    //returns custom Type name
    get [Symbol.toStringTag]() {
        return 'License';
    }
}
exports.License = License;
var LicenseType;
(function (LicenseType) {
    LicenseType[LicenseType["F"] = 0] = "F";
    LicenseType[LicenseType["S"] = 1] = "S";
    LicenseType[LicenseType["M"] = 2] = "M";
    LicenseType[LicenseType["X"] = 3] = "X";
})(LicenseType || (LicenseType = {}));
