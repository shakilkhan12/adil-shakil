const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const authorSchema = require("./graphql/schemas/user.schema");
const authorResolver = require("./graphql/resolvers/author.resolver");

async function startApolloServer() {
  const typeDefs = mergeTypeDefs([authorSchema]);
  const resolvers = mergeResolvers([authorResolver]);
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
startApolloServer();