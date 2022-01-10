export enum ConditionType {
  not = 'not',
  time = 'time',
  state = 'state',
  variable = 'variable',
  and = 'and',
  or = 'or',
  expression = 'expression',
}

export enum RecipeState {
  idle = 'idle',
  running = 'running',
  stopped = 'stopped',
  completed = 'completed',
  paused = 'paused',
}

export enum Repeat {
  single = 'single',
  all = 'all',
  none = 'none',
}
