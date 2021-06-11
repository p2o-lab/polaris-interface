/**
 * This is the interface to parse PEAModel coming from PiMAd
 * At specially needed, if we are using PiMAd as web service
 */

export interface PEAModel {
    dataAssemblies: DataAssemblyModel[];
    dataModel: string;
    feas: any[];
    name: string;
    endpoint: Endpoint[];
    pimadIdentifier: string;
    services: ServiceModel[];
    initialized: boolean;
}
export interface DataAssemblyModel {
    dataItems: DataItemModel[];
    dataSourceIdentifier: string;
    description: string;
    name: string;
    initialized: boolean;
    metaModelRef: string;
    pimadIdentifier: string;
}
export interface DataItemModel {
    initialized: boolean;
    dataType: string;
    name: string;
    value: string;
    defaultValue: string;
    description: string;
    pimadIdentifier: string;
    cIData: CIData;
    dataSourceIdentifier: string;
    metaModelRef: string;
}

export interface NodeId {
    initialized: boolean;
    namespaceIndex: string;
    identifier: string;
}

export interface CIData {
    initialized: boolean;
    nodeId: NodeId;
}

export interface Endpoint {
    initialized: boolean;
    dataType: string;
    name: string;
    value: string;
    defaultValue: string;
    description: string;
    pimadIdentifier: string;
}
export interface Attribute {
    dataType: string;
    name: string;
    initialized: boolean;
    value: string;
}

export interface ProcedureModel {
    initialized: boolean;
    attributes: Attribute[];
    dataAssembly: DataAssemblyModel;
    metaModelRef: string;
    name: string;
    parameters: any[];
    dataSourceIdentifier: string;
    pimadIdentifier: string;
}

export interface ServiceModel {
    initialized: boolean;
    attributes: any[];
    dataAssembly: DataAssemblyModel;
    metaModelRef: string;
    name: string;
    parameters: any[];
    procedures: ProcedureModel[];
    dataSourceIdentifier: string;
    pimadIdentifier: string;
}


