import {ServiceControlOptions} from '../core/dataAssembly';
import {DataAssemblyOptions} from '../core/options';

export interface ServiceOptions {
    name: string;
    communication: ServiceControlOptions;
    procedures: ProcedureOptions[];
    parameters?: DataAssemblyOptions[];
}

export interface ProcedureOptions {
    id: string;
    // name of procedure
    name: string;
    // default procedure
    isDefault: boolean;
    // self-completing procedure
    isSelfCompleting: boolean;
    // Parameters of procedure
    parameters: DataAssemblyOptions[];
    reportParameters?: DataAssemblyOptions[];
    processValuesIn?: DataAssemblyOptions[];
    processValuesOut?: DataAssemblyOptions[];
}
