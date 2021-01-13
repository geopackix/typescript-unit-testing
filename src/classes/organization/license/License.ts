
interface iLicense{
  type: LicenseType
}


export class License implements iLicense {

  //Properties
  type: LicenseType

  //Constructor
  constructor(type: LicenseType){
    this.type = type;
  }

  //returns custom Type name
  get [Symbol.toStringTag]() {
    return 'License';
  }

}

enum LicenseType {
  F,
  S,
  M,
  X
}