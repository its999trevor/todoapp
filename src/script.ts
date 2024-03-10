import express from 'express'
import path from 'path'
import methodOverride  from 'method-override'
import routes from './routes'
const app=express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');

app.use("/",routes);
app.listen(3000, () => {
    console.log('Server started at port: 3000');
  });