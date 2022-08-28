import {OperationMode, ServiceSourceMode} from './enum';

export interface BaseServiceInfo {
  id: string;
  name: string;
  state: string;
  configurationParameters: ParameterInfo[];
  procedures: ProcedureInterface[];
  /** duration in seconds */
  lastChange: number;
  commandEnable: CommandEnableInfo;
  currentProcedure: number;
  requestedProcedure: number;
}

export interface ServiceInfo extends BaseServiceInfo {
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
  procedureParameters: ParameterInfo[];
  processValuesIn: ParameterInfo[];
  processValuesOut: ParameterInfo[];
  reportParameters: ParameterInfo[];
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

export interface ParameterInfo {
  name: string;
  id: string;
  value?: number | string | boolean;
  parameterType?: string;
  requestedValue?: string;
  valueLimitation?: ValueLimitationInfo;
  scaleSettings?: ScaleSettingsInfo;
  unit?: string;
  wqc?: number;
  readonly?: boolean;
  timestamp?: Date;
}

export interface ValueLimitationInfo {
  min: number;
  max: number;
}
export interface ScaleSettingsInfo {
  min: number;
  max: number;
}
