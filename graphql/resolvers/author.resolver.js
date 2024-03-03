const { validateAllFields } = require("../../utils/validations");

const authorResolver = {
  Mutation: {
    register: (_, { inputArgs }) => {
      const response = validateAllFields(inputArgs);
      console.log(response);
      if (response.success) {
        return [{ code: 200, success: true, message: "created" }];
      } else {
        return response.errors;
      }
    },
  },
  Query: {
    getBooks: () => {
      return [];
    },
  },
};
module.exports = authorResolver;
