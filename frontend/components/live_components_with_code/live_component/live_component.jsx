import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

class LiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this._renderCorrectComponent = this._renderCorrectComponent.bind(this);
  }

  render() {
    const { currentComponent } = this.props;
    return(
      <div className="live-component-container">
        { this._renderCorrectComponent(currentComponent.name)}
      </div>
    );
  }

  _renderCorrectComponent(compName) {
    const componentProperties = this.props.currentComponent.properties;
    switch(compName) {
      case "FlatButton":
        const {fullWidth, label, href, disabled} = componentProperties;
        return <FlatButton
          className="flat-button-display"
          fullWidth={fullWidth}
          label={label}
          href={href}
          disabled={disabled}
          target="_blank"
          />;
      case "CircularProgress":
        const {size, thickness} = componentProperties;
        return <CircularProgress
          size={size}
          thickness={thickness}
          />;
      default:
        return <FlatButton label="Default button"/>;
    }
  }
}

export default LiveComponent;
