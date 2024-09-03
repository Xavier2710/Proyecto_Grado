import Usuarios from "../models/usuarios.js";
import bcrypt from 'bcrypt';

export const CrearUsuarios = async (req, res)=> {
        /* try {
          const { clave } = req.body;
      
          
          const saltRounds = 10; 
          const hashedPassword = await bcrypt.hash(clave, saltRounds);
      
          
          const registro = await Usuarios.create({
            ...req.body,
            clave: hashedPassword,
          });
      
          res.status(201).json({ message: 'Usuario creado con éxito', registro });
        } catch (error) {
          console.error('Error al crear un usuario:', error);
          res.status(500).json({ message: 'Error al crear usuario' });
        } */
        
        try {
            await Usuarios.create(req.body)
            res.json({
                "menssage":"Registro creado"
            })
        } catch (error) {
            res.json({message:error.message})
        }


      };

      export const getUsuarios= async (req,res)=>{
  
        try{
            const usuario = await Usuarios.findAll();
            res.json(usuario)
    
        }catch(error){
            res.json({message:error.message})
    
        }
    }
