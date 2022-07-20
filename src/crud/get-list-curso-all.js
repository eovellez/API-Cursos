const cursos = require('../db/index');

function getListCursoAll(request, response) {
    return response.json(cursos);
}

module.exports = getListCursoAll;