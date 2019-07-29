import {OpModeInterface} from '../core/interfaces';

export interface BaseServiceInterface {
    name: string;
    status: string;
    parameters: ParameterInterface[];
    reportParameters: ParameterInterface[];
    processValuesIn: ParameterInterface[];
    processValuesOut: ParameterInterface[];
    /** duration in seconds */
    lastChange: number;
    controlEnable: ControlEnableInterface;
}

export interface ServiceInterface extends BaseServiceInterface {
    opMode: OpModeInterface;
    strategies: StrategyInterface[];
    currentStrategy: string;
}

export interface StrategyInterface {
    id: string;
    name: string;
    default: boolean;
    sc: boolean;
    parameters: ParameterInterface[];
}

export interface VirtualServiceInterface extends BaseServiceInterface {
    type: string;
    sc: boolean;
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
    min?: number;
    max?: number;
    unit?: string;
    readonly?: boolean;
    type?: string;
}
