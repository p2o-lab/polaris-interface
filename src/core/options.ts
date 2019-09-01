import {ServiceOptions} from '../service/options';
import {BaseDataAssemblyOptions} from './dataAssembly';

export interface ModuleOptions {
    id: string;
    opcua_server_url: string;
    username?: string;
    password?: string;
    hmi_url?: string;
    services: ServiceOptions[];
    process_values: DataAssemblyOptions[];
}

export interface DataAssemblyOptions {
    name: string;
    interface_class: string;
    communication: BaseDataAssemblyOptions;
}

export interface OpcUaNodeOptions {
    // data type of OPC UA node
    data_type: string;
    // recent value
    value?: number | string | boolean;
    // this variable contains the *namespace url* of the node
    namespace_index: string;
    // node id of the node as string (e.g. 's=myNode2' or 'i=12')
    node_id: string;
}
