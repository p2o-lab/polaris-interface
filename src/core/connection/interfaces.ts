
export interface OpcUaAdapterInfo{
  id: string;
  name?: string;
  connected: boolean;
  monitoredItemsCount: number;
  currentEndpointId: string | undefined;
  endpoints: OpcUaEndpointInfo[];
}

export interface OpcUaEndpointInfo{
  id: string;
  endpointUrl: string;
  securityMode?: string;
  securityPolicy?: string;
}

export interface OpcUaEndpointSetting{
  endpointId: string;
  userSettings?: OpcUaUserSetting;
}

export interface OpcUaUserSetting{
  user: string;
  password: string;
}
