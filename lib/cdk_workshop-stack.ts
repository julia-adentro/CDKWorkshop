import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// Import the lambda module
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,    // runtime
      code: lambda.Code.fromAsset('lambda'),  // code loaded from our "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });


  }
}
