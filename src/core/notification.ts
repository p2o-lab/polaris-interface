import {PEAInterface, PlayerInterface, POLServiceInterface, RecipeInterface, ServiceInterface} from '..';

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
      message: 'polService';
      polService: POLServiceInterface;
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
