import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Usuarios= db.define('usuarios', {
    idusuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    usuario:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    clave:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rol:{
        type: DataTypes.ENUM('Administrador', 'Usuario'),
        allowNull: false,
        defaultValue: 'Usuario',
    }
},

{
    tableName: 'usuarios',
    timestamps: false
});

export default Usuarios;