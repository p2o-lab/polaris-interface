import {ParameterInterface, ServiceInterface} from '../service/interfaces';

/** Exporting interfaces which can retrieved from backend */

export interface ModuleInterface {
    id: string;
    description?: string;
    endpoint: string;
    hmiUrl: string;
    connected: boolean;
    services?: ServiceInterface[];
    protected: boolean;
    process_values: ParameterInterface[];
}

export interface OpModeInterface {
    state: 'on' | 'manual' | 'automatic';
    source: 'external' | 'internal';
}
