
import express, { application, NextFunction, request, response } from 'express'
import  morgan from 'morgan'
const  path = require('path')
const router = express();


const port = 5000;
const __dirname = path.resolve();


router.listen(port, () => console.log(`Running on port ${port}`));
module.exports =  router;
router.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

router.get('/home', (request, response, next: NextFunction) => {
    response.sendFile(__dirname + '/Source/views/index1.html');
});

router.get('/', (request, response) => {
    response.redirect('/home');
});

router.get('/registration', (request, response) => {
    response.sendFile(__dirname + '/Source/views/regist.html');
});

router.use((request, response) =>{
    response
    .status(404)
    .sendFile(__dirname + '/Source/views/error.html');
});
