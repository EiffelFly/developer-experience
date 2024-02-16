# Protocol-based Developer Experience

This is a playground to showcase what is the good developer experience in my mind. In this playground, we will use instill-ai's pipeline recipe and API as an example to construct a good developer experience.

## Principles

- **Fast feedback loop**: The faster the feedback loop, the more productive the developer is.
- **local development**: The development environment should be as close as possible to the production environment.
- **intelligence**: The tools should be smart enough to help the developer to be more productive.
- **automation**: The tools should automate the repetitive tasks.

### CLI

In this playground, CLI focuses on several features:

- PULL: Pull the latest code from the remote.
- PUSH: Push the code to the remote.
- VIEW: Generate a human-readable view that can better visualize what the code is doing
- DIFF: Show the difference between the local and remote code.
- VALIDATE: Validate the code against the best practices.

### System as code

Borrowing the idea from infrastructure as code, we should maintain the whole system using code within the same repository (We call it protocol here). During the development, we can spin up the services using the code. And we can also deploy the services to the production using the same code.

### Intelligent code editor

With the help of VSCode intelligence, we can properly hint users how to write a good protocol for their services.

### CI/CD

The CI/CD pipeline should be able to validate the protocol and deploy the services to production. The production environment should be able to have different branches. Take Vercel for example, they separate environments into "Production", "Preview" and "Development", each environment can have its environment variables. So I can use different set of 3rd party services for different environments.

### Good starter

Using `giget` and remote repository to store templates. We can provide a better experience for starting a new project.

### Type safety

Each Instill AI's recipe construct a pipeline, the pipeline will have input and output and can be called by Instill AI's API. This tool will auto-generate the type definition of this pipeline. So the developer can use the type definition to write the application code.
