const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;

  db('cars')
    .insert(carData)
    .then((ids) => {
      db('cars')
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        })
        .catch((err) => {
          res.status(500).json({ message: 'Failed to store car data', err });
        });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('cars')
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find car' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to update car data', err });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('cars')
    .where({ id })
    .del()
    .then((count) => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json('Could not find car');
      }
    })
    .catch((err) => {
      res.status(500).json('Failed to delete car data');
    });
});

module.exports = router;
