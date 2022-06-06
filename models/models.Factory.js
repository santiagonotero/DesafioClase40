const userMethod = require('./users')
const prodMethod = require('./productos')
const msgMethod = require('./mensajes')

module.exports = class DataModel{

    static getModel(modelName){
        switch(modelName){
            case 'productos':
                return prodMethod
            case 'mensajes':
                return msgMethod
            case 'usuarios':
                return userMethod
            default :
                throw new Error('Modelo inexistente')
        }
    }
}
