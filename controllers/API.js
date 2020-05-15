const Mobile= require('../models/mobile');

//get All
exports.getAll = async (request, response) => {
    try {
        let mobile = await Mobile.find({});
        response.send(mobile);
    } catch (error) {
        console.log(error);
    }
};

exports.getMobile= async (request, response) => {
    try {
        let mobile = await Mobile.findById(request.params.id);
        response.send(mobile);
    } catch (error) {
        console.log(err);
    }
};

//edit
exports.editMobile = async (request, response) => {
    try {
        let mobile = await Mobile.findById(request.params.id);
        mobile.set(request.body);
        let result = await mobile.save();
        response.send(result);
    } catch (error) {
        console.log(err);
    }
};

//xóa 
exports.deleteMobile = async (request, response) => {
    try {
        let result = await Mobile.deleteOne({ _id: request.params.id });
        response.send(result);
    } catch (error) {
        console.log(err);
    }
};
