import { Router } from 'express';
import usersRoute from 'src/infra/http/users-route';

const mainRoute = Router();

mainRoute.use('/api', usersRoute)

export default mainRoute;
