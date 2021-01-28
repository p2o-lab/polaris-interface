import {ParameterInterface, ServiceInterface} from '../service/interfaces';

/** Exporting interfaces which can retrieved from backend */

export interface PEAInterface {
    id: string;
    description?: string;
    endpoint: string;
    hmiUrl: string;
    connected: boolean;
    services?: ServiceInterface[];
    protected: boolean;
    processValues: ParameterInterface[];
}
