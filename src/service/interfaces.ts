import {OperationMode, ServiceSourceMode} from './enum';

export interface BaseServiceInterface {
    name: string;
    status: string;
    parameters: ParameterInterface[];
    procedures: ProcedureInterface[];
    /** duration in seconds */
    lastChange: number;
    controlEnable: CommandEnableInterface;
    currentProcedure: string | undefined;
}

export interface ServiceInterface extends BaseServiceInterface {
    operationMode: OperationMode;
    serviceSourceMode: ServiceSourceMode;
}

export interface ProcedureInterface {
    name: string;
    id: string;
    isDefault: boolean;
    isSelfCompleting: boolean;
    parameters: ParameterInterface[];
    processValuesIn: ParameterInterface[];
    processValuesOut: ParameterInterface[];
    reportParameters: ParameterInterface[];
}

export interface CommandEnableInterface {
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
