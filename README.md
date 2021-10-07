# Enterspeed demo: Next.js
An Enterspeed example project using Enterspeed, Umbraco Cloud, and Next.js.

We've created this example project (a simple website containing H. C. Andersen fairy tales) to illustrate the power of Enterspeed.

All of our content has been synced from Umbraco Cloud to an Enterspeed-project. This enables us to design a whole new front-end application, while still using our data from our existing CMS.

Using Enterspeed gives us the flexibility to design and optimize our front-end application as we please, while still keeping the same editor experience.

**:bulb: Tip: [You can view the full tutorial on our Docs site](https://docs.enterspeed.com/examples/umbraco-cloud-nextjs/intro/ "You can view the full tutorial on our Docs site").**

## How to set up and use
### Umbraco
**:warning: This demo uses Umbraco V8.**

Sign up for a Umbraco Cloud account. Install and configure the Enterspeed Umbraco package as described in the [tutorial](https://docs.enterspeed.com/examples/umbraco-cloud-nextjs/intro/ "tutorial").

Download the "enterspeed-demo-umbraco-content.zip"-file in the folder "example-data/umbraco-cloud/content".

Click on the Packages tab and select "Install local" on the right-hand side. Then drag the zip file onto the page, or click to select it from the dialog.

Publish the site by navigating to the Content tab, and select the Home node. 

Then click the arrow on the green "Save and Publish" button in the lower right corner, and select "Publish with descendants", 

Check the "Include unpublished content items" option, and click the "Publish with descendants" button. 

This will publish the entire site, and send the data to Enterspeed.

### Enterspeed
Set up an Enterspeed project and [configure your Sources & Environments](https://docs.enterspeed.com/examples/umbraco-cloud-nextjs/sources-environments "Configure your Sources & Environments").

Create the schemas and partial schema from [example-data/umbraco-cloud/schemas](https://github.com/enterspeedhq/enterspeed-demo-nextjs/tree/master/example-data/umbraco-cloud/schemas) and [example-data/umbraco-cloud/partial-schemas](https://github.com/enterspeedhq/enterspeed-demo-nextjs/tree/master/example-data/umbraco-cloud/partial-schemas) in Enterspeed and publish them.

### Next.js
Clone the project and cd into the "next"-folder.

Create a file called ".env.local" and insert your environment API key like this:

`ENTERSPEED_ENVIRONMENT_API_KEY=[YOUR-ENTERSPEED-API-KEY-HERE]
`

**:warning: For a production environment, this should be injected on build time.**

## Demo
You can view a demo of the live site here: https://enterspeed-demo-nextjs.netlify.app/
