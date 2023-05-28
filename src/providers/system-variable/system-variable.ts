import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SystemVariableProvider {
  constructor(){}
  public SYSTEM_PARAMS = {
    REGION: "AP_SOUTH_1",
    COGNITO_POOL: {
      UserPoolId: "ap-south-1_NxMHCW50p",
      ClientId: ""
    }
  };
}
