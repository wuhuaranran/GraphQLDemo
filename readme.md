# GraphQL 实践

## 启动 express 服务

node server

## 浏览器查看

- http://localhost:3000
- http://localhost:3000/graphql

### 访问 GraphiQL

```
{
  hello(name: "zx")
  person(name: "zx"){
    name,
    sex,
    age
  }
}
```

### 查询数据库数据

```
{
  person {
    name
  }
  courses(id:2) {
    id
    score
    course
    userId
  }
}
```

### 访问静态页面

- http://localhost:8000/index
