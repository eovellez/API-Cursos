const cursos = require('../db/index');

function updateCurso(request, response) {
    const { index } = request.params;
    const { name } = request.body;

    cursos[index] = name;

    return response.json(cursos);
}

module.exports = updateCurso;