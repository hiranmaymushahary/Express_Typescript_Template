// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type serverConfig = {
    PORT :number
}

export function loadEnv() {
    dotenv.config();
  
}

export const serverConfig:serverConfig = {
    PORT : Number(process.env.PORT) || 3001
};

