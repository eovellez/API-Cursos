const cursos = require('../db/index');

function createCurso(request, response) {
    const { name } = request.body;
    cursos.push(name);

    return response.json(cursos);
}

module.exports = createCurso;