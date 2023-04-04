const User_Model = require("../models/user_model");


const User_Resolvers = {
  Query: {
    helloUser: () => "Hello world! from Safa - Aru - User model",

    getUsers: async () => {
      const users = await User_Model.find();
      return users;
    },
    getUserById: async (_, { id }) => {
      const user = await User_Model.findById(id);
      return user;
    },
    loginUser: async (_, { input }) => {
      const user = await User_Model(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    logoutUser: async (_, { input }) => {
      const user = await User_Model(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }
  },
  Mutation: {
    registerUser: async (_, { input }) => {
      const newUser = new User_Model(input);
      await newUser.save();
      console.log(newUser + "\nUser created successfully");
      return newUser;
    },
  },
};

module.exports = User_Resolvers;

