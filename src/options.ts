import {ConditionType, ServiceCommand} from "./enum";

export interface RecipeOptions {
    version: string;
    name: string;
    author: string;
    initial_step: string;
    steps: StepOptions[];
}

export interface StepOptions {
    name: string;
    operations: OperationOptions[];
    transitions: TransitionOptions[];
}

export interface OperationOptions {
    // module id (can be ommited if only one module is registered)
    module?: string;
    // service name
    service: string;
    // strategy kann weggelassen werden, dann wird die Default-Strategy genommen
    strategy?: string;
    // command name
    command: ServiceCommand;
    // optional parameters for start or restart
    parameter?: ParameterOptions[];
}

export interface ParameterOptions {
    name: string;
    // default: "VExt" für variable wenn nicht angegeben
    variable: string;
    value: any;
}

export interface TransitionOptions {
    next_step: string;
    condition: ConditionOptions;
}

export type ConditionOptions = AndConditionOptions | TimeConditionOptions | OrConditionOptions |
    TimeConditionOptions | StateConditionOptions | VariableConditionOptions | NotConditionOptions;

export interface BaseConditionOptions {
    type: ConditionType;
}

export interface AndConditionOptions extends BaseConditionOptions {
    type: ConditionType.and;
    conditions: ConditionOptions[];
}

export interface OrConditionOptions extends BaseConditionOptions {
    type: ConditionType.or;
    conditions: ConditionOptions[];
}

export interface NotConditionOptions extends BaseConditionOptions {
    type: ConditionType.not;
    condition: ConditionOptions;
}

export interface StateConditionOptions extends BaseConditionOptions {
    type: ConditionType.state;
    // module id (can be ommited if only one module is registered)
    module?: string;
    service: string;
    state: string;
}

export interface TimeConditionOptions extends BaseConditionOptions {
    type: ConditionType.time;
    duration: number;
}

export interface VariableConditionOptions extends BaseConditionOptions {
    type: ConditionType.variable;
    module: string;
    variable: string;
    dataStructure: string;
    value: string | number;
    operator: "==" | "<=" | ">=" | ">" | "<";
}