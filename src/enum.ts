export enum ServiceCommand {
    reset = 'reset',
    start = 'start',
    stop = 'stop',
    unhold = 'unhold',
    pause = 'pause',
    resume = 'resume',
    abort = 'abort',
    restart = 'restart',
    complete = 'complete',
}

export enum ConditionType {
    not = 'not',
    time = 'time',
    state = 'state',
    variable = 'variable',
    and = 'and',
    or = 'or',
    expression = 'expression'
}

export enum RecipeState {
    approved = 'approved',
    draft = 'draft'
}

export enum Repeat {
    single = 'single',
    all = 'all',
    none = 'none',
}
