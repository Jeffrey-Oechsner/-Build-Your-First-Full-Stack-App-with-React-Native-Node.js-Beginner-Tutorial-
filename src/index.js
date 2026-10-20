import express from 'express'; // Imports Express.js.
import remindersRoutes from './routes/remindersRoutes.js'; // Imports the reminders routes.
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

const app = express(); // Creates an Express application instance.
const port = process.env.PORT || 3000;

app.use(express.json()); // Parses incoming JSON request bodies.
app.use('/reminders', remindersRoutes); // Mounts the reminders routes at the '/reminders' path.
// app.use('/users', usersRoutes); // Mounts the users routes at the '/users' path.

app.use(errorHandlerMiddleware)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})