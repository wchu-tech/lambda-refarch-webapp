// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "665gnin6bkfcmp1c9ehlcmjhmh",     // CognitoClientID
  "api_base_url": "https://svg015y0q6.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1dv3zum4t340u.amplifyapp.com"                                      // AmplifyURL
};

export default config;
