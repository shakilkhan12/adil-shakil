const { GraphQLError } = require("graphql");
const bcrypt = require("bcrypt");
const { validateAllFields } = require("../../utils/validations");
const AuthorModel = require("../../models/author.model");

const authorResolver = {
  Mutation: {
    register: async (_, { inputArgs }) => {
      try {
        const response = validateAllFields(inputArgs);
        if (response.success) {
          const { name, email, password } = inputArgs;

          const emailExist = await AuthorModel.findOne({ email });
          if (!emailExist) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await AuthorModel.create({ name, email, password: hashedPassword });
            return {
              success: true,
              message: "Your accout has been created successfully",
            };
          } else {
            throw new GraphQLError("Email is already taken", {
              extensions: {
                code: "BAD_REQUEST",
                http: { status: 400 },
              },
            });
          }
        } else {
          throw new GraphQLError(JSON.stringify(response.errors), {
            extensions: {
              code: "BAD_USER_INPUT",
              http: { status: 400 },
            },
          });
        }
      } catch (error) {
        console.log("error ==> ", error.extensions);
        throw new GraphQLError(error.message, {
          extensions: { ...error.extensions },
        });
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
