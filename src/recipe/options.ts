import {ServiceCommand} from '../service/enum';
import {ConditionType} from './enum';

/**
 * Options for loading recipes and modules
 */

/**
 * Options to load/parse a recipe
 */
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
  initialStep: string;
  /** list of recipe steps */
  steps: StepOptions[];
  /** requirements for starting the recipe */
  requirements?: {
    /** id of PEAs to be loaded and connected to */
    peas: string[];
    /** state of autoreset */
    autoreset: boolean;
  };
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
  pea?: string;
  /** service name */
  service: string;
  /** procedure name (default procedure is used if omitted) */
  procedure?: string;
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
  pea?: string;
  /** service name */
  service?: string;
  procedure?: string;
  dataAssembly: string;
  variable: string;
}

export interface TransitionOptions {
  nextStep: string;
  condition: ConditionOptions;
}

export type ConditionOptions = AndConditionOptions | TimeConditionOptions | OrConditionOptions |
StateConditionOptions | VariableConditionOptions | NotConditionOptions |
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
  // pea id (can be omitted if only one pea is registered)
  pea?: string;
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
  pea: string;
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
