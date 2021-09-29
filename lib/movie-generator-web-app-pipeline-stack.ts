import * as cdk from '@aws-cdk/core';

import { CodePipeline, CodePipelineSource, ShellStep } from '@aws-cdk/pipelines';
import { STAGES } from './stage-config';
import { MovieGeneratorWebApp } from './movie-generator-web-app';

export class MovieGeneratorWebAppPipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Construct build command
        const pipeline = new CodePipeline(this, 'MovieGeneratorWebAppPipeline', {
            pipelineName: 'MovieGeneratorWebAppPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('thaolydo/movie-generator-web-app', 'main'),
                commands: [
                    'npm ci',
                    'npm run build',
                    'ls',
                    'ls web-app',
                    'cd web-app',
                    'ls',
                    'npm i',
                    'npm run build-beta',
                    'npm run build-prod',
                    'cd -',
                    'npx cdk synth',
                ]
            }),
            crossAccountKeys: true,
        });

        // Add stages
        STAGES.forEach(stageConfigs => {
            // Initializez the stage
            console.log(`Adding stage '${stageConfigs.stageName}'`);
            const appStage = new MovieGeneratorWebApp(this, `movie-generator-web-app-${stageConfigs.stageName}`, stageConfigs, {
                env: {
                    account: stageConfigs.accountId,
                    region: 'us-east-1'
                },
            });

            // Add stage to the pipeline
            const stage = pipeline.addStage(appStage);

        });
    }

}
