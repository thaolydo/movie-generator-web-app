import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { StageConfig } from './stage-config';
export declare class MovieGeneratorWebApp extends Stage {
    constructor(scope: Construct, id: string, stageConfigs: StageConfig, props?: StageProps);
}
