const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //rota listagem
    async index(req, res) {
        //paginacao com mongoose-paginate
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //rota detalhe
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //rota criacao
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};