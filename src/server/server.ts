import * as express from 'express';
import routes from './Routes';
import * as morgan from 'morgan'
import * as path from 'path'
import * as passport from 'passport'
import './middleware/bearerstrategy'
import './middleware/localstrategy'

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.json())
app.use(passport.initialize())
app.use(routes);

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
