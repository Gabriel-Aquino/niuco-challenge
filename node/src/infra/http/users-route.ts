import { Router } from 'express';
import FindAllUsersController from '../controller/find-all-users-controller';
import FindUsersByIdController from '../controller/find-users-by-id-controller';
import FindUsersByNameController from '../controller/find-users-by-name-controller';

const usersRoute = Router();

const findAllUsersController = new FindAllUsersController();
const findUserByIdController = new FindUsersByIdController();
const findUserByNameController = new FindUsersByNameController();

usersRoute.get('/users/find', findUserByNameController.handle);
usersRoute.get('/users', findAllUsersController.handle);
usersRoute.get('/users/:id', findUserByIdController.handle);

export default usersRoute;
