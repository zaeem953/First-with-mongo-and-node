const dbConnect=require("./mongodb");


const updatedata= async ()=>{
    const db=await dbConnect();
    const result= await db.updateOne(
        {name:"Iphone"},
            {$set:{name:"Iphone 15 pr0",price: 1800}}
    ) 
    console.log(result) 
}

updatedata()