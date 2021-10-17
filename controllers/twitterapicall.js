


exports.followers =(req,res)=>{

    

const  getfollowers =(userName,req,res)=>{
    // console.log(process.env.AUTH)
     fetch(`https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=${userName}&skip_status=true&include_user_entities=false`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer AAAAAAAAAAAAAAAAAAAAALCWUgEAAAAAVNBi82DplXSJ6zEWgw7KThw%2B1Os%3DOGVPcWkK6HihsAhygxhDVd6z33HS2XxgMhtjEFA4ZabnTUgO6z`
        }
    }).then(data =>{
        console.log(data);
        res.json(data);
        // return data.json()
    }).catch(err => {
        res.status(400).json({
            error:"Not able to get followers from Twitter"
        })
        console.log(err)})
}

getfollowers(omjikush09,req,res);

}

