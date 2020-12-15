const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const Person = new GraphQLObjectType({
  // 这里定义查询结果包含name,age,sex三个字段，并且都是不同的类型。
  name: "person",
  fields: {
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    sex: {
      type: GraphQLString,
    },
  },
});

const Course = new GraphQLObjectType({
  name: "courses",
  description: "课程实体",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
      },
      course: {
        type: GraphQLString,
      },
      score: {
        type: GraphQLInt,
      },
      userId: {
        type: GraphQLInt,
      },
    };
  },
});

module.exports = { Person, Course };
