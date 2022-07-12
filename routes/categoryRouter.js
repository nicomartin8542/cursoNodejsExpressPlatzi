import express from 'express';

const router = express.Router();

//Enviar mas de un parametro en el request
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});
export default router;
