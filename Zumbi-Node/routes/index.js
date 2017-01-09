// const carro = require('../programacao/carro/carroController.js');
const html = require('../html/index.html');
// module.exports = function (app) {

    app.route('/')
        .get(html);

//     app.route('/api/carro/:id')
//         .post(carro.criar)
//         .put(carro.editar)
//         .delete(carro.deletar)
//         .get(carro.buscar);

// };