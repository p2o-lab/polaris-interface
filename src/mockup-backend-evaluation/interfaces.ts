import {ParameterInterface} from '../service/interfaces';

// TODO: could or should be combined with PEAInterface in the future
export interface PEAViewModelInterface {
    peaId: string;
    name: string;
    connected: boolean;
    status: Status;
    alarmMessage: string;
    type: string;
    description: string;
    parametersIn: ParameterInterface[];
    parametersOut: ParameterInterface[];
}

export interface PEAHolderInterface {
    id: string;
    peaId: string;
    type: string;
    occupied: boolean;
}

export interface AlarmItemInterface {
    position?: number;
    timestamp: Date;
    message: string;
    id: string;
    status: string;
    name: string;
}

export interface PlantInfoInterface {
    scenarioRunning: boolean;
    receiptRunning: boolean;
    plantCleaned: boolean;
    currentScenario: string;
}

export enum Status {
    OK = 'OK',
    ERROR3 = 'Fehler mit Priorität 3',
    ERROR2 = 'Fehler mit Priorität 2',
    ERROR1 = 'Fehler mit Priorität 1',
    NO_INFO = 'Keine Information',
}
