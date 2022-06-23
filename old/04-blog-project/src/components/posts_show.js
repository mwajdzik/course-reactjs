import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions";

class PostsShow extends Component {

    componentWillMount() {
        if (!this.props.post) {
            console.log('componentWillMount: fetchPost:', this.props.match.params.id);
            this.props.fetchPost(this.props.match.params.id);
        }
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id)
            .then(() => {
                this.props.history.push('/');
            });
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <div className="buttons-header">
                    <Link to="/" className="btn btn-primary">Back</Link>
                    <button className="btn btn-danger pull-xs-right"
                            onClick={this.onDeleteClick.bind(this)}>
                        Delete Post
                    </button>
                </div>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);