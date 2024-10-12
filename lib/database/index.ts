const  MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any). mongoose || {conn: null, promise: null}; //si no hay cached entonces lo inicializo copmo vacio 

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn; //si una conexion existe , la devuelvo  

}