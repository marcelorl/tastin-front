import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ReviewCard extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.onChange = this.onChange.bind(this);
  }

  onSave () {
    const { onSave } = this.props;

    onSave(this.state.message);

    this.setState({ message: '' });
  }

  onChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  render () {
    return (
      <form style={{ 'text-align': 'left', padding: '5px' }}>
        <TextField
          hintText="Really nice place"
          floatingLabelText="Write your review here"
          defaultValue={this.state.message}
          value={this.state.message}
          onChange={e => { this.onChange(e) }}
          multiLine
          fullWidth
          rows={1}
        />

        <RaisedButton onClick={this.onSave} label="Save" primary />
      </form>
    );
  }
}


ReviewCard.PropTypes = {
  onSave: PropTypes.func
};

ReviewCard.defaultProps = {
  review: {}
};

export default ReviewCard;
