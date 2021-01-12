import {PEAInterface, PlayerInterface, RecipeInterface, ServiceInterface, VirtualServiceInterface} from '..';

export type BackendNotification =
    {
        message: 'player';
        player: PlayerInterface;
    } |
    {
        message: 'recipes';
        recipes: RecipeInterface[];
    } |
    {
        message: 'pea';
        pea: PEAInterface;
    } |
    {
        message: 'service';
        peaId: string;
        service: ServiceInterface;
    } |
    {
        message: 'virtualService';
        virtualService: VirtualServiceInterface;
    } |
    {
        message: 'variable';
        variable: VariableChange;
    } |
    {
        message: 'ping';
    };

export interface VariableChange {
    timestampPOL: Date;
    timestampPEA: Date;
    pea: string;
    variable: string;
    value: number | string;
    unit: string;
}
