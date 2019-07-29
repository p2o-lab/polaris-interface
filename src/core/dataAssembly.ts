import {OpcUaNodeOptions} from './options';

export interface BaseDataAssemblyOptions {
    TagName: OpcUaNodeOptions;
    TagDescription: OpcUaNodeOptions;
    OSLevel: OpcUaNodeOptions;
    WQC: OpcUaNodeOptions;
}

// Mixins
export type UnitDataAssemblyOptions = BaseDataAssemblyOptions & {
    VUnit: OpcUaNodeOptions;
};

export type ScaleSettingsDataAssemblyOptions = BaseDataAssemblyOptions & {
    VSclMin: OpcUaNodeOptions;
    VSclMax: OpcUaNodeOptions;
};

export type ValueLimitationOptions = BaseDataAssemblyOptions & {
    VMin: OpcUaNodeOptions;
    VMax: OpcUaNodeOptions;
};

export type OpModeOptions = BaseDataAssemblyOptions & {
    OpMode: OpcUaNodeOptions;
};

// AnaView
export type AnaViewOptions = BaseDataAssemblyOptions & UnitDataAssemblyOptions & ScaleSettingsDataAssemblyOptions & {
    V: OpcUaNodeOptions;
};

export type AnaMonOptions = AnaViewOptions & {
    VAHEn: OpcUaNodeOptions;
    VAHLim: OpcUaNodeOptions;
    VAHAct: OpcUaNodeOptions;
    VWHEn: OpcUaNodeOptions;
    VWHLim: OpcUaNodeOptions;
    VWHAct: OpcUaNodeOptions;
    VTHEn: OpcUaNodeOptions;
    VTHLim: OpcUaNodeOptions;
    VTHAct: OpcUaNodeOptions;
    VALEn: OpcUaNodeOptions;
    VALLim: OpcUaNodeOptions;
    VALAct: OpcUaNodeOptions;
    VWLEn: OpcUaNodeOptions;
    VWLLim: OpcUaNodeOptions;
    VWLAct: OpcUaNodeOptions;
    VTLEn: OpcUaNodeOptions;
    VTLLim: OpcUaNodeOptions;
    VTLAct: OpcUaNodeOptions;
};

// AnaOp
export type AnaOpOptions = BaseDataAssemblyOptions &
    UnitDataAssemblyOptions & ValueLimitationOptions &
    ScaleSettingsDataAssemblyOptions & {
    VOut: OpcUaNodeOptions;
    VRbk: OpcUaNodeOptions;
    VExt: OpcUaNodeOptions;
};

export type ExtIntAnaOpOptions = AnaOpOptions & OpModeOptions & {
    VInt: OpcUaNodeOptions;
};

// DigView
export type DigViewOptions = AnaViewOptions;
export type DigMonOptions = AnaMonOptions;

// DigOp
export type DigOpOptions = AnaOpOptions;
export type ExtIntDigOptions = ExtIntAnaOpOptions;

// BinView
export type BinViewOptions = BaseDataAssemblyOptions & {
    V: OpcUaNodeOptions;
    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
};

export type BinMonOptions = BinViewOptions & {
    VFlutTi: OpcUaNodeOptions;
    VFlutEn: OpcUaNodeOptions;
    VFlutCnt: OpcUaNodeOptions;
    VFlutAct: OpcUaNodeOptions;
};

// BinOp
export type BinOpOptions = BaseDataAssemblyOptions & {
    V: OpcUaNodeOptions;
    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
    VExt: OpcUaNodeOptions;
    VOut: OpcUaNodeOptions;
    VRbk: OpcUaNodeOptions;
};

// Str
export type StrOptions = BaseDataAssemblyOptions & {
    Text: OpcUaNodeOptions;
};

// Drv
export type DrvOptions = BaseDataAssemblyOptions & OpModeOptions & {
    FwdEn: OpcUaNodeOptions;
    RevEn: OpcUaNodeOptions;
    StopOp: OpcUaNodeOptions;
    FwdOp: OpcUaNodeOptions;
    RevOp: OpcUaNodeOptions;
    StopLi: OpcUaNodeOptions;
    FwdLi: OpcUaNodeOptions;
    RevLi: OpcUaNodeOptions;
    FwdCtrl: OpcUaNodeOptions;
    RevCtrl: OpcUaNodeOptions;
    RevFbkEn: OpcUaNodeOptions;
    FwdFbkEn: OpcUaNodeOptions;
    RevFbk: OpcUaNodeOptions;
    FwdFbk: OpcUaNodeOptions;
    SafePos: OpcUaNodeOptions;
    Trip: OpcUaNodeOptions;
    RpmSclMax: OpcUaNodeOptions;
    RpmSclMin: OpcUaNodeOptions;
    RpmUnit: OpcUaNodeOptions;
    RpmInt: OpcUaNodeOptions;
    RpmExt: OpcUaNodeOptions;
    RpmMin: OpcUaNodeOptions;
    RpmMax: OpcUaNodeOptions;
    Rpm: OpcUaNodeOptions;
    RpmFbk: OpcUaNodeOptions;
    PermEn: OpcUaNodeOptions;
    Permit: OpcUaNodeOptions;
    IntlEn: OpcUaNodeOptions;
    Interlock: OpcUaNodeOptions;
    ProtEn: OpcUaNodeOptions;
    Protect: OpcUaNodeOptions;
    ResetOp: OpcUaNodeOptions;
    ResetLi: OpcUaNodeOptions;
};

