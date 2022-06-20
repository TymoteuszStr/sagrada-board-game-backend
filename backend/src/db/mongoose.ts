import mongoose from 'mongoose';
import { database } from '../config'

try{
  mongoose.connect(database)
  console.log('Connected to database')
}catch(e){
  console.error(`Error connecting to database ${e}`)
}