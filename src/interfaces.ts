import { RecipeOptions } from './options';

export interface ManagerInterface {
    modules: string[];
    activeRecipe?: {
        name: string;
        status: string;
    };
    autoReset: boolean;
}

export interface RecipeInterface {
    id: string;
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
    parameters: ParameterInterface[];
}

export interface StrategyInterface {
    id: string;
    name: string;
    default: boolean;
    sc: boolean;
    parameters: ParameterInterface[];
}

export interface ParameterInterface {
    name: string;
    value?: number;
    min?: number;
    max?: number;
}
