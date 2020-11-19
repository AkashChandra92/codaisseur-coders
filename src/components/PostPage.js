import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/actions";
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const postId = this.props.match.params.id;
    this.props.dispatch(fetchPost(postId));
  }
  render() {
    const { post } = this.props;
    if (!post)
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    return (
      <div>
        <h1>{post.title}</h1>
        {/* <p>{post.content}</p> */}
        <ReactMarkdown source={post.content} />
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    post: reduxState.posts.data,
  };
}
export default connect(mapStateToProps)(PostPage);
