const { ApolloError } = require("@apollo/server");
const { GraphQLError } = require("graphql");
// Define reusable validation functions
const validateNotEmpty = (value) => {
  return value !== "" && value !== null && value !== undefined;
};

// Define a function to validate all fields
const validateAllFields = (fields) => {
  const errors = [];
  for (const key in fields) {
    if (!validateNotEmpty(fields[key])) {
      //   throw new Error(`${key} cannot be empty, null, or undefined`);
      errors.push({
        code: 400,
        success: false,
        message: `${key} cannot be empty, null, or undefined`,
      });
    }
  }
  if (errors.length > 0) {
    return { success: false, errors };
  } else {
    return { success: true, errors: [] };
  }
};
module.exports = { validateAllFields };
