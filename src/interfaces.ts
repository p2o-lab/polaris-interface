import {RecipeState, Repeat, ServiceCommand} from './enum';
import {ConditionOptions, ParameterOptions, PlantOptions, RecipeOptions} from './options';

export interface ManagerInterface {
    modules: string[];
    activeRecipe?: RecipeInterface;
    autoReset: boolean;
}

export interface RecipeInterface {
    /** id of the recipe */
    id: string;
    /** plant for this recipe */
    plant: PlantOptions;
    /** involved modules of recipe */
    modules: ModuleInterface[];
    /** id of the currently running mode */
    currentMode: string;
    /** general option of recipe */
    options: RecipeOptions;
    /** recipe protection */
    protected: boolean;
    /** date of last change */
    lastChange: Date;
    /** list of modes and transitions in the recipe */
    modes: Array<ModeInterface | TransitionInterface>;
    /** name of initial mode of recipe */
    initial_mode: string;
}

export interface ModeInterface {
    /** id of the mode */
    id: string;
    /** name of the mode */
    name: string;
    /** list of procedures and transitions in the mode */
    procedures: Array<ProcedureInterface | TransitionInterface>;
    /** list of the currently running procedures */
    currentProcedures: string[];
    /** id(s) of initial procedure(s) in the mode */
    initial_procedure: string[];
}

export interface ProcedureInterface {
    /** id of the procedure */
    id: string;
    /** name of the procedure */
    name: string;
    /** module of this procedure */
    module: ModuleInterface;
    /** steps of the procedure */
    steps: Array<StepInterface | TransitionInterface>;
    /** id of the currently running step */
    currentStep: string;
    /** id of initial step of this procedure */
    initial_step: string;
}
export interface StepInterface {
    /** id of the step */
    id: string;
    /** name of the step */
    name: string;
    /** service of this step */
    service: ServiceInterface;
    /** service command of this step */
    command: ServiceCommand;
    /** optional parameters for this step */
    parameter?: ParameterOptions[];
}

export interface TransitionInterface {
    /** id of the transition */
    id: string;
    /** next step(s) of the transition */
    next_step: ModeInterface | ProcedureInterface[] | StepInterface | TransitionInterface;
    /** condition to fulfill */
    condition: ConditionOptions;
}

export interface ModuleInterface {
    id: string;
    name: string;
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
    currentStrategy: string;
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

export interface RecipeRunInterface {
    id: string;
    startTime: Date;
    endTime: Date;
    recipe: RecipeOptions;
    serviceLog?: any[];
    variableLog?: any[];
}

export interface PlayerInterface {
    playlist: RecipeInterface[];
    currentItem: number;
    repeat: Repeat;
    status: RecipeState;
    recipeRuns: RecipeOptions[];
}
