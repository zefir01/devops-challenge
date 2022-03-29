terraform {
  cloud {
    organization = "zefir01"

    workspaces {
      name = "devops-challenge"
    }
  }
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
}

module "lambda" {
  source = "./lambda"
}
module "api_gateway" {
  source = "./api_gateway"
  lambda_name = module.lambda.function_name
  lambda_arn = module.lambda.function_arn
}

output "test_command" {
  value = 'curl --header "Content-Type: application/json" --data \'{"username":"xyz","password":"xyz"}\' ${module.api_gateway.base_url}/hello'
}