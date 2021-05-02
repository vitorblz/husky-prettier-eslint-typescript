import dotenv from 'dotenv';
import ServerConfig from './config/ServerConfig';
import app from './server';

dotenv.config();

app.listen(ServerConfig.PORT, () => console.log(`Servidor rodando na porta ${ServerConfig.PORT}`));

console.log('teste');
