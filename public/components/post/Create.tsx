import * as React from 'react';

interface IState {
    posts: Array<IPost>
}

interface IPost {
    title: string,
    description: string,
    body: string,
    author: string,
    datePosted: Date
}

export class Create extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            posts: []
        }
    }

    public createPost(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.setState({
            posts: [
                ...this.state.posts,
                {
                    title: "jdfjdj",
                    description: 'sdsdsd',
                    body: 'sdsdsds',
                    author: 'oluyemi',
                    datePosted: new Date().toLocaleDateString()
                }
            ]
        })
    }
    render() {
        return (
            <div>
                <div className={"col-md-8 col-md-offset-4"}>
                    <h2> Create Post </h2>
                    <form id={"create-post-form"} onSubmit={(e) => this.createPost(e)}>
                        <div className="form-group col-md-6">
                            <label htmlFor="title"> Title </label>
                            <input type="text" id="title" v-model="title" name="title" className="form-control" placeholder="Enter title" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="description"> Description </label>
                            <input type="text" id="description" v-model="description" name="description" className="form-control" placeholder="Enter Description" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="body"> Write Content </label>
                            <textarea id="body" cols="30" rows="5" v-model="body" className="form-control"></textarea>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="author"> Author </label>
                            <input type="text" id="author" v-model="author" name="author" className="form-control" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit"> Create Post </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}