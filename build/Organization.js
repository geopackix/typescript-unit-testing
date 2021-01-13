"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const License_1 = require("./license/License");
const moment_1 = __importDefault(require("moment"));
class Organization {
    //Constructor
    constructor(name) {
        this.name = name;
        this.creationDate = moment_1.default().toDate();
        this.license = new License_1.License(1);
    }
}
exports.Organization = Organization;
