import express from 'express';
const app = express();
import router from './app/router/Router';


app.use(express.static("public"))
app.use(router);

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on:", PORT)
});
