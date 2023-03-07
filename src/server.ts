import {app} from './app';
import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})