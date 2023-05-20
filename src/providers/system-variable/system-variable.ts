import { Injectable } from "@angular/core";

@Injectable()
export class SystemVariableProvider {
  public SYSTEM_PARAMS = {
    REGION: "AP_SOUTH_1",
    COGNITO_POOL: {
      UserPoolId: "ap-south-1_NxMHCW50p",
      ClientId: ""
    }
  };
}
