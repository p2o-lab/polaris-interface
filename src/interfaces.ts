import { RecipeOptions } from './options';

export interface ManagerInterface {
    modules: string[];
    recipe?: {
        name: string;
        status: string;
    };
    autoReset: boolean;
}

export interface RecipeInterface {
    status: string;
    modules: object[];
    currentStep: any;
    options: RecipeOptions;
}

export interface ModuleInterface {
    id: string;
    endpoint: string;
    connected: boolean;
    services?: ServiceInterface[];
}

export interface ServiceInterface {
    name: string;
    opMode: string | number;
    status: string | number;
    strategies: any[];
}

export interface StrategyInterface {
    id: string;
    name: string;
    default: boolean;
    parameters: ParameterInterface[];
}

export interface ParameterInterface {
    name: string;
    value?: number;
    min?: number;
    max?: number;
}
