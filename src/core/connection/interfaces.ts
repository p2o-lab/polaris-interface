
export interface ConnectionHandlerInfo{
  id: string;
  name?: string;
  adapterInfo: AdapterInfo[];
}

export interface AdapterInfo {
  id: string;
  type: string;
  name?: string;
  connected: boolean;
  monitoringActive: boolean;
  monitoredItemsCount: number;
}

export interface OpcUaAdapterInfo extends AdapterInfo{
  type: 'OpcUa';
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
