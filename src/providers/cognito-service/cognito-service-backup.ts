import { Injectable } from "@angular/core";
import * as AWSCognito from "amazon-cognito-identity-js";
import { SystemVariableProvider } from "../system-variable/system-variable";

@Injectable({
  providedIn: 'root',
})
export class CognitoServiceProvider {
  constructor(){
    
  }
   private POOL_SETTING = new SystemVariableProvider().SYSTEM_PARAMS.COGNITO_POOL;
  
  _USER_POOL = new AWSCognito.CognitoUserPool(this.POOL_SETTING);

  
}
