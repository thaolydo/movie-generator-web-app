import { AllowedMethods, Distribution, OriginRequestPolicy } from '@aws-cdk/aws-cloudfront';
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { CfnOutput, Construct, Stack, StackProps } from "@aws-cdk/core";
import { StageConfig } from './stage-config';
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins';

const path = require('path');

export class WebAppDeploymentStack extends Stack {

    public readonly webDistributionUrlOutput: CfnOutput;

    constructor(scope: Construct, id: string, stageConfigs: StageConfig, props?: StackProps) {
        super(scope, id, props);

        const stageName = stageConfigs.stageName;

        // Create the S3 bucket for hosting the web app
        const websiteBucket = new Bucket(this, `website-bucket-${stageName}`, {
            websiteIndexDocument: 'index.html',
            publicReadAccess: true,
            bucketName: `movie-generator-web-app-${stageName}`,
            websiteErrorDocument: 'index.html'
        });

        // Deployment to S3
        new BucketDeployment(this, `website-deployoment-${stageName}`, {
            sources: [Source.asset(path.join(__dirname, '..', 'web-app', 'dist', `movie-generator-web-app-${stageName}`))],
            destinationBucket: websiteBucket,
        });

        // CloudFront distribution
        const websiteDistribution = new Distribution(this, `website-distribution-${stageName}`, {
            defaultBehavior: {
                origin: new S3Origin(websiteBucket),
                originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN,
                allowedMethods: AllowedMethods.ALLOW_ALL
            },
        });
        this.webDistributionUrlOutput = new CfnOutput(this, `website-distribution-url-output-${stageName}`, {
            value: websiteDistribution.domainName,
        });

    }
}
