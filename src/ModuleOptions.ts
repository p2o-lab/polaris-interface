export interface ModuleOptions {
    id: string;
    opcua_server_url: string;
    hmi_url?: string;
    services: ServiceOptions[];
    process_values: DataAssemblyOptions[];
}

export interface ServiceOptions {
    name: string;
    communication: {
        OpMode: OpcUaNodeOptions;
        ControlOp?: OpcUaNodeOptions;
        CommandMan?: OpcUaNodeOptions;
        ControlExt?: OpcUaNodeOptions;
        CommandExt?: OpcUaNodeOptions
        ControlEnable?: OpcUaNodeOptions;
        CommandEnable?: OpcUaNodeOptions;
        State?: OpcUaNodeOptions;
        CurrentState?: OpcUaNodeOptions;
        StrategyOp?: OpcUaNodeOptions;
        StrategyMan?: OpcUaNodeOptions;
        StrategyExt: OpcUaNodeOptions;
        CurrentStrategy: OpcUaNodeOptions;
    };
    strategies: StrategyOptions[];
    parameters: DataAssemblyOptions[];
}

export interface DataAssemblyOptions {
    name: string;
    interface_class: string;
    communication: OpcUaNodeOptions[];
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
    // name of strategy
    name: string;
    // default strategy
    default: boolean;
    // self-completing strategy
    sc: boolean;
    // strategyParameters of strategy
    parameters: DataAssemblyOptions[];
    // process values of strategy
    processValues: DataAssemblyOptions[];
}

export interface OpcUaNodeOptions {
    // despite its current name this variable contains the *namespace url* of the node
    namespace_index: string;
    // node id of the node as string (e.g. 's=sdfdsf' or 'i=12')
    node_id: string;
    // data type of OPC UA node
    data_type: string;
    // recent value
    value?: number | string | boolean;
    // timestamp of last update of value
    timestamp?: Date;
}
