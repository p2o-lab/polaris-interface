import {OperationMode, ServiceSourceMode} from './enum';

export interface BaseServiceInterface {
  id: string;
  name: string;
  state: string;
  parameters: ParameterInterface[];
  procedures: ProcedureInterface[];
  /** duration in seconds */
  lastChange: number;
  commandEnable: CommandEnableInfo;
  currentProcedure: number;
  requestedProcedure: number;
}

export interface ServiceInterface extends BaseServiceInterface {
  peaId: string;
  operationMode: OperationMode;
  serviceSourceMode: ServiceSourceMode;
  osLevel: number;
}

export interface ProcedureInterface {
  id: string;
  name: string;
  procedureId: number;
  isSelfCompleting: boolean;
  parameters: ParameterInterface[];
  processValuesIn: ParameterInterface[];
  processValuesOut: ParameterInterface[];
  reportParameters: ParameterInterface[];
}

export interface CommandEnableInfo {
  start: boolean;
  restart: boolean;
  pause: boolean;
  resume: boolean;
  complete: boolean;
  hold: boolean;
  unhold: boolean;
  stop: boolean;
  abort: boolean;
  reset: boolean;
}

export interface ParameterInterface {
  name: string;
  value?: number | string | boolean;
  requestedValue?: string;
  min?: number;
  max?: number;
  unit?: string;
  readonly?: boolean;
  type?: string;
  timestamp?: Date;
}
