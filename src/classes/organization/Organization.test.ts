
import {expect} from 'chai';
import {Organization} from './Organization'


let Org1 = new Organization('Testorga');

describe('Organization Properties', () => {
  
  it('Organization must have a creation date.', function() {
    let t = Org1.creationDate
    expect(t).to.be.a('Date');
  });

  it('Organization must have a name.', function() {
    let t = Org1.name
    expect(t).to.be.a('String');
  });

  it('Organization must have a license.', function() {
    let t = Org1.license
    expect(t).to.be.a('License');
  });

});
