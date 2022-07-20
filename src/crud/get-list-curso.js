const cursos = require('../db/index');

function getListCurso(request, response) {
    const { index } = request.params;
    console.log(index);
    return response.json(cursos[index]);
}

module.exports = getListCurso;