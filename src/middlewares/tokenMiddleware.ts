import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

async function verifyToken(req:Request, res:Response, next: NextFunction) {
    const { authorization }= req.headers;
    const secretKey = process.env.JWT_SECRET;
    const token = authorization?.replace("Bearer", "").trim();
   
    await jwt.verify(token, secretKey);
  
    next();
  };
  
  export default verifyToken;