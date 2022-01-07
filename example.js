const mysql = require("mysql");
const Promise = require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "PROJECT1",
  };

  const record = {
    sender:"Rahul",
    receiver:"shakshii",
    msg : "brownie kaisa hai?"
  }

  const addRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,receiver,msg) values(?,?,?)`;
    await connection.queryAsync(sql, [record.sender, record.receiver, record.msg]);
    await connection.endAsync();
    console.log("message added...") 
  }

  const getRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("list of records..");
    console.log(list);
    return list;
  }

  getRecord()
  module.exports = {addRecord, getRecord};


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   async function selectMessage(ChatApp) {
//     const connection = mysql.createConnection(dbinfo);
  
//     await connection.connectAsync();
  
//     let sql = `SELECT * FROM ChatApp`;
//     // let sql = `SELECT * FROM user ORDER BY ID DESC`;
//     // let sql = `SELECT * FROM user WHERE ID=?`;
//     const list = await connection.queryAsync(sql, []);
  
//     await connection.endAsync();
//     console.log(list);
//     return list; 
//   };
  
// async function addMessage(ChatApp) {
//     const connection = mysql.createConnection(dbinfo);
//     await connection.connectAsync();
//     let sql = `insert into ChatApp (Message) values(?)`;
//     await connection.queryAsync(sql, [ChatApp.Message]);
//     await connection.endAsync();
// };

// async function connectionCheck(){
//    const connection=mysql.createConnection(dbinfo)
//    await connection.connectAsync();
 
//    console.log("Connection Succes!!");

//    await connection.endAsync();
// }
// connectionCheck();
// selectMessage();

// module.exports={
//     addMessage,
//     selectMessage
// };