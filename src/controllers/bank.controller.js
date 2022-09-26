const Account = require ("../models/bank.model");

const getAll = async (req,res) => {
    try {
        const account =await Account.find();
        res.status(200).json(account);
        
    } catch (err) {
        res.status(500).json(err);
        
    }
 
}

const create = async (req,res) => {
    try {
        const account  = await new Account(req.body).save();
        res.status(200).json(account);
       
    } catch (err) {
        res.status(500).json(err);
    }
 
}

const update = async (req,res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(account);
        
    } catch (err) {
        res.status(500).json(err);
        
    }


}
const remove = async (req,res) => {
    try {
        const account =await Account.findByIdAndDelete(req.params.id);
        res.status(200).json(account);
        
    } catch (err) {
        res.status(500).json(err);        
    }

}

const search = async (req, res) => {
    try {
        const account =await Account.find(req.body)
        res.status(200).json(account);
        
    } catch (err) {
        res.status(500).json(err);        
    }
} 

const getById = async (req,res) => {
    try {
        const account = await Account.findById(req.params.id);
        res.status(200).json(account);
    } catch (err) {
        res.status(500).json(err);
        
    }
}
module.exports = {
    getAll,
    create,
    update,
    remove,
    search,
    getById
}