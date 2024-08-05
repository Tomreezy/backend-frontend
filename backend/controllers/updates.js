/*const Update =require("../schema/schemaUpdate")


const getAllUpdates = async(req,res)=>{
    try{
        const allData = await Update.find()

        res.status(200).json({data:allData,numHits:allData.length})
    }catch(err){

        res.status(500).json({message:err})
    }
}


const createUpdate = async(req,res)=>{
    try{

        const updated = await Update.create(req.body)

        res.status(201).json({updated})
    }catch(err){
        res.status(500).json({message:err}) 
    }
}


const getOneUpdate = async(req,res)=>{
    try{
        const oneUp = await Update.findById(req.params.id);
        res.status(200).json({oneUp})
    }catch(err){
        res.status(500).json({message:err})
    }
}


const deleteOneUpdate = async(req,res)=>{
    try{
        const oneDelete = await  Update.findByIdAndDelete(req.params.id);
        if (!oneDelete) {
            return res.status(404).json({ message: 'Update not found' });
        }
        res.status(200).json({oneDelete})
    }catch(err){
        res.status(500).json({message:err})
    }
}


const patchOneUpdate = async(req,res)=>{
    try{
        const oneUpdate = await Update.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        res.status(200).json({oneUpdate})
    }catch(err){
        res.status(500).json({message:err})
    }
}

module.exports={
    getAllUpdates,
    getOneUpdate,
    createUpdate,
    deleteOneUpdate,
    patchOneUpdate
}
    */


const Update = require("../schema/schemaUpdate");

const getAllUpdates = async (req, res) => {
    try {
        const allData = await Update.find();
        res.status(200).json({ data: allData, numHits: allData.length });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUpdate = async (req, res) => {
    try {
        const updated = await Update.create(req.body);
        res.status(201).json({ updated });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getOneUpdate = async (req, res) => {
    try {
        const oneUp = await Update.findById(req.params.id);
        if (!oneUp) {
            return res.status(404).json({ message: 'Update not found' });
        }
        res.status(200).json({ oneUp });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteOneUpdate = async (req, res) => {
    try {
        const oneDelete = await Update.findByIdAndDelete(req.params.id);
        if (!oneDelete) {
            return res.status(404).json({ message: 'Update not found' });
        }
        res.status(200).json({ oneDelete });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const patchOneUpdate = async (req, res) => {
    try {
        const oneUpdate = await Update.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!oneUpdate) {
            return res.status(404).json({ message: 'Update not found' });
        }
        res.status(200).json({ oneUpdate });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllUpdates,
    getOneUpdate,
    createUpdate,
    deleteOneUpdate,
    patchOneUpdate
};
