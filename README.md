# axolotl

[![GitHub Super-Linter](https://github.com/aquariophilie/axolotl/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

Our modest contribution to [Atlassian Codegeist 2021](https://codegeist.devpost.com/).

## AXOLOTL - Atlassian Forge app

The `src` folder contains the source code of the AXOLOTL Forge app
which is based upon the Forge Example "Forge QR Code"
and licensed under the Apache License, Version 2.0.

Please refer to the original repository at <https://bitbucket.org/atlassian/forge-qr-code/> for details.

The AXOLOTL project was submitted to Codegeist 2021 less than 2 hours before the deadline - please see <https://devpost.com/software/axolotl>

### Prerequisites

* [Node.js](https://nodejs.org/) v12.x or later
* [Forge CLI](https://www.npmjs.com/package/@forge/cli):

  ```bash
  npm i -g @forge/cli
  ```

  If the command fails, please check the
  [@forge/cli NPM page](https://www.npmjs.com/package/@forge/cli)
  for installation details

### Usage

Check that forge is installed correctly:

```bash
forge --version
```
You should see ```2.0.1```

Before deploying your app you need to create an API key on your atlassian space:
[Atlassian API Token](https://id.atlassian.com/manage/api-tokens)
Click on *Create API token*.

After the creation, copy the created code and then run from command line:
```bash
forge login
```

Follow the steps displayed and insert the API Token when requested.


You can then register the app and choose a name for it

```bash
forge register
```

Next, it's necessary to install the dependencies

```bash
npm install
```

Deploy the app on the development environment

```bash
forge deploy
```

And finally install it on your site

```bash
forge install
```

You will be asked to select the product (in this case `Confluence`) and the site where to install the app (e.g. `username.atlassian.net`)

## About Atlassian Codegeist 2021

Highlights from the [Codegeist 2021 Home Page](https://codegeist.devpost.com/):

> Make your move to win — build Forge apps for Jira and Confluence — $300,000 in prizes.
>
> * **What to build**: Build innovative cloud apps using Atlassian’s Forge platform in one of the following categories:
>   - Apps for DevOps Teams
>   - Apps for IT
>   - Apps for Business.
> * **Submissions Due: September 13 at 5:00PM ET**

More details:

* [Register to Codegeist 2021](https://codegeist.devpost.com/register)
* [Official Rules](https://codegeist.devpost.com/rules)
* [Devpost Terms of Service](https://info.devpost.com/terms)

## Codegeist 2021 Resources

<https://codegeist.devpost.com/resources>

### Get Set Up

* [Atlassian Cloud Developer License](https://developer.atlassian.com/cloud/)
* [Getting Started documentation](https://developer.atlassian.com/platform/forge/getting-started/)

### Technical Resources

* [Platform Concepts documentation](https://developer.atlassian.com/platform/forge/debugging/)
* [Forge Tutorials](https://developer.atlassian.com/platform/forge/tutorials-and-guides/)

### Get Help

* [Join the Atlassian Developer Community](https://community.developer.atlassian.com/c/forge/45?utm_source=partner&utm_medium=unpaid-soc%5B%E2%80%A6%5DF:awareness*C:blog*W:devpost*H:fy22q1*I:codegeist21*) - Use #Codegeist to make sure your technical questions are viewable to everyone participating

### Inspiration

* [DevOps apps in the marketplace](https://marketplace.atlassian.com/categories/devops)
* [IT apps in the marketplace](https://marketplace.atlassian.com/categories/it-service-management)
* [Business apps in the marketplace](https://marketplace.atlassian.com/categories/document-management)
* [Codegeist's blog post](https://blog.developer.atlassian.com/codegeist-2021-announcement/?utm_source=partner&utm_me%5B%E2%80%A6%5Dm*F:awareness*C:blog*W:devpost*H:fy22q1*I:codegeist21*)

_This is just a small collection to get you started!_

### App Marketplace

* [Marketplace Overview](https://developer.atlassian.com/platform/marketplace/)
* [Listing Forge Apps](https://developer.atlassian.com/platform/marketplace/listing-forge-apps/)
* [Distributing Apps](https://developer.atlassian.com/platform/forge/distribute-your-apps/)

_Not required for the hackathon_


## More about Atlassian Forge

* <https://developer.atlassian.com/platform/forge/#atlassian-example-apps>
  - <https://developer.atlassian.com/platform/forge/getting-started/>
  - <https://developer.atlassian.com/platform/forge/example-apps/>
  - <https://developer.atlassian.com/platform/forge/build-a-hello-world-app-in-confluence/>
  - <https://developer.atlassian.com/platform/forge/build-a-hello-world-app-in-jira/>
* Forge examples: <https://bitbucket.org/atlassian/workspace/projects/FE>
* [Atlassian Delivers on Forge App Dev Platform Promise](https://devops.com/atlassian-delivers-on-forge-app-dev-platform-promise/) - DevOps.com, 2021-05-27

<!-- EOF -->
