import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { navbarDropdownToggleAction } from './redux/ui/ui.action';

const App = () => {
    const { navbarDropdown } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleOnClick = (status) => {
        if(status) dispatch(navbarDropdownToggleAction(false));
    }
    return (
        <div onClick={() => handleOnClick(navbarDropdown)}>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} />
            </Switch>
        </div>
    )
}

export default App;