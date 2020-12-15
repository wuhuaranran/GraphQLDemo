// GraphQL 服务端
const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require("graphql");

const { getCourses } = require("./mysql");
const { Person, Course } = require("./types");

const queryObj = new GraphQLObjectType({
  name: "myFirstQuery",
  description: "a hello world demo",
  fields: {
    hello: {
      name: "a hello world query",
      description: "a hello world demo",
      type: GraphQLString,
      args: {
        name: {
          // 这里定义参数，包括参数类型和默认值
          type: GraphQLString,
          defaultValue: "Brian",
        },
      },
      resolve(parentValue, args, request) {
        // 这里演示如何获取参数，以及处理
        return "hello " + args.name + "!";
      },
    },
    person: {
      name: "personQuery",
      description: "query a person",
      type: Person,
      args: {
        name: {
          type: GraphQLString,
          defaultValue: "Charming",
        },
      },
      resolve(parentValue, args, request) {
        return {
          name: args.name,
          age: args.name.length,
          sex: Math.random() > 0.5 ? "male" : "female",
        };
      },
    },
    courses: {
      name: "courses list",
      description: "query courses list",
      type: new GraphQLList(Course),
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      async resolve(parentValue, args, request) {
        return await getCourses(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: queryObj,
});
