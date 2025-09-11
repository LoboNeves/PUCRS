const sequenceController = require('../controllers/sequenceController');

module.exports = (app) => {
    app.post('/sequence', sequenceController.post);
    app.put('/sequence/', sequenceController.put);
    app.delete('/sequence/', sequenceController.delete);
    app.get('/sequence', sequenceController.get);
    app.get('/sequence/:id', sequenceController.getById);
}