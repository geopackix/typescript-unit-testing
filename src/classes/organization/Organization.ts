import {License} from "./license/License"
import moment from 'moment'

export class Organization {

  //Properties
  id: string
  name: string
  creationDate: Date        //Date where the organization has been created
  isBlocked: Boolean        //Indicates whether the organization is blocked or not
  license: License          
  members: Array<Number>

  //Constructor
  constructor(name: string) {
    this.name = name;
    this.creationDate = moment().toDate();
    this.license = new License(1);
  }
  



}