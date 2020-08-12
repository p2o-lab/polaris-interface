import {OperationMode, SourceMode} from './enum';

export interface BaseServiceInterface {
    name: string;
    status: string;
    parameters: ParameterInterface[];
    procedures: ProcedureInterface[];
    /** duration in seconds */
    lastChange: number;
    controlEnable: ControlEnableInterface;
}

export interface ServiceInterface extends BaseServiceInterface {
    operationMode: OperationMode;
    sourceMode: SourceMode;
    currentStrategy: string;
}

export interface ProcedureInterface {
    id: string;
    name: string;
    isDefault: boolean;
    isSelfComplete: boolean;
    parameters: ParameterInterface[];
    processValuesIn: ParameterInterface[];
    processValuesOut: ParameterInterface[];
    reportParameters: ParameterInterface[];
}
// TODO: Add hold
export interface ControlEnableInterface {
    start: boolean;
    restart: boolean;
    pause: boolean;
    resume: boolean;
    complete: boolean;
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
