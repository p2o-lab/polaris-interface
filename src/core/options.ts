import {ServiceOptions} from '../service/options';
import {BaseDataAssemblyOptions} from './dataAssembly';

export interface PEAOptions {
  name: string;
  id: string;
  pimadIdentifier: string;
  description?: string;
  opcuaServerUrl: string;
  hmiUrl?: string;
  services: ServiceOptions[];
  dataAssemblies: DataAssemblyOptions[];
}

export interface DataAssemblyOptions {
  name: string;
  metaModelRef: string;
  dataItems: BaseDataAssemblyOptions;
}

export interface OpcUaNodeOptions {
  // data type of OPC UA node
  dataType: string;
  // recent value
  value?: number | string | boolean;
  // this variable contains the *namespace url* of the node
  namespaceIndex: string;
  // node id of the node as string (e.g. 's=myNode2' or 'i=12')
  nodeId: string;
}
