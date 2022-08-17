
export interface ConnectionInfo{
  id: string;
  name?: string;
  adapterInfo: AdapterInfo[];
}

export interface AdapterInfo {
  id: string;
  type: string;
  name: string;
  connected: boolean;
  monitoringActive: boolean;
  monitoredItemsCount: number;
}

export interface AdapterOptions {
  name?: string;
}

export interface OpcUaAdapterOptions extends AdapterOptions{
  endpoint?: string;
}

export interface OpcUaAdapterInfo extends AdapterInfo{
  type: 'opcua';
  endpointUrl: string;
  currentEndpointId: string | undefined;
  endpoints: OpcUaEndpointInfo[];
}

export interface OpcUaEndpointInfo{
  id: string;
  securityMode?: string;
  securityPolicy?: string;
}

export interface AdapterConnectOptions{
  type: string;
}

export interface OpcUaEndpointOption extends AdapterConnectOptions{
  type: 'opcua';
  requestedEndpointId: string;
  userCredentials?: OpcUaUserCredentials;
}

export interface OpcUaUserCredentials{
  user: string;
  password: string;
}
