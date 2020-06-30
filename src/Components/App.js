import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FoodMenu from './FoodMenu';
import Order from './Order';


class App extends React.Component {
    render() {
        return (<div>
            <BrowserRouter>
                <Route path='/' exact component={FoodMenu} />
                <Route path='/ordersummary/:MargeritaSize/:MargeritaQuantity/:FarmSize/:FarmQuantity/:WaveSize/:WaveQuantity/:TanSize/:TanQuantity/:total' exact component={Order} />
            </BrowserRouter>
            </div>);
    }
}
export default App;