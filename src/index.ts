import Express from 'express';

const app = Express()

app.get('/', (req: Express.Request , res: Express.Response )=>{
    res.sendStatus(404)
})



app.listen(8080,  () =>{
   console.log('running on port 8080')
})