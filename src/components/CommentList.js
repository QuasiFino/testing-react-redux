import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderedComments() {
    return this.props.comments.map( comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderedComments()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
