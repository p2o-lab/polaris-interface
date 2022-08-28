import {ConditionOptions, OperationOptions} from '../recipe/options';
import {ParameterInfo} from '../service/interfaces';

export interface POLServiceOptions {
  name: string;
  type: string;
}

export interface AggregatedServiceOptions extends POLServiceOptions {
  type: 'aggregatedService';
  description: string;
  version: string;
  necessaryServices: Array<{ pea: string; service: string; procedure: string}>;
  parameters: ParameterInfo[];
  stateMachine: StateMachineOptions;
  commandEnable: CommandEnableOptions;
  selfCompleting: boolean;
}

// CommandEnableOptions defines the conditions as expressions for the commands to be triggered externally
export interface CommandEnableOptions {
  // only in IDLE
  start: string;
  // only in EXECUTE; if omitted, use same as *start* condition
  restart: string;
  // only in STARTING, EXECUTE, COMPLETING, COMPLETED, PAUSED, PAUSING, RESUMING, HOLDING, HELD, UNHOLDING
  stop: string;
  // only in EXECUTE
  pause: string;
  // only in PAUSED
  resume: string;
  // only in EXECUTE
  complete: string;
  // only in HELD
  unhold: string;
  // only in STARTING, EXECUTE, COMPLETING, COMPLETED, PAUSED, PAUSING, RESUMING, UNHOLDING
  hold: string;
  // for the following commands there should not exist further condition except the current state
  // abort (all the time except in ABORTED)
  // reset (in ABORTED, STOPPED and COMPLETED)

  // all state-change transitions are automatically triggered when the underlying petri net
  // of the appropriate step is finished
}

/**
 * default is empty Petrinet which just jumps to the next state in the state machine
 */
export interface StateMachineOptions {
  starting: PetrinetOptions;
  execute: PetrinetOptions;
  pausing: PetrinetOptions;
  resuming: PetrinetOptions;
  completing: PetrinetOptions;
  aborting: PetrinetOptions;
  stopping: PetrinetOptions;
  holding: PetrinetOptions;
  unholding: PetrinetOptions;
  // if omitted, all necessary services are reset
  resetting: PetrinetOptions;
  // following states should not perform any actions which can be defined by the user
  // idle
  // paused
  // completed
}

export interface PetrinetOptions {
  states: PetrinetStateOptions[];
  transitions: PetrinetTransitionOptions[];
  // name of the id of the initial transition
  initialTransition: string;
}

export interface PetrinetTransitionOptions {
  id: string;
  condition?: ConditionOptions;
  // name of the succeeding states or 'finished' or 'hold'
  nextStates: string[];
}

export interface PetrinetStateOptions {
  id: string;
  operations: OperationOptions[];
  nextTransitions: string[];
}
