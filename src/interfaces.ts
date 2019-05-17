import {RecipeState, Repeat, ServiceCommand} from './enum';
import {ConditionOptions, ParameterOptions, RecipeOptions} from './RecipeOptions';

/** Exporting interfaces which can retrieved from backend */

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
    /** duration in seconds */
    lastChange: number;
}

export interface RecipeRunInterface {
    id: string;
    startTime: Date;
    endTime: Date;
    recipe: RecipeOptions;
    serviceLog: any[];
    variableLog: any[];
}

export interface ModuleInterface {
    id: string;
    endpoint: string;
    hmiUrl: string;
    connected: boolean;
    services?: ServiceInterface[];
    protected: boolean;
}

export interface BaseServiceInterface {
    name: string;
    status: string;
    parameters: ParameterInterface[];
    /** duration in seconds */
    lastChange: number;
    controlEnable: ControlEnableInterface;
}

export interface OpModeInterface {
    state: 'on' | 'manual' | 'automatic';
    source: 'external' | 'internal';
}

export interface ServiceInterface extends BaseServiceInterface {
    opMode: OpModeInterface;
    strategies: StrategyInterface[];
    currentStrategy: string;
}

export interface VirtualServiceInterface extends BaseServiceInterface {
    type: string;
    sc: boolean;
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
    value?: number | string | boolean;
    min?: number;
    max?: number;
    unit?: string;
    readonly?: boolean;
    type?: string;
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
    recipeRuns: RecipeRunOverviewInterface[];
}

export interface RecipeRunOverviewInterface {
    id: string;
    name: string;
    startTime: Date;
    endTime: Date;
}
