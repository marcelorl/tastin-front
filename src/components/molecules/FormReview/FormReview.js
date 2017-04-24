import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ReviewCard extends Component {
  constructor(props) {
    super(props);

    const { placeId, user } = props;

    this.state = {
      place_id: placeId,
      user_name: user.name,
      user_email: user.email,
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave () {
    const { onSave } = this.props;

    onSave(this.state);

    this.setState({ message: '' });
  }

  onChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  render () {
    return (
      <form style={{ textAlign: 'left', padding: '5px' }}>
        <TextField
          hintText="Really nice place"
          floatingLabelText="Write your review here"
          value={this.state.message}
          onChange={e => { this.onChange(e) }}
          multiLine
          fullWidth
          rows={1}
        />

        <RaisedButton onTouchTap={this.onSave} label="Save" primary />
      </form>
    );
  }
}


ReviewCard.PropTypes = {
  onSave: PropTypes.func,
  placeId: PropTypes.string,
  user: PropTypes.shape({})
};

ReviewCard.defaultProps = {
  review: {}
};

export default ReviewCard;
