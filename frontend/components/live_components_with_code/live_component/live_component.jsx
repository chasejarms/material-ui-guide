import React from 'react';
import FlatButton from 'material-ui/FlatButton';

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
    switch(compName) {
      case "Flat Button":
        const componentProperties = this.props.currentComponent.properties;
        const {fullWidth, label, href, disabled} = componentProperties;
        return <FlatButton
          className="flat-button-display"
          fullWidth={fullWidth}
          label={label}
          href={href}
          disabled={disabled}
          target="_blank"
          />;
      default:
        return <FlatButton label="Default button"/>;
    }
  }
}

export default LiveComponent;
