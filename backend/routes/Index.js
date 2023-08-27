const AccountRouter = require('./Account');
const CategogoryRouter = require('./Category');
const OrderRouter = require('./Order');
const ProductRouter = require('./Product');

function route(app) {
    
    app.use('/account', AccountRouter);
    app.use('/category', CategogoryRouter);
    app.use('/order', OrderRouter);
    app.use('/product', ProductRouter);
}

module.exports = route;