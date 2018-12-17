import * as React from 'react';

// interface IFormProps {
//     action: string;
// }

export interface IValues {
    [key: string]: any;
}

export interface IFormState {
    values: IValues;
    submitSuccess?: boolean;
}

export class Create extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props);
        const values: IValues = {};
        this.state = { values };
    }

    /**
     * handles form submission
     * @param e 
     */
    private handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const submitSuccess: boolean = await this.submitForm();
        this.setState({ submitSuccess });
    }

    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }

    private clearState(): void {
        this.setState({ values: {} });
    }

    private async submitForm(): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3000/blog/post', {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }),
                body: JSON.stringify(this.state.values)
            });
            this.setState({ values: { ...this.state.values, ...{} } });
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }

    public render() {
        const { submitSuccess } = this.state;
        return (
            <div>
                <div className={"col-md-8 col-md-offset-4"}>
                    <h2> Create Post </h2>
                    <div className="alert alert-info" role="alert">
                        Fill the form below to create a new post
                    </div>
                    <form id={"create-post-form"} onSubmit={this.handleFormSubmission} noValidate={true}>
                        <div className="form-group col-md-6">
                            <label htmlFor="title"> Title </label>
                            <input type="text" id="title" onChange={(e) => this.handleInputChanges(e)} name="title" className="form-control" placeholder="Enter title" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="description"> Description </label>
                            <input type="text" id="description" onChange={(e) => this.handleInputChanges(e)} name="description" className="form-control" placeholder="Enter Description" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="body"> Write Content </label>
                            <input type="text" id="body" onChange={(e) => this.handleInputChanges(e)} name="body" className="form-control" placeholder="Enter content" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="author"> Author </label>
                            <input type="text" id="author" value={"olususi oluyemi"} onChange={(e) => this.handleInputChanges(e)} name="author" className="form-control" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit"> Create Post </button>
                        </div>

                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                The form was successfully submitted!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        )
    }
}