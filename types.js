const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require("graphql");

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
      id: { type: GraphQLID },
      course: { type: GraphQLString },
      score: { type: GraphQLInt },
      userId: { type: GraphQLInt },
    };
  },
});

const OptResult = new GraphQLObjectType({
  name: "optResult",
  description: "操作结果",
  fields: () => {
    return {
      status: { type: GraphQLString },
      message: { type: GraphQLString },
    };
  },
});

module.exports = { Person, Course, OptResult };
