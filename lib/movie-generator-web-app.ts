import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { StageConfig } from './stage-config';
import { WebAppDeploymentStack } from './web-app-deployment-stack';

export class MovieGeneratorWebApp extends Stage {

    constructor(scope: Construct, id: string, stageConfigs: StageConfig, props?: StageProps) {
        super(scope, id, props);

        const webAppDeploymentStack = new WebAppDeploymentStack(this, `web-app-deployment-stack-${stageConfigs.stageName}`, stageConfigs, {
            stackName: `WebAppDeploymentStack-${stageConfigs.stageName}`,
            env: props?.env
        });

    }

}