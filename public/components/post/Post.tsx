import * as React from 'react';
import { RouteProps } from 'react-router-dom';

export class Post extends React.Component<{} & RouteProps, {}> {
    // constructor()

    componentDidMount() {
        // const { id } = this.props.match.params;
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <h1>
                    This component will show a single post
                </h1>
            </div>
        )
    }
}