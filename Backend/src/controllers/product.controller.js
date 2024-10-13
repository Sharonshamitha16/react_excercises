const product = require("../models/product.model");

const createProduct = async (req,res)=>{
    try {
        // let userId=req.userId
        let data={
            ...req.body,
            // userId
        }
        const saveProduct = await product.create(data);
        res.json({saveProduct, message:"product created successfully"})
    } catch (error) {
        res.json(error.message)
    }
}


const getProduct = async(req,res)=>{
    try {
        // let userId = req.userId
        // const getData= await product.find({userId})
        const getData= await product.find()
        // if(!getData || getData.length===0){
        //     return res.status(404).json({message:"No Data Found"})
        // }
        res.json(getData)

    } catch (error) {
        res.json(error.message)
    }
}

const getOneproduct = async (req,res)=>{
    try {
        let {productId}=req.params

        const getData = await product.findOne({productId})
        if(!getData){
            return res.status(404).json({message:" Product Id Not Found"})
        }
        res.json(getData)
    } catch (error) { 
        res.json(error.message)
    }
}


const getFindbyid = async (req,res)=>{
    try {
        let {_id}=req.params

        const getId = await product.findById(_id)
        if(!getId){
            return res.status(404).json({message:"Not Found Id"})
        }
        res.json(getId)
    } catch (error) {
        res.json(error.message)
    }
}

const updateId = async(req,res)=>{
    try {
        let {_id}=req.query
        const updatedId =await product.findByIdAndUpdate(_id,req.body,{new:true})
        if(!updatedId){
            return res.status(404).json({message:"Id Not Found"})
        }
        res.json({updatedId, message:"Product Updated Sucessfully"})
    } catch (error) {
        res.json(error.message)
    }
}


const updatebyOne = async(req,res)=>{

    try {
         let {_id}=req.query
         const updateByone =await product.updateOne({_id},req.body)
         if(!updateByone){
            return res.status(404).json({message:"Id's Not Found"})
         }
         let data = await product.findById(_id)

         res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}
  
const updatemany =async(req,res)=>{
    try {
        let userId =req.userId
        let updateAll = await product.updateMany({userId},req.body)
        if(!updateAll){
            return res.status(404).json({message:"userId's Not Found"})
        }
        let data =await product.find({userId})
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

const deletId = async(req,res)=>{
    try {
        let {_id} =req.query
        let deletbyId = await product.findByIdAndDelete(_id)
        if(!deletbyId){
            return res.status(404).json({message:"Id Not Found"})
        }
        res.json({deletbyId ,message:"product Deleted successfully"})
    } catch (error) {
        res.json(error.message)
    }
}

const deletebyOne =async(req,res)=>{
    try {
        let {_id} =req.query
        let data = await product.findById(_id)
        if(!data){
            return res.status(404).json({message:"Data Not Found"})
        }
        await product.deleteOne({_id})
        res.json(data)

    } catch (error) {
        res.json(error.message)
    }
}

 const Deletemany = async (req,res)=>{
    try {
        let userId =req.userId
        let data= await product.find({userId})
        if(data.length===0){
            return res.status(404).json({message:"Data Not Found"})
        }
        
        await product.deleteMany({userId})
        res.json(data)

    } catch (error) {
        res.json(error.message)
    }
 }



module.exports = {
    createProduct,
    getProduct,
    getOneproduct,
    getFindbyid,
    updateId,
    updatebyOne,
    updatemany,
    deletId,
    deletebyOne,
    Deletemany
}