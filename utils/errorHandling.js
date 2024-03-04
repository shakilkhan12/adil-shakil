const { ApolloServerErrorCode } = require("@apollo/server/errors");
const { GraphQLError } = require("graphql");
const ErrorTypes = {
  BAD_USER_INPUT: {
    errorCode: ApolloServerErrorCode.BAD_USER_INPUT,
    errorStatus: 400,
  },
  NOT_FOUND: {
    errorCode: "NOT_FOUND",
    errorStatus: 404,
  },
};
const CustomErrors = (errorMesssage, errorType) => {
  throw new GraphQLError(errorMesssage, {
    extensions: {
      code: errorType.errorCode,
      http: {
        status: errorType.errorStatus,
      },
    },
  });
};
