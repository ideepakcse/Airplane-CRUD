const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

/*
POST REQ:
req body -> {
    modelNumber=air123,
    capacity=80
}
*/
async function createAirplane (req ,res) {
    
    try{
           const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity: req.body.capacity
        });
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'sucessfully created an airplane',
            data: airplane,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while creating airplane',
            data:{},
            error:error
        });
    }
}

async function getAirplane (req ,res) {
    try{
          
        const airplane = await AirplaneService.getAirplane(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully fetched an airplane',
            data: airplane,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while fetching an airplane',
            data:{},
            error:error
        });
    }
}

async function getAllAirplane (req ,res) {
    try{
          
        const airplane = await AirplaneService.getAllAirplane();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully fetched all airplanes',
            data: airplane,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while fetching all airplanes',
            data:{},
            error:error
        });
    }
}

async function destroyAirplane (req ,res) {
    try{
        
        const response = await AirplaneService.destroyAirplane(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'sucessfully destroyed an airplane',
            data: response,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while destroying airplane',
            data:{},
            error:error
        });
    }
}

async function updateAirplane (req ,res) {
    try{
       
        const response = await AirplaneService.updateAirplane(req.body,req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'sucessfully updated an airplane',
            data: response,
            error:{}
        });
    } 
    catch (error) {
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'something went wrong while updating airplane',
            data:{},
            error:error
        });
    }
}

module.exports={
    createAirplane,
    getAirplane,
    getAllAirplane,
    destroyAirplane,
    updateAirplane
}