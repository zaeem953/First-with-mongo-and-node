const dbConnect=require("./mongodb");


const insert= async ()=>{
    const db=await dbConnect();
    const result = await db.insertMany([
        {
        "name": "vivo v17",
        "brand": "vivo",
        "price": 350,
        "category": "mobile"
        },
        {
            "name": "vivo v20",
            "brand": "vivo",
            "price": 3500,
            "category": "mobile"
        }
    ]);

    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert()