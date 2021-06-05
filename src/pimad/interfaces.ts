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
    services: any[];
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
