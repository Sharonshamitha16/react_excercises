const fileUploaded =require("../models/file.model");
const fs = require("fs");

const createfile = async ( req,res)=>{
    try {
        let file = req.file
        let userId = req.userId
        let data ={
            ...file,
            userId,
        }
        let save = await fileUploaded.create(data);
        res.json({
            save,
            message:"file Uploaded completed"
    })
    } catch (error) {
        res.json(error.message)
    }
}

const getfile =async(req,res)=>{
    try {
        let userId = req.userId
        let getdata = await fileUploaded.find({userId})
        if(!getdata || getdata.length===0)
        {
            return res.status(404).json({message:"Data Not Found"})
        }
        res.json(getdata);
    } catch (error) {
        res.json(error.message);
    }
};

const getfileId = async(req,res)=>{
    try {
        let {_id}= req.query
        let getdataid = await fileUploaded.findById(_id)
        if(!getdataid ){
                return res.status(404).json({message:"Object Id Not Found"})
        } 
        res.json(getdataid);
    } catch (error) {
        res.json(error.message)
    }
}

const editFile = async (req,res) =>{
    try {
        let {_id} = req.query;
        let newFile = req.file;
        let findOldFile = await fileUploaded.findById(_id);
        if(!findOldFile){
            return res.status(404).json({message:"data not found"});
        }
        fs.unlinkSync(`${findOldFile.destination}${findOldFile.filename}`)
        let update = await fileUploaded.findByIdAndUpdate(_id,newFile,{new:true});
        res.json(update);
    } catch (error) {
        res.json(error.messgae)
    }
}

const deleteFile = async(req,res) =>{
    try {
        let {_id} = req.query;
        let deleteFile = await fileUploaded.findById(_id);
        if(!deleteFile){
            return res.status(404).json({message:"data not found"});
        } 
        fs.unlinkSync(`${deleteFile.destination}${deleteFile.filename}`);
        await deleteFile.deleteOne();
        res.json({message:"File deleted"})
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    createfile,
    getfile,
    getfileId,
    editFile,
    deleteFile
};