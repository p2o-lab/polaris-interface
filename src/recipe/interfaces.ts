import {ServiceCommand} from '../service/enum';
import {RecipeState, Repeat} from './enum';
import {ConditionOptions, ParameterOptions, RecipeOptions} from './options';

/**
 * Details of a recipe with static and dynamic information
 */
export interface RecipeInterface {
  id: string;
  status: RecipeState;
  referencedObjects: RecipeReferenceInstanceMappingInfo[];
  currentStep: StepInterface;
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
  status: RecipeState;
  serviceLog: any[];
  variableLog: any[];
}

export interface RecipeReferenceInstanceMappingInfo {
  type: 'pea' | 'polService';
  recipeObjectReference: string;
  instanceReference: string | undefined;
}

export interface StepInterface {
  name: string;
  transitions: TransitionInterface[];
  operations: OperationInterface[];
}

export interface TransitionInterface {
  nextStep: string;
  condition: ConditionOptions;
}

export interface OperationInterface {
  pea: string;
  service: string;
  procedure?: string;
  command: ServiceCommand;
  parameter?: ParameterOptions[];
  state?: 'executing' | 'completed' | 'aborted';
}

export interface PlayerInterface {
  playlist: Array<{
    id: string;
    name: string;
    options: RecipeOptions;
  }>;
  currentRecipe: RecipeInterface;
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
  status: RecipeState;
}
