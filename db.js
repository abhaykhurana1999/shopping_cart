const Sequelize =require('sequelize')

const db= new Sequelize('shoppingdb','shopper','shoppass',{

    host:'localhost',
    dialect:'mysql',
    pool:{
             min:0,
             max:5,
    }

    
})

  const User= db.define('users',{

       id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
       },

       name:{
               type:Sequelize.STRING,
               allowNull:false
       },


 })

 const Product=db.define('products',{

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
   },

   name:{
           type:Sequelize.STRING,
           allowNull:false
   },

   mannufacturer: Sequelize.STRING,

   price:{
       type:Sequelize.FLOAT,
       allowNull:false,
       defaultValue:0.0
   }

 })

 db.sync().then(()=> console.log("Database Sycned")).catch((err)=> console.log("Error Creating Database"))

exports = module.exports = {

    User,Product
}