// Vlv
type BinVlvOptions = BaseDataAssemblyOptions & OpModeOptions & {
    SafePos: OpcUaNodeOptions;
    OpenOp: OpcUaNodeOptions;
    CloseOp: OpcUaNodeOptions;
    OpenLi: OpcUaNodeOptions;
    CloseLi: OpcUaNodeOptions;
    Ctrl: OpcUaNodeOptions;
    OpenFbkEn: OpcUaNodeOptions;
    CloseFbkEn: OpcUaNodeOptions;
    OpenFbk: OpcUaNodeOptions;
    CloseFbk: OpcUaNodeOptions;
    PermEn: OpcUaNodeOptions;
    Permit: OpcUaNodeOptions;
    IntlEn: OpcUaNodeOptions;
    Interlock: OpcUaNodeOptions;
    ProtEn: OpcUaNodeOptions;
    Protect: OpcUaNodeOptions;
    ResetOp: OpcUaNodeOptions;
    ResetLi: OpcUaNodeOptions;
};

type MonBinVlvOptions = BinVlvOptions & {
    MonEn: OpcUaNodeOptions;
    MonSafePos: OpcUaNodeOptions;
    MonStatErr: OpcUaNodeOptions;
    MonDynErr: OpcUaNodeOptions;
    MonStatTi: OpcUaNodeOptions;
    MonDynTi: OpcUaNodeOptions;
};

type AnaVlvOptions = BaseDataAssemblyOptions & OpModeOptions & {
    OpenOp: OpcUaNodeOptions;
    CloseOp: OpcUaNodeOptions;
    OpenLi: OpcUaNodeOptions;
    CloseLi: OpcUaNodeOptions;
    Ctrl: OpcUaNodeOptions;
    OpenFbkEn: OpcUaNodeOptions;
    CloseFbkEn: OpcUaNodeOptions;
    OpenFbk: OpcUaNodeOptions;
    CloseFbk: OpcUaNodeOptions;
    PosSclMin: OpcUaNodeOptions;
    PosSclMax: OpcUaNodeOptions;
    PosUnit: OpcUaNodeOptions;
    PosInt: OpcUaNodeOptions;
    PosExt: OpcUaNodeOptions;
    PosMin: OpcUaNodeOptions;
    PosMax: OpcUaNodeOptions;
    SafePos: OpcUaNodeOptions;
    PosCtrl: OpcUaNodeOptions;
    PosFbkEn: OpcUaNodeOptions;
    PosFbk: OpcUaNodeOptions;
    PermEn: OpcUaNodeOptions;
    Permit: OpcUaNodeOptions;
    IntlEn: OpcUaNodeOptions;
    Interlock: OpcUaNodeOptions;
    ProtEn: OpcUaNodeOptions;
    Protect: OpcUaNodeOptions;
    ResetOp: OpcUaNodeOptions;
    ResetLi: OpcUaNodeOptions;
};

export type MonAnaVlvOptions = AnaVlvOptions & {
    MonEn: OpcUaNodeOptions;
    MonSafePos: OpcUaNodeOptions;
    MonStatErr: OpcUaNodeOptions;
    MonDynErr: OpcUaNodeOptions;
    MonStatTi: OpcUaNodeOptions;
    MonDynTi: OpcUaNodeOptions;
    PosOpngFbk: OpcUaNodeOptions;
    PosClsngFbk: OpcUaNodeOptions;
    PosReachedFbk: OpcUaNodeOptions;
    PosTolerance: OpcUaNodeOptions;
    PosDefClose: OpcUaNodeOptions;
    PosDefOpen: OpcUaNodeOptions;
    MonPosTi: OpcUaNodeOptions;
    MonPosErr: OpcUaNodeOptions;
};

// ServiceControl
export type  ServiceControlOptions = BaseDataAssemblyOptions & OpModeOptions & {
    CommandMan: OpcUaNodeOptions;
    CommandExt: OpcUaNodeOptions;
    CommandEnable: OpcUaNodeOptions;
    State: OpcUaNodeOptions;
    StrategyMan: OpcUaNodeOptions;
    StrategyExt: OpcUaNodeOptions;
    StrategyInt: OpcUaNodeOptions;
    CurrentStrategy: OpcUaNodeOptions;
};
