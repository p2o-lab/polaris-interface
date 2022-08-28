import {ServiceControlOptions} from '../core/dataAssembly';
import {DataAssemblyOptions} from '../core/options';

export interface ServiceOptions {
  name: string;
  communication: ServiceControlOptions;
  procedures: ProcedureOptions[];
  configurationParameters?: DataAssemblyOptions[];
}

export interface ProcedureOptions {
  procedureId: number;
  name: string;
  isSelfCompleting: boolean;
  dataAssemblies: DataAssemblyOptions[];
  procedureParameters: DataAssemblyOptions[];
  reportParameters?: DataAssemblyOptions[];
  processValuesIn?: DataAssemblyOptions[];
  processValuesOut?: DataAssemblyOptions[];
}
