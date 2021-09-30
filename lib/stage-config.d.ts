export declare enum Stage {
    BETA = 0,
    PROD = 1
}
export interface StageConfig {
    readonly stage: Stage;
    readonly stageName: string;
    readonly accountId: string;
}
export declare const STAGES: StageConfig[];
