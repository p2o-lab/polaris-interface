import {ServiceControlOptions} from '../core/dataAssembly';
import {DataAssemblyOptions} from '../core/options';

export interface ServiceOptions {
    name: string;
    communication: ServiceControlOptions;
    strategies: StrategyOptions[];
    parameters?: DataAssemblyOptions[];
    reportParameters?: DataAssemblyOptions[];
    processValuesIn?: DataAssemblyOptions[];
    processValuesOut?: DataAssemblyOptions[];
}

export interface StrategyOptions {
    id: string;
    // name of strategy
    name: string;
    // default strategy
    default: boolean;
    // self-completing strategy
    sc: boolean;
    // strategyParameters of strategy
    parameters: DataAssemblyOptions[];
}
