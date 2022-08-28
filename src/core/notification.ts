import {PEAInfo, PlayerInterface, POLServiceInfo, RecipeInterface, ServiceInfo} from '..';

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
      pea: PEAInfo;
    } |
    {
      message: 'service';
      peaId: string;
      service: ServiceInfo;
    } |
    {
      message: 'polService';
      polService: POLServiceInfo;
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
  unit?: string;
}
