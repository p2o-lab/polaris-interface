import {ParameterInterface, ServiceInterface} from '../service/interfaces';

/** Exporting interfaces which can retrieved from backend */

export interface PEAInterface {
    name: string;
    id: string;
    pimadIdentifier: string;
    description?: string;
    endpoint: string;
    hmiUrl: string;
    connected: boolean;
    services?: ServiceInterface[];
    protected: boolean;
    processValues: ProcessValuesInterface[];
}

/**
 * This Interface is used to transfer ProcessValues/Variables to frontend
 */
export interface ProcessValuesInterface {
    name: string;
    dataItems: Array<{[key: string]: string }>;
}
