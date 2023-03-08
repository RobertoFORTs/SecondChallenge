import { app } from './app';
import { connect } from 'mongoose';
import dotenv  from 'dotenv';

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE?.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD || ''
);
  
if(DB)
{
  connect(DB)
  .then(() => console.log('DB connection successful!'));
} else{
  console.log(`couldn't fetch connection string for DB, exiting...`);
  process.exit(1);
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});