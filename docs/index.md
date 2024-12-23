# Getting Started

**zJoule** is an Open Source AI assistant plugin for Eclipse designed to integrate the SAP AI Core Generative AI Hub foundation-models into your development environment.

For more information, please, visit the [project repository](https://github.com/The-Nefarious-Developer/zjoule).

## Requirements

- SAP AI Core with the `Extended` service plan (for the Generative AI Hub enablement).
- Eclipse 2024-09 (4.33.0) or latest. *Compatibility with older versions is not guaranteed.*

## Installation

1. Get an installation of Eclipse with ADT following the instructions available through [this link](https://tools.hana.ondemand.com/#abap), if you don't have it already.
2. In Eclipse, choose in the menu bar **Help > Install New Software...**
3. Enter the URL **https://zjoule.com/v1.0.0/plugin**
4. Press **Enter** to display the available features.
5. Select **zJoule - SAP AI Assistant** and choose **Next**.
6. On the next wizard page, you get an overview of the features to be installed. Choose **Next**.
7. Confirm the **license agreements** and choose **Finish** to start the installation.
8. Choose to trust the artifacts to be installed when the **Trust Artifacts** pop-up comes up to proceed with the installation process.

> You can also download the release through [this link](https://github.com/The-Nefarious-Developer/zjoule/releases) if preferred.

## Compatibility

| Executable ID | Model                          | Version                   | Compatibility      |
|---------------|--------------------------------|---------------------------|:------------------:|
| azure-openai  | `gpt-35-turbo`                 | 0613                      | Ready              |
| azure-openai  | `gpt-35-turbo`                 | 1106 (latest)             | Ready              | 
| azure-openai  | `gpt-35-turbo-16k`             | 0613 (latest)             | Ready              |
| azure-openai  | `gpt-4`                        | 0613                      | Ready              |
| azure-openai  | `gpt-4-32k`                    | 0613 (latest)             | Ready              |
| azure-openai  | `gpt-4o`                       | 2024-05-13                | In Progress        |
| azure-openai  | `gpt-4o`                       | 2024-08-06 (latest)       | In Progress        |
| azure-openai  | `gpt-4o-mini`                  | 2024-07-18                | In Progress        |
| azure-openai  | `gpt-4`                        | turbo-2024-04-09 (latest) | In Progress        |
| aws-bedrock   | `anthropic--claude-3-haiku`    | 1 (latest)                | In Progress        |
| aws-bedrock   | `anthropic--claude-3-sonnet`   | 1 (latest)                | In Progress        |
| aws-bedrock   | `anthropic--claude-3.5-sonnet` | 1                         | In Progress        |
| aws-bedrock   | `anthropic--claude-3.5-sonnet` | 2 (latest)                | In Progress        |