const authorSchema = `#graphql
type Author {
    name: String!
    email: String!
    password: String!
    picture: String
    books: [Book!]!
}
type Book {
    title: String!
    author: Author!
    numberOfPages: Int!
    publishedDate: String!
}
input CreateUserArgs {
   name: String!
   email: String!
   password: String!
 }
type Response {
  code: Int!
  success: Boolean!
  message: String!
}
type Mutation {
   register(inputArgs: CreateUserArgs): [Response!]!
}
type Query {
getBooks:[Book]
}

`;
module.exports = authorSchema;
