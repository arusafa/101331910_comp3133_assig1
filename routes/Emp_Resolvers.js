const Emp_Model = require("../models/Emp_Model");

const Emp_Resolvers = {
  Query: {
    helloEmployee: () => "Hello world! from Safa - Aru - Employee model",

    getEmployees: async () => {
      const employees = await Emp_Model.find();
      return employees;
    },
    getEmployeeById: async (_, { id }) => {
        const emp = await Emp_Model.findById(id);
        return emp;
    },
},

  Mutation: {
    createEmployee: async (_, { input }) => {
      const newEmployee = new Emp_Model(input);
      await newEmployee.save();
      console.log(newEmployee + " \nEmployee created successfully");
      return newEmployee;
    },
    updateEmployee: async (_, { id, input }) => {
        const employee = await Emp_Model.findByIdAndUpdate(id, input, {
            new: true,
        });
        console.log(employee + " \nEmployee updated successfully");
        return employee;
        },
    deleteEmployee: async (_, { id }) => {
        const employee = await Emp_Model.findByIdAndDelete(id);
        console.log(employee + " \nEmployee deleted successfully");
        return employee;
        }
  },
};

module.exports = Emp_Resolvers;
