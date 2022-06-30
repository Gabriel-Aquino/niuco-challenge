import express, { NextFunction, Request, Response } from 'express';
import mainRoute from './infra/http/main-route';
import 'express-async-errors'
import AppError from './errors/app-error';

const app = express();

app.use(express.json());
app.use(mainRoute)

app.use((err: Error, requestError: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json(err.throwError());
  }
  console.error(`ERROR: ${err}`);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3000, () => {
  console.log('Server running at 3000')
})
