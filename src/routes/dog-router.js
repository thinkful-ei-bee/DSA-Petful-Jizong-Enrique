const express = require('express')
const dogRouter= express.Router()
const jsonBodyParser= express.json()
const dogData= require('../AnimalData/dog')
const dogsQueue=require('../queues/dogs-queue')

dogRouter
    .get('/', (req,res) =>{
        if(!dogsQueue.peek()){            
            return 
        }
        let dog = dogsQueue.peek()
        return res.status(200).json(dog)    
    })

    .delete('/', (req,res)=>{    
        if(!dogsQueue.peek()){            
            return 
        }    
      let dog = dogsQueue.dequeue();       
       return res.status(202).json(dog)
       
   })

module.exports= dogRouter