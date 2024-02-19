# Good developer experience

This is a playground to showcase what is the good developer experience in my mind. In this playground, we will use instill-ai's pipeline recipe and API as an example to construct a good developer experience.

```
// Instill AI's recipe

{
  "version": "v1beta",
  "components": [
    {
      "id": "start",
      "resource_name": "",
      "configuration": {
        "metadata": {
          "input": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "instillFormat": "array:string",
            "title": "input"
          }
        }
      },
      "definition_name": "operator-definitions/start"
    },
    {
      "id": "end",
      "resource_name": "",
      "configuration": {
        "input": {
          "result": "${stability_0.output.images}"
        },
        "metadata": {
          "result": {
            "title": "result"
          }
        }
      },
      "definition_name": "operator-definitions/end"
    },
    {
      "id": "stability_0",
      "resource_name": "users/pochun/connectors/st-dev",
      "configuration": {
        "task": "TASK_TEXT_TO_IMAGE",
        "input": {
          "cfg_scale": 7,
          "clip_guidance_preset": "FAST_BLUE",
          "engine": "stable-diffusion-xl-1024-v1-0",
          "height": 512,
          "prompts": "${start.input}",
          "sampler": "K_DPM_2_ANCESTRAL",
          "samples": 1,
          "steps": 30,
          "width": 512
        }
      },
      "definition_name": "connector-definitions/stability-ai"
    }
  ]
}



```

## Principles

- **Fast feedback loop**: The faster the feedback loop, the more productive the developer is.
- **local development**: The development environment should be as close as possible to the production environment.
- **intelligence**: The tools should be smart enough to help the developer to be more productive.
- **automation**: The tools should automate the repetitive tasks.

## Work in progress thought

- **Multi-Pipeline:** How to manage multiple pipelines in the same repo?

### CLI

In this playground, CLI focuses on several features:

- init: Initialize the project with the essential configuration

This function will generate an "instill-ai" folder with the configuration file and the pipeline recipe. The structure of the configuration will be quite similar to the `package.json`

```json
{
  "name": "entity-id/pipeline-id",
  "recipe": "path/to/recipe"

  // This will affect how you manage the recipe, a singular recipe mean the pipeline recipe is only maintained in one json file. A plural recipe will allow you to use $ref to reference different recipe.
  "recipe_strategy": "singular"
}
```

- pull: Pull the latest code from the remote.

Every pull cover remote recipe onto the local recipe. If there is a conflict, the CLI will ask the user to resolve the conflict.

- push: Push the code to the remote.

Once the recipe is finished, you can push the updated recipe to the instill-ai cloud services. This can also be done within GitHub CI/CD workflow.

- view: Generate a human-readable view that can better visualize what the code is doing

This is a helper function that will set up a working server to host the diagram of the pipeline. This will help the developer to understand the pipeline better.

- diff: Show the difference between the local and remote code.
- validate: Validate the code against the best practices.

### System as code

Borrowing the idea from infrastructure as code, we should maintain the whole system using code within the same repository (We call it protocol here). During the development, we can spin up the services using the code. And we can also deploy the services to the production using the same code.

### Different environment control and CI/CD

The CI/CD pipeline should be able to validate the protocol and deploy the services to production. The production environment should be able to have different branches.

Let's take Vercel structure for example. Vercel uses three envrionment abstractions "Development", "Preview" and "Production". They are not directly aligned with the version control branches. Instead, user can link different branches to a set of environment with their own will. For example, they can connect one of the preview environment to the `main` branch, so every time the `main` branch is updated, the preview environment will be updated as well. Then they can set the production environment to the `release` branch, so every time the `release` branch is updated, the production environment will be updated as well.

### Intelligent code editor

With the help of VSCode intelligence, we can properly hint users how to write a good protocol for their services.

### Good starter

Using `giget` and remote repository to store templates. We can provide a better experience for starting a new project.

The experience will be similar to `create astro@latest` and `create-turbo@latest`. Both of them will ask simple questions to construct the starter project for you.

```
1. What is the name of the project?

- We use -t parameters to indicate which template user want to use
```

### Type safety

Each Instill AI's recipe constructs a pipeline, the pipeline will have input and output and can be called by Instill AI's API. This tool will auto-generate the type definition of this pipeline. So the developer can use the type definition to write the application code.

```
inst --gen-type -r /path/to/recipe -o /path/to/output
```

## How to operate this whole system

We will use one of the Instill AI's public pipelines as an example.
