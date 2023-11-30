//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');

const { getMotorcycleSchema, createMotorcycleSchema, updateMotorcycleSchema } = require('../schemas/motorcycles.schema');

//Importar el controlador de motorcycles
const service = require('../services/motorcycles.service');


//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const motorcycle = await service.index()
    res.json(motorcycle);
});

router.get('/:id',
validatorHandler(getMotorcycleSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const motorcycle = await service.show(id)
        res.json(motorcycle)
    }
);

router.post('/', 
validatorHandler(createMotorcycleSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const motorcycle = await service.store(body)
        res.status(201).json(motorcycle)
    }
);

router.put('/:id', 
validatorHandler(getMotorcycleSchema, 'params'),
validatorHandler(updateMotorcycleSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const motorcycle = await service.update(id, body)
        res.json(motorcycle)
    }
);

router.delete('/:id', 
validatorHandler(getMotorcycleSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const motorcycle = await service.destroy(id)
        res.json(motorcycle)
    }
);

//Exportar el enrutador
module.exports = router;