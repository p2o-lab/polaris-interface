import {ConditionType, ServiceCommand} from './enum';

export interface RecipeOptions {
    /** version of recipe */
    version: string;
    /** name of recipe */
    name: string;
    /** optional description of recipe */
    description?: string;
    /** author of recipe */
    author: string;
    /** name of initial step of recipe */
    initial_step: string;
    /** list of recipe steps */
    steps: StepOptions[];
}

export interface StepOptions {
    /** unique name of step */
    name: string;
    /** optional description of step */
    description?: string;
    /** array of operations performed when entering step */
    operations: OperationOptions[];
    /** array of transition to be checked during step */
    transitions: TransitionOptions[];
}

export interface OperationOptions {
    /** module id (can be omitted if only one module is registered) */
    module?: string;
    /** service name */
    service: string;
    /** strategy name (default strategy is used if omitted) */
    strategy?: string;
    /** command name */
    command: ServiceCommand;
    /** optional parameters for start or restart */
    parameter?: ParameterOptions[];
}

export interface ParameterOptions {
    /** name of dataAssembly of parameter in module JSON */
    name: string;
    /** variable name of dataAssembly (default: "VExt" if omitted) */
    variable?: string;
    /** value of parameter. Can be a number or a string with an expression which is interpreted using scope */
    value: string | number | boolean;
    /** scope which should be used to replace variables in value */
    scope?: ScopeOptions[];
    /** should parameter be continuously updated via scope (default: false) */
    continuous?: boolean;
}

export interface ScopeOptions {
    /** name of variable which should be replaced in value */
    name: string;
    /** module id (can be omitted if only one module is registered) */
    module?: string;
    /** service name */
    service?: string;
    strategy?: string;
    dataAssembly: string;
    variable: string;
}

export interface TransitionOptions {
    next_step: string;
    condition: ConditionOptions;
}

export type ConditionOptions = AndConditionOptions | TimeConditionOptions | OrConditionOptions |
    TimeConditionOptions | StateConditionOptions | VariableConditionOptions | NotConditionOptions |
    ExpressionConditionOptions;

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
    // module id (can be omitted if only one module is registered)
    module?: string;
    // service name
    service: string;
    state: string;
}

export interface TimeConditionOptions extends BaseConditionOptions {
    type: ConditionType.time;
    // duration of time condition in seconds
    duration: number;
}

export interface VariableConditionOptions extends BaseConditionOptions {
    type: ConditionType.variable;
    module: string;
    dataAssembly: string;
    variable: string;
    value: string | number;
    operator: '==' | '<=' | '>=' | '>' | '<';
}

export interface ExpressionConditionOptions extends BaseConditionOptions {
    type: ConditionType.expression;
    expression: string;
    scope?: ScopeOptions[];
}
