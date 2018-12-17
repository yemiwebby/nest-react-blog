import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface IState {
    id: string,
    post: any;
}

export class Post extends React.Component<{} & RouteProps, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            post: {}
        }
    }

    public async componentDidMount(): Promise<any> {
        const response = await fetch(`http://localhost:3000/blog/post/${this.state.id}`);
        const json = await response.json();
        this.setState({ post: json })
    }

    public navigate() {

    }

    public render() {
        const post = this.state.post;
        return (
            <div>
                {this.state.post &&
                    <div className="col-sm-9">

                        <h2>{post.title}</h2>
                        <h5>
                            <span className="glyphicon glyphicon-time"></span>
                            Post by {post.author}.</h5>
                        <p> {post.body} </p>

                    </div>
                }
            </div>
        )
    }
}