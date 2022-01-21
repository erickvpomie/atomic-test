export interface userData {
  name     : string;
  lastName : string;
  cellphone: string;
  verificationCode : string;
}

export interface gatewayData {
  imgName : string,
  details : string[]
}

export interface featuresData {
  title  : string,
  others : boolean
  atomic : boolean
}
