# Payload CMS:
It is an open source NodeJS-based [CMS](https://www.payloadcms.com) with a built-in, customizable admin panel. The founder made this as a response to Wordpress, particularly the recent copyright issues that have occured.

## Declaritive Tables:
Configuring database tables means to create a `collection.ts` in the `collections/` directory. For example, to create a table of articles we do the following:
1. create an `article.ts` file in the `collections/` directory.
2. We can then start defining the table's attributes by doing the following:

```typescript
    export const Article:CollectionConfig = {
    slug:"article",
    access:{
        create: canCreate("article"),
        read: canRead("article"),
        update: canUpdate("article"),
        delete: canDelete("article"),
    },
    admin:{
        useAsTitle:"title"
    },
    fields:[
        {
            name:"title",
            type:"text",
        },
        {
            name:"body",
            type:"text",
        },
        {
            name:"author",
            type:"relationship",
            relationTo:["users"],
        },
        {
            name:"comments",
            type:"relationship",
            relationTo:["comment"],
            hasMany:true
        }
    ]
    }
```
3. Add the `article.ts` file to the **collections** attribute in the `payload.config.ts` file.

### Table Overview:

For any **collection** that is of type `CollectionConfig` it requires two properties which are the **slug** and **fields**. The **slug** is what defines the table's name when referencing it for queries. The **fields** attribute is an array that contains the data types we wish to have in the articles table such as Title, Body, Author, Comments. 

Notice that the **Author** field has a `type` of `relationship` this means that this table has a relationship to another **collection** that has the slug of `users`. This is reflected in the admin panel as we can then view the `article` collection and can perform CRUD operations for it.

During **Create** or **Update** operations we to input the Authors, since it we specified that it has a relationship with `users`, we a select that references the data present in the `users` table.

## Accessing Tables:
We can restrict who can perform operations on the table by passing functions to the **access** attribute's *create*, *read*, *update* and *delete* properties.

`canCreate`, `canRead`, `canUpdate`, `canDelete` and `isAdmin` are all functions that I had defined to configure access on the tables defined. These can be found in the `/src/access` directory. 

## Further Research and Testing
While creating tables and controlling access like this seems intuitive and easy now further testing is required to check how well the access actually works i.e security and test it by simulating real world scenarios and observing how well it works in those.

### Running this Project:
To run this project locally create and configure a `.env` containing the following:  1**DATABASE_URI** to be the connection string to your database postgres or mongo db database. The **PAYLOAD_SECRET**, a 256-bit string which is required as it is used to encrypt the API keys. 
Clone this Repository and run the following:
```bash
yarn install
yarn dev
```