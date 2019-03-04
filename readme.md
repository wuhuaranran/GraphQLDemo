# GraphQL 实践
## 启动express服务
node server

## 浏览器查看
- http://localhost:8000
- http://localhost:8000/graphql
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
- http://localhost:8000/index