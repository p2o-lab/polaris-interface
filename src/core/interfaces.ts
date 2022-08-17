import {ParameterInterface, ServiceInterface} from '../service/interfaces';
import {ConnectionInfo} from './connection/interfaces';

/** Exporting interfaces which can retrieved from backend */

export interface PEAInterface {
  id: string;
  pimadIdentifier: string;
  name: string;
  description?: string;
  connectionInfo: ConnectionInfo;
  services?: ServiceInterface[];
  protected: boolean;
  // TODO: rename (inconsistent) --> potential conflict with process value in/out
  processValues: ParameterInterface[];
}
