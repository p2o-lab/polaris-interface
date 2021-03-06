import {OperationMode, SourceMode} from './enum';

export interface BaseServiceInterface {
    name: string;
    status: string;
    parameters: ParameterInterface[];
    strategies: StrategyInterface[];
    /** duration in seconds */
    lastChange: number;
    controlEnable: ControlEnableInterface;
}

export interface ServiceInterface extends BaseServiceInterface {
    operationMode: OperationMode;
    sourceMode: SourceMode;
    currentStrategy: string;
}

export interface StrategyInterface {
    id: string;
    name: string;
    default: boolean;
    sc: boolean;
    parameters: ParameterInterface[];
    processValuesIn: ParameterInterface[];
    processValuesOut: ParameterInterface[];
    reportParameters: ParameterInterface[];
}

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
