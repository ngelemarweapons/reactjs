import {connect} from 'react-redux'
import React, { Component } from 'react'

class Post extends Component{
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h2 className="center">{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id===id)
    }
}
export default connect(mapStateToProps)(Post);