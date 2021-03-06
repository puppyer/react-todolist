import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { addTodo } from '../Actions.js';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    input.value = '';
  };

  refInput = (node) => {
    this.input = node;
  };

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
