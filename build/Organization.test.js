"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Organization_1 = require("./Organization");
let Org1 = new Organization_1.Organization('Testorga');
describe('Organization Properties', () => {
    it('Organization must have a creation date.', function () {
        let t = Org1.creationDate;
        chai_1.expect(t).to.be.a('Date');
    });
    it('Organization must have a name.', function () {
        let t = Org1.name;
        chai_1.expect(t).to.be.a('String');
    });
    it('Organization must have a license.', function () {
        let t = Org1.license;
        chai_1.expect(t).to.be.a('License');
    });
});
