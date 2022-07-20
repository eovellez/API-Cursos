const { Router } = require ('express');
const getListCurso = require('./crud/get-list-curso');
const getListCursoAll = require('./crud/get-list-curso-all');
const createCurso = require('./crud/create-curso');
const updateCurso = require('./crud/update-curso');
const deleteCurso = require('./crud/delete-curso');

const routes = Router();

routes.get('/cursos/:index', getListCurso);
routes.get('/cursos', getListCursoAll);
routes.post('/cursos', createCurso);
routes.put('/cursos/:index', updateCurso);
routes.delete('/cursos/:index', deleteCurso);

module.exports = routes;