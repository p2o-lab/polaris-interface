import {RecipeOptions} from "./options";

export interface RecipeManagerInterface {
    recipe_status: string;
    service_states: object[];
    current_step: any;
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