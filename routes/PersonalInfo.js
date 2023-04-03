const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Personalinfo = require('../models/personalinfoModel')

//get all data entries
router.get("/",async (req,res)=>{
    try{
        const data = await Personalinfo.find({})
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//get single data entry
router.get("/:id",async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No entry found"})
    }

    const data = await Personalinfo.findById(id)
    
    if(!data){
        return res.status(404).json({error: "No entry found"})
    }
    res.status(200).json(data)
})

//create new entry
router.post("/",async (req,res)=>{
    const { fname, mname, lname, gender, contact, date, hobbies, address } = req.body
    try{
        const data = await Personalinfo.create({fname, mname, lname, gender, contact, date, hobbies, address})
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})


//delete an entry
router.delete("/:id",async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No entry found"})
    }

    const data = await Personalinfo.findByIdAndDelete(id)
    
    if(!data){
        return res.status(404).json({error: "No entry found"})
    }
    res.status(200).json(data)
})


//update an entry
router.patch("/:id",async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No entry found"})
    }

    const data = await Personalinfo.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!data){
        return res.status(404).json({error: "No entry found"})
    }
    res.status(200).json(data)
})


module.exports = router