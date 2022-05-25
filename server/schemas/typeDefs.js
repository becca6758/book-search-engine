const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]!
}
type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User!
}
input BookData {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
}
type Query {
    me: User 
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
        username: String!
        email: String!
        password: String!
    ): Auth
    saveBook(input: BookData!): User
    removeBook(bookId: ID!): User
}
`

// export the typeDefs
module.exports = typeDefs;