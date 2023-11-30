const {models} = require('../libs/sequelize')

//Funcion para listar todos los motorcycles
async function index() {
    const motorcycle = await models.motorcycle.findAll();
    return motorcycle;
}

//Funcion para crear un nuevo motorcycle
async function store(body) {
    const motorcycle = await models.motorcycle.create(body);
    return motorcycle;
}

//Funcion para mostrar un motorcycle
async function show(id) {
    const motorcycle = await models.motorcycle.findByPk(id);
    return motorcycle;
}

//Funcion para actualizar un motorcycle
async function update(id, body) {
    const [affectedRows, [updatedMotorcycle]] = await models.motorcycle.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedMotorcycle;
}

//Funcion para eliminar un motorcycle
async function destroy(id) {
    const motorcycle = await models.motorcycle.findByPk(id);
    const deletedMotorcycle = await models.motorcycle.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedMotorcycle){
        return motorcycle;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}