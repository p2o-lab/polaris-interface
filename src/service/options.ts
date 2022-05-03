import {ServiceControlOptions} from '../core/dataAssembly';
import {DataAssemblyOptions} from '../core/options';

export interface ServiceOptions {
  name: string;
  communication: ServiceControlOptions;
  procedures: ProcedureOptions[];
  parameters?: DataAssemblyOptions[];
}

export interface ProcedureOptions {
  procedureId: number;
  name: string;
  isSelfCompleting: boolean;
  dataAssemblies: DataAssemblyOptions[];
  parameters: DataAssemblyOptions[];
  reportParameters?: DataAssemblyOptions[];
  processValuesIn?: DataAssemblyOptions[];
  processValuesOut?: DataAssemblyOptions[];
}
