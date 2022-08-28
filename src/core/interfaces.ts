import {ServiceInfo} from '../service/interfaces';
import {ConnectionInfo} from './connection/interfaces';
import {DataAssemblyInfo} from './dataAssembly';

/** Exporting interfaces which can retrieved from backend */

export interface PEAInfo {
  id: string;
  pimadIdentifier: string;
  name: string;
  description?: string;
  connectionInfo: ConnectionInfo;
  services?: ServiceInfo[];
  protected: boolean;
  dataAssemblies?: DataAssemblyInfo[];
}
