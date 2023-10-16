

# Notes
- ## GraphQL Transformer v2 to v1 Downgrade
  - The CLI uses GraphQL Transformer v2 by default. But the YouTube tutorial uses v1. 
  - The CLI will prompts error for using "@key" and "@connection" directories because they were deprecated in v2. 
  - You can either do the [GraphQL Transformer v1 to v2 migration](https://docs.amplify.aws/cli/migration/transformer-migration/) or [simply set the CLI to use v1 in "cli.json"](https://stackoverflow.com/a/72260337/9179133). 
  - To match the YouTube tutorial settings I downgraded GraphQL Transformer from v2 to v1.

