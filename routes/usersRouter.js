import express from 'express';

const router = express.Router();

//Query params
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.json({
      limit,
      offset,
    });
  }

  res.send('No hay parametros');
});

export default router;
