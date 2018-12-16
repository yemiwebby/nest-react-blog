import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { App } from '../components/App';
import { Create } from '../components/Create';


const AppRouter = () => (
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/create" component={Create} />
    </Router>
)

export default AppRouter;