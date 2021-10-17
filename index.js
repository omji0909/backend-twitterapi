const express =require("express");
const router  =express.Router();
const cors =require("cors");
const { TwitterClient } = require("twitter-api-client");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();


// const { getfollowers } = require("../twitterfollowers/src/apihelper/apicall");
const  followers  = require("./controllers/twitterapicall");

const app =express();

app.use(cors())


const port = 8000;
app.use(express.json());


  const twitterClient = new TwitterClient({
    apiKey:process.env.apiKey,
    apiSecret:process.env.apiSecret,
    accessToken:process.env.accessToken,
    accessTokenSecret:process.env.accessTokenSecret
  });
  
 
  async function get_followers(req,res) {
    
    const followers = await twitterClient.accountsAndUsers.followersList({
      screen_name:req.body.userName
    }).catch(err=>{
      console.log(err);
    });
    
    // console.log(followers);
    return res.status(200).json(followers)
  }
  







app.post("/f",(req,res)=>{
 
    get_followers(req,res);

   
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})