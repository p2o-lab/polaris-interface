export interface ModuleOptions {
    id: string;
    opcuaServerUrl: string;
    hmiUrl?: string;
    services: ServiceOptions[];
    processValues: { name: string; communication: OpcUaNodeOptions[] }[];
}

export interface ServiceOptions {
    name: string;
    communication: {
        OpMode: OpcUaNodeOptions;
        ControlOp: OpcUaNodeOptions;
        ControlExt: OpcUaNodeOptions;
        ControlEnable: OpcUaNodeOptions;
        State: OpcUaNodeOptions;
        StrategyOp: OpcUaNodeOptions;
        StrategyExt: OpcUaNodeOptions;
        CurrentStrategy: OpcUaNodeOptions;
        ErrorMessage: OpcUaNodeOptions;
    };
    strategies: StrategyOptions[];
    parameters: ServiceParameterOptions[];
}

export interface ServiceParameterOptions {
    name: string;
    interface_class: string;
    communication: {
        VExt: OpcUaNodeOptions,
        VOut: OpcUaNodeOptions,
        VMin: OpcUaNodeOptions,
        VMax: OpcUaNodeOptions,
        VSclMax: OpcUaNodeOptions,
        VSclMin: OpcUaNodeOptions,
        VRbk: OpcUaNodeOptions,
        VUnit: OpcUaNodeOptions,
        WQC: OpcUaNodeOptions,
        OSLevel: OpcUaNodeOptions,
    };
}

export interface StrategyOptions {
    id: string;
    name: string;
    default: boolean;
    sc: boolean;
    parameters: ServiceParameterOptions[];
}

export interface OpcUaNodeOptions {
    // despite its current name this variable contains the *namespace url* of the node
    namespace_index: string;
    // node id of the node as string (e.g. 's=sdfdsf' or 'i=12')
    node_id: string;
    // data type of OPC UA node
    data_type: string;
}
