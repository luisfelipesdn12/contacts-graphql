# `contacts-graphql`
📕 An API to manage contacts using GraphQL and Typescript

## 📖 About
That's my very first project with both TypeScript and GraphQL. It's a simple API where is possible to manage contacts by reading, adding, modifying and deleting them, with GraphQL operations.

## 🚀 Running
You can see the working of this project with a deployed version [here](https://luis-contacts-graphql.herokuapp.com/). But to run it locally, follow the steps:

```sh
# Clone this repository and go to the project root
git clone https://github.com/luisfelipesdn12/contacts-graphql.git
cd contacts-graphql

# Install the dependences
npm install
# or: yarn

# Build and start the project
npm run build
# or: yarn build
npm run start
# or: yarn start
``` 

It should result in a log in the terminal saying which port you should access. For default, it may be http://localhost:6060/

## 💻 Technologies
Used TypeScript & NodeJS with the following dependencies:

- [**apollo-server**](https://github.com/apollographql/apollo-server) - To handle the GraphQL requests.
- [**lowdb**](https://github.com/typicode/lowdb) - Small local JSON database to store the contacts.
- [**type-graphql**](https://typegraphql.com/) - Used to generate GraphQL schema and resolvers.
- [**uuid**](https://github.com/uuidjs/uuid) - Generates IDs for contacts.

## 👀 Example
### Creating a contact
```graphql
mutation {
  createContact(
    data: {
      name: "Luis Felipe Santos do Nascimento"
      phone: "+55 11 90000-0000"
      email: "luisfelipesdn12@gmail.com"
      website: "https://luisfelipesdn12.now.sh"
      notes: "It's me :)"
    }
  ) {
    id
  }
}
```

#### Return
```graphql
{
  "data": {
    "createContact": {
      "id": "ab2d6337-afa6-414d-be2b-ccca51c08a43"
    }
  }
}
```

### Getting all contacts
```graphql
query {
  contacts {
    ...contactFields
  }
}
```

#### Return
```graphql
{
  "data": {
    "contacts": [
      {
        "id": "ab2d6337-afa6-414d-be2b-ccca51c08a43",
        "name": "Luis Felipe Santos do Nascimento",
        "phone": "+55 11 90000-0000",
        "email": "luisfelipesdn12@gmail.com",
        "website": "https://luisfelipesdn12.now.sh",
        "notes": "It's me :)"
      }
    ]
  }
}
```
