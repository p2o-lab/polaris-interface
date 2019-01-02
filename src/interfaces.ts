import {RecipeState, Repeat, ServiceCommand} from './enum';
import {ConditionOptions, ParameterOptions, RecipeOptions} from './options';

export interface ManagerInterface {
    modules: string[];
    activeRecipe?: RecipeInterface;
    autoReset: boolean;
}

export interface RecipeInterface {
    id: string;
    status: RecipeState;
    modules: string[];
    currentStep: string;
    options: RecipeOptions;
    protected: boolean;
}

export interface RecipeRunInterface {
    id: string;
    startTime: Date;
    endTime: Date;
    recipe: RecipeInterface;
}

export interface ModuleInterface {
    id: string;
    endpoint: string;
    hmiUrl: string;
    connected: boolean;
    services?: ServiceInterface[];
    protected: boolean;
}

export interface ServiceInterface {
    name: string;
    opMode: string | number;
    status: string | number;
    strategies: StrategyInterface[];
    parameters: ParameterInterface[];
    error: string;
    lastChange: Date;
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
    unit?: string;
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
    currentRecipeRun: RecipeRunInterface;
}
