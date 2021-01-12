import {OpcUaNodeOptions} from './options';

export interface BaseDataAssemblyOptions {
    TagName: OpcUaNodeOptions;
    TagDescription: OpcUaNodeOptions;
}

export type IndicatorElementDataAssemblyOptions = BaseDataAssemblyOptions & {
    WQC: OpcUaNodeOptions;
};

// Mixins
export type FeedbackMonitoringDataAssemblyOptions = BaseDataAssemblyOptions & {
    MonEn: OpcUaNodeOptions;
    MonSafePos: OpcUaNodeOptions;
    MonStatErr: OpcUaNodeOptions;
    MonDynErr: OpcUaNodeOptions;
    MonStatTi: OpcUaNodeOptions;
    MonDynTi: OpcUaNodeOptions;
};

export type InterlockDataAssemblyOptions = BaseDataAssemblyOptions & {
    PermEn: OpcUaNodeOptions;
    Permit: OpcUaNodeOptions;
    IntlEn: OpcUaNodeOptions;
    Interlock: OpcUaNodeOptions;
    ProtEn: OpcUaNodeOptions;
    Protect: OpcUaNodeOptions;
};

export type LimitMonitoringDataAssemblyOptions = BaseDataAssemblyOptions & {
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

export type OpModeDataAssemblyOptions = BaseDataAssemblyOptions & {
    OpMode: OpcUaNodeOptions;
    StateChannel: OpcUaNodeOptions;
    StateOffAut: OpcUaNodeOptions;
    StateOpAut: OpcUaNodeOptions;
    StateAutAut: OpcUaNodeOptions;
    StateOffOp: OpcUaNodeOptions;
    StateOpOp: OpcUaNodeOptions;
    StateAutOp: OpcUaNodeOptions;
    StateOpAct: OpcUaNodeOptions;
    StateAutAct: OpcUaNodeOptions;
    StateOffAct: OpcUaNodeOptions;
};

export type OSLevelDataAssemblyOptions = BaseDataAssemblyOptions & {
    OSLevel: OpcUaNodeOptions;
};

export type ResetDataAssemblyOptions = BaseDataAssemblyOptions & {
    ResetOp: OpcUaNodeOptions;
    ResetAut: OpcUaNodeOptions;
};

export type ScaleSettingsDataAssemblyOptions = BaseDataAssemblyOptions & {
    VSclMin: OpcUaNodeOptions;
    VSclMax: OpcUaNodeOptions;
};

export type ServiceSourceModeDataAssemblyOptions = BaseDataAssemblyOptions & {
    SrcChannel: OpcUaNodeOptions;
    SrcIntAct: OpcUaNodeOptions;
    SrcIntAut: OpcUaNodeOptions;
    SrcIntOp: OpcUaNodeOptions;
    SrcExtAct: OpcUaNodeOptions;
    SrcExtAut: OpcUaNodeOptions;
    SrcExtOp: OpcUaNodeOptions;
};

export type SourceModeDataAssemblyOptions = BaseDataAssemblyOptions & {
    SrcChannel: OpcUaNodeOptions;
    SrcIntAct: OpcUaNodeOptions;
    SrcIntAut: OpcUaNodeOptions;
    SrcIntOp: OpcUaNodeOptions;
    SrcManAct: OpcUaNodeOptions;
    SrcManAut: OpcUaNodeOptions;
    SrcManOp: OpcUaNodeOptions;
};

export type UnitDataAssemblyOptions = BaseDataAssemblyOptions & {
    VUnit: OpcUaNodeOptions;
};

export type ValueLimitationDataAssemblyOptions = BaseDataAssemblyOptions & {
    VMin: OpcUaNodeOptions;
    VMax: OpcUaNodeOptions;
};

export type WQCDataAssemblyOptions = BaseDataAssemblyOptions & {
    WQC: OpcUaNodeOptions;
};
//#region "IndicatorElements"
export type IndicatorElementOptions = BaseDataAssemblyOptions & WQCDataAssemblyOptions;

// BinView
export type BinViewOptions = IndicatorElementDataAssemblyOptions & {
    V: OpcUaNodeOptions;
    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
};

// BinMon
export type BinMonOptions = BinViewOptions & {
    VFlutTi: OpcUaNodeOptions;
    VFlutEn: OpcUaNodeOptions;
    VFlutCnt: OpcUaNodeOptions;
    VFlutAct: OpcUaNodeOptions;
};

// AnaView
export type AnaViewOptions = BaseDataAssemblyOptions & UnitDataAssemblyOptions & ScaleSettingsDataAssemblyOptions & {
    V: OpcUaNodeOptions;
};
// AnaMon
export type AnaMonOptions = AnaViewOptions & OSLevelDataAssemblyOptions & LimitMonitoringDataAssemblyOptions;

// DIntView
export type DIntViewOptions = AnaViewOptions;
export type DIntMonOptions = AnaMonOptions;

// StringView
export type StringViewOptions = BaseDataAssemblyOptions & {
    Text: OpcUaNodeOptions;
};

//#endregion "IndicatorElements"

//#region "OperationElements"
export type OperationElementDataAssemblyOptions = BaseDataAssemblyOptions & OSLevelDataAssemblyOptions;

// BinMan
export type BinManOptions = OperationElementDataAssemblyOptions & {
    V: OpcUaNodeOptions;
    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
    VExt: OpcUaNodeOptions;
    VOut: OpcUaNodeOptions;
    VRbk: OpcUaNodeOptions;
    VMan: OpcUaNodeOptions;
};

// BinManInt
export type BinManIntOptions = BinManOptions & SourceModeDataAssemblyOptions & {
    VInt: OpcUaNodeOptions;
};
// AnaMan
export type AnaManOptions = OperationElementDataAssemblyOptions &
  UnitDataAssemblyOptions & ValueLimitationDataAssemblyOptions &
  ScaleSettingsDataAssemblyOptions & {
    VOut: OpcUaNodeOptions;
    VRbk: OpcUaNodeOptions;
    VExt: OpcUaNodeOptions;
    VMan: OpcUaNodeOptions;
};
// AnaMan
export type AnaManIntOptions = OperationElementDataAssemblyOptions & SourceModeDataAssemblyOptions & {
    VInt: OpcUaNodeOptions;
};
// DIntMan
export type DIntManOptions = AnaManOptions;
export type DIntManIntOptions = AnaManIntOptions;

export type ServParamOptions = OperationElementDataAssemblyOptions &
  OpModeDataAssemblyOptions & ServiceSourceModeDataAssemblyOptions &
  WQCDataAssemblyOptions & {
    Sync: OpcUaNodeOptions;
};
export type AnaServParamOptions = ServParamOptions & ScaleSettingsDataAssemblyOptions &
  UnitDataAssemblyOptions & ValueLimitationDataAssemblyOptions & {
    VExt: OpcUaNodeOptions;
    VOp: OpcUaNodeOptions;
    VInt: OpcUaNodeOptions;
    VReq: OpcUaNodeOptions;
    VOut: OpcUaNodeOptions;
    VFbk: OpcUaNodeOptions;
};
export type DIntServParamOptions = AnaServParamOptions;

export type BinServParamOptions = ServParamOptions & {
    VExt: OpcUaNodeOptions;
    VOp: OpcUaNodeOptions;
    VInt: OpcUaNodeOptions;
    VReq: OpcUaNodeOptions;
    VOut: OpcUaNodeOptions;
    VFbk: OpcUaNodeOptions;

    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
};

export type StringServParamOptions = ServParamOptions & {
    VExt: OpcUaNodeOptions;
    VOp: OpcUaNodeOptions;
    VInt: OpcUaNodeOptions;
    VReq: OpcUaNodeOptions;
    VOut: OpcUaNodeOptions;
    VFbk: OpcUaNodeOptions;
};
//#endregion "OperationElements"

//#region "ActiveElements"
export type ActiveElementOptions = BaseDataAssemblyOptions & OSLevelDataAssemblyOptions & WQCDataAssemblyOptions;

// Vlv
export type VlvOptions = ActiveElementOptions & OpModeDataAssemblyOptions & SourceModeDataAssemblyOptions &
  InterlockDataAssemblyOptions & ResetDataAssemblyOptions & {
    SafePos: OpcUaNodeOptions;
    SafePosEn: OpcUaNodeOptions;
    SafePosAct: OpcUaNodeOptions;

    OpenAut: OpcUaNodeOptions;
    OpenFbk: OpcUaNodeOptions;
    OpenFbkCalc: OpcUaNodeOptions;
    OpenOp: OpcUaNodeOptions;

    CloseAut: OpcUaNodeOptions;
    CloseFbk: OpcUaNodeOptions;
    CloseFbkCalc: OpcUaNodeOptions;
    CloseOp: OpcUaNodeOptions;
};

export type BinVlvOptions = VlvOptions & {
    Ctrl: OpcUaNodeOptions;
};
export type MonBinVlvOptions = BinVlvOptions & FeedbackMonitoringDataAssemblyOptions;

export type AnaVlvOptions = VlvOptions & {
    Pos: OpcUaNodeOptions;
    PosFbk: OpcUaNodeOptions;
    PosFbkCalc: OpcUaNodeOptions;
    PosRbk: OpcUaNodeOptions;
    PosInt: OpcUaNodeOptions;
    PosMan: OpcUaNodeOptions;
    PosUnit: OpcUaNodeOptions;
    PosSclMin: OpcUaNodeOptions;
    PosSclMax: OpcUaNodeOptions;
    PosMin: OpcUaNodeOptions;
    PosMax: OpcUaNodeOptions;

    OpenAct: OpcUaNodeOptions;
    CloseAct: OpcUaNodeOptions;
};
export type MonAnaVlvOptions = AnaVlvOptions & FeedbackMonitoringDataAssemblyOptions & {
    PosReachedFbk: OpcUaNodeOptions;
    PosTolerance: OpcUaNodeOptions;
    MonPosTi: OpcUaNodeOptions;
    MonPosErr: OpcUaNodeOptions;
};

// Drv
export type DrvOptions = ActiveElementOptions & OpModeDataAssemblyOptions &
  SourceModeDataAssemblyOptions & InterlockDataAssemblyOptions & ResetDataAssemblyOptions & {
    SafePos: OpcUaNodeOptions;
    SafePosAct: OpcUaNodeOptions;

    FwdAut: OpcUaNodeOptions;
    FwdCtrl: OpcUaNodeOptions;
    FwdEn: OpcUaNodeOptions;
    FwdFbk: OpcUaNodeOptions;
    FwdFbkCalc: OpcUaNodeOptions;
    FwdOp: OpcUaNodeOptions;

    RevAut: OpcUaNodeOptions;
    RevCtrl: OpcUaNodeOptions;
    RevEn: OpcUaNodeOptions;
    RevFbk: OpcUaNodeOptions;
    RevFbkCalc: OpcUaNodeOptions;
    RevOp: OpcUaNodeOptions;

    StopAut: OpcUaNodeOptions;
    StopOp: OpcUaNodeOptions;
    Trip: OpcUaNodeOptions;
};

export type AnaDrvOptions = DrvOptions & {
    RpmSclMax: OpcUaNodeOptions;
    RpmSclMin: OpcUaNodeOptions;

    RpmUnit: OpcUaNodeOptions;

    RpmMin: OpcUaNodeOptions;
    RpmMax: OpcUaNodeOptions;

    RpmInt: OpcUaNodeOptions;
    RpmMan: OpcUaNodeOptions;

    Rpm: OpcUaNodeOptions;
    RpmFbk: OpcUaNodeOptions;
    RpmFbkCalc: OpcUaNodeOptions;
    RpmRbk: OpcUaNodeOptions;
};
export type MonAnaDrvOptions = AnaDrvOptions & FeedbackMonitoringDataAssemblyOptions & {
    RpmErr: OpcUaNodeOptions;

    RpmAHEn: OpcUaNodeOptions;
    RpmAHLim: OpcUaNodeOptions;
    RpmAHAct: OpcUaNodeOptions;
    RpmALEn: OpcUaNodeOptions;
    RpmALLim: OpcUaNodeOptions;
    RpmALAct: OpcUaNodeOptions;
};

export type BinDrvOptions = DrvOptions;
export type MonBinDrvOptions = BinDrvOptions & FeedbackMonitoringDataAssemblyOptions;

export type PIDCtrlOptions = ActiveElementOptions & OpModeDataAssemblyOptions & SourceModeDataAssemblyOptions & {
    PV: OpcUaNodeOptions;
    PVSclMin: OpcUaNodeOptions;
    PVSclMax: OpcUaNodeOptions;
    PVUnit: OpcUaNodeOptions;

    SPMan: OpcUaNodeOptions;
    SPInt: OpcUaNodeOptions;
    SPSclMin: OpcUaNodeOptions;
    SPSclMax: OpcUaNodeOptions;
    SPUnit: OpcUaNodeOptions;
    SPIntMin: OpcUaNodeOptions;
    SPIntMax: OpcUaNodeOptions;
    SPManMin: OpcUaNodeOptions;
    SPManMax: OpcUaNodeOptions;
    SP: OpcUaNodeOptions;

    MVMan: OpcUaNodeOptions;
    MV: OpcUaNodeOptions;
    MVSclMin: OpcUaNodeOptions;
    MVSclMax: OpcUaNodeOptions;
    MVUnit: OpcUaNodeOptions;
    MVMin: OpcUaNodeOptions;
    MVMax: OpcUaNodeOptions;

    P: OpcUaNodeOptions;
    Ti: OpcUaNodeOptions;
    Td: OpcUaNodeOptions;
};
//#endregion "ActiveElements"

//#region "DiagnosticElements"
export type DiagnosticElementOptions = BaseDataAssemblyOptions & OSLevelDataAssemblyOptions & WQCDataAssemblyOptions;

export type HealthStateViewOptions = DiagnosticElementOptions;

export type LockView4Options = DiagnosticElementOptions & {
    Logic: OpcUaNodeOptions; // False = AND; TRUE = OR;
    Out: OpcUaNodeOptions;
    OutQC: OpcUaNodeOptions;

    In1En: OpcUaNodeOptions;
    In1: OpcUaNodeOptions;
    In1QC: OpcUaNodeOptions;
    In1Inv: OpcUaNodeOptions;
    In1Txt: OpcUaNodeOptions;

    In2En: OpcUaNodeOptions;
    In2: OpcUaNodeOptions;
    In2QC: OpcUaNodeOptions;
    In2Inv: OpcUaNodeOptions;
    In2Txt: OpcUaNodeOptions;

    In3En: OpcUaNodeOptions;
    In3: OpcUaNodeOptions;
    In3QC: OpcUaNodeOptions;
    In3Inv: OpcUaNodeOptions;
    In3Txt: OpcUaNodeOptions;

    In4En: OpcUaNodeOptions;
    In4: OpcUaNodeOptions;
    In4QC: OpcUaNodeOptions;
    In4Inv: OpcUaNodeOptions;
    In4Txt: OpcUaNodeOptions;
};
export type LockView8Options = LockView4Options & {
    In5En: OpcUaNodeOptions;
    In5: OpcUaNodeOptions;
    In5QC: OpcUaNodeOptions;
    In5Inv: OpcUaNodeOptions;
    In5Txt: OpcUaNodeOptions;

    In6En: OpcUaNodeOptions;
    In6: OpcUaNodeOptions;
    In6QC: OpcUaNodeOptions;
    In6Inv: OpcUaNodeOptions;
    In6Txt: OpcUaNodeOptions;

    In7En: OpcUaNodeOptions;
    In7: OpcUaNodeOptions;
    In7QC: OpcUaNodeOptions;
    In7Inv: OpcUaNodeOptions;
    In7Txt: OpcUaNodeOptions;

    In8En: OpcUaNodeOptions;
    In8: OpcUaNodeOptions;
    In8QC: OpcUaNodeOptions;
    In8Inv: OpcUaNodeOptions;
    In8Txt: OpcUaNodeOptions;
};
export type LockView16Options = LockView8Options & {
    In9En: OpcUaNodeOptions;
    In9: OpcUaNodeOptions;
    In9QC: OpcUaNodeOptions;
    In9Inv: OpcUaNodeOptions;
    In9Txt: OpcUaNodeOptions;

    In10En: OpcUaNodeOptions;
    In10: OpcUaNodeOptions;
    In10QC: OpcUaNodeOptions;
    In10Inv: OpcUaNodeOptions;
    In10Txt: OpcUaNodeOptions;

    In11En: OpcUaNodeOptions;
    In11: OpcUaNodeOptions;
    In11QC: OpcUaNodeOptions;
    In11Inv: OpcUaNodeOptions;
    In11Txt: OpcUaNodeOptions;

    In12En: OpcUaNodeOptions;
    In12: OpcUaNodeOptions;
    In12QC: OpcUaNodeOptions;
    In12Inv: OpcUaNodeOptions;
    In12Txt: OpcUaNodeOptions;

    In13En: OpcUaNodeOptions;
    In13: OpcUaNodeOptions;
    In13QC: OpcUaNodeOptions;
    In13Inv: OpcUaNodeOptions;
    In13Txt: OpcUaNodeOptions;

    In14En: OpcUaNodeOptions;
    In14: OpcUaNodeOptions;
    In14QC: OpcUaNodeOptions;
    In14Inv: OpcUaNodeOptions;
    In14Txt: OpcUaNodeOptions;

    In15En: OpcUaNodeOptions;
    In15: OpcUaNodeOptions;
    In15QC: OpcUaNodeOptions;
    In15Inv: OpcUaNodeOptions;
    In15Txt: OpcUaNodeOptions;

    In16En: OpcUaNodeOptions;
    In16: OpcUaNodeOptions;
    In16QC: OpcUaNodeOptions;
    In16Inv: OpcUaNodeOptions;
    In16Txt: OpcUaNodeOptions;
};
//#endregion "DiagnosticElements"

//#region "InputElements"
export type InputElementOptions = BaseDataAssemblyOptions & WQCDataAssemblyOptions;
export type AnaProcessValueInOptions = IndicatorElementOptions & UnitDataAssemblyOptions &
  ScaleSettingsDataAssemblyOptions & {
    VExt: OpcUaNodeOptions;
};
export type BinProcessValueInOptions = IndicatorElementOptions & {
    VExt: OpcUaNodeOptions;
    VState0: OpcUaNodeOptions;
    VState1: OpcUaNodeOptions;
};
export type DIntProcessValueOptions = IndicatorElementOptions & UnitDataAssemblyOptions &
  ScaleSettingsDataAssemblyOptions & {
    VExt: OpcUaNodeOptions;
};
//#endregion "InputElements"

// ServiceControl
export type  ServiceControlOptions = BaseDataAssemblyOptions &
  OpModeDataAssemblyOptions & WQCDataAssemblyOptions &
  OSLevelDataAssemblyOptions & ServiceSourceModeDataAssemblyOptions & {
    CommandOp: OpcUaNodeOptions;
    CommandInt: OpcUaNodeOptions;
    CommandExt: OpcUaNodeOptions;
    CommandEn: OpcUaNodeOptions;
    StateCur: OpcUaNodeOptions;
    ProcedureOp: OpcUaNodeOptions;
    ProcedureInt: OpcUaNodeOptions;
    ProcedureExt: OpcUaNodeOptions;
    ProcedureCur: OpcUaNodeOptions;
    ProcedureReq: OpcUaNodeOptions;

    InteractQuestionID: OpcUaNodeOptions;
    InteractAnswerID: OpcUaNodeOptions;
    PosTextID: OpcUaNodeOptions;
};
