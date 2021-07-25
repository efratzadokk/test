
import local from './local';
import server from './server'

const keys = JSON.stringify(process.env.NODE_ENV) === '"development"' ? local : server;
export const googleFontApiKey = "AIzaSyBG4FbB6eBy-U665nLOA_153D0YE-gSV9k";

export const API_File = 'https://files.codes'

export default keys;