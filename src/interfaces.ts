import {ConditionOptions, ParameterOptions, RecipeOptions} from './options';
import {RecipeState, Repeat, ServiceCommand} from './enum';

export interface ManagerInterface {
    modules: string[];
    activeRecipe?: RecipeInterface;
    autoReset: boolean;
}

export interface RecipeInterface {
    id: string;
    status: RecipeState;
    modules: ModuleInterface[];
    currentStep: string;
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
    error: string;
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

export interface StepInterface {
    name: string;
    transitions: TransitionInterface[];
    operations: OperationInterface[];
}

export interface TransitionInterface {
    next_step: string;
    condition: ConditionOptions;
}

export interface OperationInterface {
    module: string;
    service: string;
    strategy?: string;
    command: ServiceCommand;
    parameter?: ParameterOptions[];
}

export interface PlayerInterface {
    playlist: RecipeInterface[];
    currentItem: number;
    repeat: Repeat;
    status: RecipeState;
}
