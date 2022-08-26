import {ServiceCommand} from '../service/enum';
import {ConditionType} from './enum';

/**
 * Options for recipe operation
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
  requirements: {
    /** Specification of PEAs used within the recipe to be assigned to concrete instances before recipe execution */
    /** Currently Name */
    peas: string[]; // TODO: add more complex specification or reference to PEA Specifications e.g. Types
    /** Specification of POL Services used within the recipe to be assigned
     * to concrete instances before recipe execution */
    /** Currently Name */
    polServices: string[]; // TODO: add more complex specification or reference to POLService Specifications e.g. Types
    /** shall automatic execution of the reset command to be performed automatically once completed */
    autoResetServicesOnceCompleted: boolean;
  };
}

export interface RecipeReferenceInstanceMappingOptions {
  type: 'pea' | 'polService';
  recipeObjectReference: string;
  instanceReference: string;
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
  /** pea id (can be omitted if only one pea is registered) */
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
  /** name of dataAssembly of parameter in PEA */
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
  /** PEA reference */
  pea?: string;
  /** Service reference */
  service?: string;
  /** Procedure reference */
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
  // PEA Name
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
