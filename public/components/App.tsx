import * as React from 'react';
import { BrowserRouter, Route, Switch, Link, HashRouter } from 'react-router-dom';
import { Create } from './post/Create';
import { Home } from './Home';
import { EditPost } from './post/Edit';
import { Post } from './post/Post';



export class App extends React.Component<{}, {}> {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a href="#" className="navbar-brand"> Nest React TypeScript Blog </a>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/"}> Home </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/create"}> Create </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route path={"/edit/:id"} component={EditPost} />
                        <Route path={"/post/:id"} component={Post} />
                        <Route path={"/create"} component={Create} />
                        <Route path={"/"} component={Home} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}