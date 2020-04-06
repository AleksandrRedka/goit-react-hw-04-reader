import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import * as fetchAPI from '../services/filmAPI';
import Actors from '../Actors/Actors';

const getIdFromProps = props => props.match.params.movieId;

const mapper = obj => {
  return obj.map(({ credit_id: id, profile_path: photoActor, ...props }) => ({
    id,
    photoActor,
    ...props,
  }));
};

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount () {
    const id = getIdFromProps(this.props);
    fetchAPI.fetchFilmCast(id).then(data => {
      this.setState({
        cast: mapper(data.cast),
      });
    });
  }

  render () {
    const { cast } = this.state;
    return (
      <div>
        {cast.length > 0 ? (
          <Actors cast={cast} />
        ) : (
          <Paragraph text='Sorry, information not found' />
        )}
      </div>
    );
  }
}
