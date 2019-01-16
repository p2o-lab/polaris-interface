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
    lastChange: Date;
}

export interface RecipeRunInterface {
    id: string;
    startTime: Date;
    endTime: Date;
    recipe: RecipeOptions;
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
    controlEnable: ControlEnableInterface;
}

export interface ControlEnableInterface {
    start: boolean;
    restart: boolean;
    pause: boolean;
    resume: boolean;
    complete: boolean;
    unhold: boolean;
    stop: boolean;
    abort: boolean;
    reset: boolean;
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
    recipeRuns: {
        id: string;
        name: string;
        startTime: Date;
        endTime: Date;
    }[];
}
