// GraphQL 服务端
const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const { getCourses, addCourses, deleteCourses } = require("./mysql");
const { Person, Course, OptResult } = require("./types");

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
          defaultValue: "GraphQL",
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
      args: { id: { type: GraphQLID } },
      async resolve(parentValue, args, request) {
        return await getCourses(args.id);
      },
    },
  },
});

const mutationObj = new GraphQLObjectType({
  name: "Mutation",
  description: "增删改数据",
  fields: () => ({
    createCourse: {
      type: OptResult,
      args: {
        course: { type: new GraphQLNonNull(GraphQLString) },
        score: { type: new GraphQLNonNull(GraphQLInt) },
        userId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async function (source, { course, score, userId }) {
        return await addCourses({ course, score, userId });
      },
    },

    removeCourse: {
      type: OptResult,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async function (source, { id }) {
        return await deleteCourses(id);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: queryObj,
  mutation: mutationObj,
});
