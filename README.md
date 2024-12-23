<h1 align="center">
<img src="docs/assets/zjoule.png" alt="Intro GIF" width="25"/> zJoule - Website
</h1>

**zJoule** is an Open Source AI assistant plugin for Eclipse designed to integrate the **SAP AI Core** Generative AI Hub foundation-models into your development environment.

This repository provides a website with download options, guidelines and other information related to this Eclipse AI Assistant.

## Repository Content

This project provides:

- A central reference for everything related to **zJoule**.
- Eclipse `updatesite` to allow users to download the plugin through the *"install new software"* functionality or the *Eclipse Market Place*.
- `JavaDoc` website created for each version of the **zJoule** available.

## How to add new releases

Each new release artifact should be added with its respective version folder in the root of the repository directory. Example: [`v1.0.0`](./v1.0.0/).

The website provided uses [MkDocs](https://www.mkdocs.org) with the [Material](https://squidfunk.github.io/mkdocs-material/) theme. This means all dev files are going to be located at the [`docs`](./docs/) folder.

Once these files pass through the build process, they need to be relocated to the root of the repository directory. This enables GitHub Pages to expose the central website, the plugin and the JavaDoc's through the same domain configured in the repository with a single setup.

## How to Contribute

Contributions are welcome! Here's how you can get involved:

1. **Report Issues:** Found a bug or have a feature request? [Open an issue](https://github.com/The-Nefarious-Developer/zjoule-website/issues). <br />
2. **Submit Pull Requests:** Fork the repository, create a new branch, make your changes, and submit a PR. <br />
3. **Improve Documentation:** Help us improve the README or add examples to make setup easier. <br />
4. **Test & Feedback:** Try this Eclipse AI Assistant and give us feedback to improve them.

Please follow the [contribution guidelines](CONTRIBUTING.md) for more details.

> **Important**
>
> Use this repository for issues and information related to the **website**. If you want to provide feedback related to a plugin functionality, please refer to this [project repo](https://github.com/The-Nefarious-Developer/zjoule).

## References

[zJoule - Eclipse AI Assistant](https://github.com/The-Nefarious-Developer/zjoule)

## License
Copyright (c) 2024 Nicholas Coutinho Checan. <br />
Licensed under the MIT License. See [LICENSE](LICENSE).