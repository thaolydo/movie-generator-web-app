import { CfnOutput, Construct, Stack, StackProps } from "@aws-cdk/core";
import { StageConfig } from './stage-config';
export declare class WebAppDeploymentStack extends Stack {
    readonly webDistributionUrlOutput: CfnOutput;
    constructor(scope: Construct, id: string, stageConfigs: StageConfig, props?: StackProps);
}
