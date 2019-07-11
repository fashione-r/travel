const mysql=require("mysql");
var pool=mysql.createPool({
  //连接数据库服务器的主机
  host:"127.0.0.1",
  //数据库端口号
  port:"3306",
  //使用数据库用户名
  user:"root",
  //使用数据的密码
  password:'',
  //数据库的名称
  database:"travelV",
  //最大连接限制
  connectionLimit:15
});
//导出连接池模块
module.exports=pool;