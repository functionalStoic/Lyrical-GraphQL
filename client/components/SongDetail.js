import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSongDetails from '../queries/fetchSongDetails';

const SongDetail = ({ data: { loading, song } }) =>
  loading ? (
    <div />
  ) : (
    <div>
      <Link to="/">Go Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );

export default graphql(fetchSongDetails, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
