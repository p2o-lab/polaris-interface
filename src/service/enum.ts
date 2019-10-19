export enum ServiceCommand {
    reset = 'reset',
    start = 'start',
    stop = 'stop',
    hold = 'hold',
    unhold = 'unhold',
    pause = 'pause',
    resume = 'resume',
    abort = 'abort',
    restart = 'restart',
    complete = 'complete',
}

export enum OperationMode {
    Offline = 'offline',
    Operator = 'operator',
    Automatic = 'automatic',
}

export enum SourceMode {
    Manual = 'manual',
    Intern = 'intern'
}
