const express=require("express");
const bodyParser=require("body-parser");
//引入跨域请求模块
const cors= require("cors");
const userRouter=require("./routes/user.js");
const indexRouter=require("./routes/index.js");
const destinationRouter=require("./routes/destination.js");
const forumRouter=require("./routes/forum.js");
const helperRouter=require("./routes/helper.js")
const productRouter=require("./routes/products.js")
//创建web 服务器
var server=express();
// 监听端口为8085
server.listen(8085);
// 引入session模块
const session=require("express-session")
//配置session 模块
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));

// 静态托管文件
server.use(express.static("public"));
//第三方中间件，需在路由器前些中间件，且中间件是写在服务器中的 
server.use(bodyParser.urlencoded({
  extended:false
}));
//统一伪装跨域，之后就不需要使用res.writeHead
// 需要中app.js中引入cors第三方模块
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
})); 

// 将用户路由挂载到user下
server.use("/user",userRouter);
// 将首页的路由挂载到index中
server.use("/index",indexRouter);
server.use("/destination",destinationRouter);
server.use("/forum",forumRouter);
server.use("/helper",helperRouter);
server.use("/products",productRouter);
