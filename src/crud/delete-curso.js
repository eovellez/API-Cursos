const cursos = require('../db/index');

function deleteCurso(request, response) {
    const { index } = request.params;

    cursos.splice(index, 1);
    return response.json({ message: "O Curso foi deletado" });
}

module.exports = deleteCurso;