const { AirplaneRepository }  =require('../repositories');


const airplaneRepository=new AirplaneRepository();
async function createAirplane(data)
{
    try{
        const airplane= await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

async function getAirplane(data)
{
    try{
        const airplane= await airplaneRepository.get(data);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

async function getAllAirplane()
{
    try{
        const airplane= await airplaneRepository.getAll();
        return airplane;
    }
    catch(error){
        throw error;
    }
}

async function destroyAirplane(data)
{
    try{
        const airplane= await airplaneRepository.destroy(data);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

async function updateAirplane(data,id)
{
    try{
        const airplane= await airplaneRepository.update(data,id);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    createAirplane,
    getAirplane,
    getAllAirplane,
    destroyAirplane,
    updateAirplane
}
