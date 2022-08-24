import express from 'express';
import productsRoutes from './productsRoutes.js';
import usersRouter from './usersRouter.js';
import categoryRouter from './categoryRouter.js';
import customerRouter from './customerRouter.js';
import orderRouter from './orderRouter.js';
import authRouter from './authRouter.js';
import profileRouter from './profileRouter.js';
////////////////////////////////
const apiRouter = (app) => {
  //Genero ruta estatica para la version
  const router = express.Router();
  app.use('/api/v1', router);

  //Rutas
  router.use('/products', productsRoutes);
  router.use('/users', usersRouter);
  router.use('/category', categoryRouter);
  router.use('/customer', customerRouter);
  router.use('/category', categoryRouter);
  router.use('/order', orderRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
};

export default apiRouter;
