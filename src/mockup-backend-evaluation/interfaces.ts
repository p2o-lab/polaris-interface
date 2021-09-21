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
    recipeRunning: boolean;
    plantCleaned: boolean;
    currentScenario: string;
}

export enum Status {
    None = 'No Status available',
    Normal = 'Normal',
    PreWarning = 'PreWarning',
    Warning = 'Warning',
    Alert = 'Alert',
    Malfunction = 'Malfunction',
}
