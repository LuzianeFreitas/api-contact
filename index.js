const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./src/graphql')
const UserRegisterService = require('./src/services/UserRegisterService')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ 
    schema,
    context: () => ({
        userRegisterService: UserRegisterService
    }),
})

server.listen().then(({ url }) => console.log(url))