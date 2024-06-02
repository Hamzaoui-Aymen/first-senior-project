const { Sequelize, DataTypes } = require("sequelize");
const User =require('./models/UserModel')
const Product =require('./models/product')
const connection = new Sequelize('ecommercesenior',"root", "Aymen@2003",{
  host: "localhost",
  dialect: "mysql",
});

const product=Product(connection)
const user = User(connection)
const prod = Product(connection)
const db = {
  user,
  product
};

async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();

// const initApp = async () => {
//   console.log("Testing the database connection..");

//   try {
//       await connection.sync({alter:true})
//       console.log("database create");

 
 
//   } catch (error) {
//       console.log( error);
//   }
// };

// initApp()
module.exports= db