export interface OpcUaConnectionSettings{
  endpointUrl: string;
  securitySettings?: OpcUaSecuritySettings;
  authenticationSettings?: OpcUaAuthenticationSettings;
}

export interface OpcUaSecuritySettings{
  securityMode: OpcUaMessageSecurityModes;
  securityPolicy: OpcUaSecurityPolicies;
}

export enum OpcUaMessageSecurityModes {
  None = 'None',
  Sign = 'Sign',
  SignAndEncrypt = 'SignAndEncrypt'
}

export enum OpcUaSecurityPolicies {
  None = 'None',
  Aes128_Sha256_RsaOaep = 'Aes128_Sha256_RsaOaep',
  Basic128 = 'Basic128',
  Basic128Rsa15 = 'Basic128Rsa15',
  Basic192 = 'Basic192',
  Basic192Rsa15 = 'Basic192Rsa15',
  Basic256 = 'Basic256',
  Basic256Rsa15 = 'Basic256Rsa15',
  Basic256Sha256 = 'Basic256Sha256',
  PubSub_Aes128_CTR = 'PubSub_Aes128_CTR',
  PubSub_Aes256_CTR = 'PubSub_Aes256_CTR',
}

export interface OpcUaAuthenticationSettings{
  userCredentials?: { userName: string; password: string};
  certificate?: any;
}

export enum OpcUaAuthenticationType{
  Anonymous = 'Anonymous',
  UserName = 'UserName',
  IssuedToken = 'IssuedToken',
  Certificate =  'Certificate'
}

export interface OpcUaConnectionSettingsInfo{
  endpointUrl: string;
  securitySettings: OpcUaSecuritySettings;
  authenticationSettings: OpcUaAuthenticationType;
}
