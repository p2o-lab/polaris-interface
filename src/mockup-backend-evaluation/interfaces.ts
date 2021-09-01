import {ParameterInterface} from '../service/interfaces';

export interface PEAHolderInterface {
    id: string;
    peaId: string;
    name: string;
    status: Status;
    type: string;
    alarmMessage: string;
    occupied: boolean;
    connected: boolean;
    chartData: { y: number[], x: number[] };
    parametersIn: ParameterInterface[];
    parametersOut: ParameterInterface[];
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
