import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AddLyricToSong from '../mutations/AddLyricToSong';

class LyricCreate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  onSubmit (e) {
    e.preventDefault();

    const { mutate, songId } = this.props;
    const { content } = this.state;

    mutate({
      variables: { content, songId }
    })
      .then(() => this.setState({ content: '' }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          type="text"
          onChange={({ target: { value: content } }) => this.setState({ content })}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default graphql(AddLyricToSong)(LyricCreate);
