import mongoose from "mongoose";

mongoose.connect("mongodb+srv://hugo:0606@apibiblioteca.tjolbm6.mongodb.net/node-api-biblioteca");

let db = mongoose.connection;

export default db;