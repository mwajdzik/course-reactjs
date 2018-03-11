import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createPost} from "../actions";

class PostsNew extends Component {

    onSubmit(values) {
        this.props.createPost(values)
            .then(() => {
                this.props.history.push('/');
            });
    }

    renderField(field) {
        const {touched, invalid, error} = field.meta;

        return (
            <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
                <label>{field.label}</label>
                <input type="text" className="form-control" {...field.input}/>
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create a New Post</h3>

                    <Field name="title" label="Title" component={this.renderField}/>
                    <Field name="categories" label="Categories" component={this.renderField}/>
                    <Field name="content" label="Content" component={this.renderField}/>

                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

const formConfig = {
    form: 'PostsNewForm',
    validate
};

export default reduxForm(formConfig)(connect(null, {createPost})(PostsNew));