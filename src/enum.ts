export type ServiceCommand =
    'reset'
    | 'start'
    | 'stop'
    | 'unhold'
    | 'pause'
    | 'resume'
    | 'abort'
    | 'restart'
    | 'complete';

export enum ConditionType {
    not = 'not',
    time = 'time',
    state = 'state',
    variable = 'variable',
    and = 'and',
    or = 'or'
}
