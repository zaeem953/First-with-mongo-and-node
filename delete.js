const dbConnect=require("./mongodb");


const deletedata= async ()=>{
    const db=await dbConnect();
    const result= await db.deleteOne({name:"m 40"})
    console.log(result)
}

deletedata()