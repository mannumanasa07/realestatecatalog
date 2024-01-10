const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors");               
const app = express();
const propertyModel = require("./property");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const MongoDbConnection = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/user")
      .then((res) => {
        console.log(res.connection.name, res.connection.host, "db connected");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  MongoDbConnection();

  const Schema=mongoose.Schema;

  const userSchema=new Schema({
    _id: { type: Number, unique: true},
    email:{type:String,unique: true},
    password:{type:String}
},);

const userModel=mongoose.model("signup",userSchema);

app.post('/signup', async (req, res) => {
  console.log("inside post");
  console.log(req.body.email);
  console.log(req.body.password);

  try {
    
    const highestIdUser = await userModel.findOne({},{_id: 1},{ sort:{_id:-1}});

    console.log(highestIdUser);

    
    const newUserId=highestIdUser?highestIdUser._id + 1 : 1000;

console.log(newUserId);
    const signupUser = {
      _id: newUserId,
      email: req.body.email,
      password: req.body.password
    };

    const signup = await userModel.create(signupUser);

    res.json({
      status: "success",
      userId: newUserId  
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e.message
    });
  }
});
  app.post('/signin', async(req, res) => {

      console.log("inside signin")
      console.log(req.body.userId)
      console.log(req.body.password)
    
        try{
        const signin=await userModel.findOne({_id:parseInt(req.body.userId), password: req.body.password });

        console.log(signin)

        if(signin && signin._id===parseInt(req.body.userId) && signin.password===req.body.password){
          res.json({
            status:"signin success",
            flag:"true",
            email:signin.email
        })
        }
        else{
          res.json({message:"Please enter the correct userID or Password",flag:"false" });
        }


    }
    catch(e){
            res.status(400).json({
                status:"error",
                flag:"false",
                message:e.message
            })
        }
    
      });


      app.post("/createProperty", async (req, res) => {

        try {

          const userId = req.body.userId;
          console.log(userId);

          const highestIdProperty = await propertyModel.findOne({ userId: userId}, {_id: 1}, { sort: {_id: -1}});
    const newPropertyId = highestIdProperty ? highestIdProperty._id + 1 : 30000;
     
    console.log(highestIdProperty);
    console.log(newPropertyId);

    const propertyData = {
      _id: newPropertyId,
      userId: userId,
      propertyType: req.body.propertyType,
      price: req.body.price,
      propertyAge: req.body.propertyAge,
      propertyDescription: req.body.propertyDescription,
      negotiable: req.body.negotiable,
      ownership: req.body.ownership,
      propertyApproved: req.body.propertyApproved,
      bankLoan: req.body.bankLoan,
    };
      
          const property = await propertyModel.create(propertyData);

          console.log(property);
      
          res.json({
            status: "success",
            propertyType:property.propertyType
          });
        } catch (e) {
          res.status(400).json({
            status: "error",
            message: e.message,
          });
        }
      });
      

app.listen(4000, () => console.log(`App listening on port 4000!`));
