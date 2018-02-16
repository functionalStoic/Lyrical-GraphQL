import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { inc } from 'ramda';

import LikeLyric from '../mutations/LikeLyric';

class LyricList extends Component {
  onLike (id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: inc(likes)
        }
      }
    });
  }

  renderLyrics () {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i className="material-icons" onClick={() => this.onLike(id, likes)}>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }
  render () {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(LikeLyric)(LyricList);
