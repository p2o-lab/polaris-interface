import {ModuleInterface, PlayerInterface, RecipeInterface, ServiceInterface, VirtualServiceInterface} from '..';

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
        message: 'module';
        module: ModuleInterface;
    } |
    {
        message: 'service';
        moduleId: string;
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
    timestampPfe: Date;
    timestampModule: Date;
    module: string;
    variable: string;
    value: number | string;
    unit: string;
}
