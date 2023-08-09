import AccountRouter from './account';
import CategogoryRouter from './category'
import OrderRouter from './order'
import ProductRouter from './porduct'

function route(app) {
    
    app.use('/account', AccountRouter);
    app.use('/category', CategogoryRouter);
    app.use('/order', OrderRouter);
    app.use('/product', ProductRouter);
}

export default route;
