import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class BooleanForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <FlatButton
          label="true"
          className="boolean-button"
          onClick={this.props.onClickTrue}
          />
        <FlatButton
          label="false"
          className="boolean-button"
          onClick={this.props.onClickFalse}/>
      </div>
    );
  }
}

export default BooleanForm;
