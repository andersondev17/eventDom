//cashed pattern:  es una forma de ahorrar recursos en tiempo de ejecucion en el servidor
// puede reusar la misma conexion para diferentes peticiones si esta abierta o solo tratar de crear una nueva

import mongoose from 'mongoose';
const  MONGODB_URI = process.env.MONGODB_URI;


//inicializo una variable patron de diseno cached
// recuperamos una propiedad global de mongoose obteniendo un objeto que provee un espacio para almacenar variables globales
let cached = (global as any). mongoose || {conn: null, promise: null}; //si no hay cached entonces lo inicializo copmo vacio 
//hold a cash conn
export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn; // chequeo si una conexion existe, la devuelvo  
    if(!MONGODB_URI) throw new Error("MOGODB_URI is missing.Please define the MONGODB_URI environment variable inside .env.local");


    //si tenemos ya la conexion 
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{//conecto a la base de datos

        dbName: "eventdom",//nombre de la base de datos
        bufferCommands: false,//para que no se bloquee el servidor
    })
    cached.conn = await cached.promise;
    return cached.conn
}
