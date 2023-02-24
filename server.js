import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}/`);
})
