import React from 'react';
import {connect} from 'react-redux';

class LiveCode extends React.Component {
  constructor(props) {
    super(props);
    this.atomTextFromPropInfo = this.atomTextFromPropInfo.bind(this);
    this.atomImportHeader = this.atomImportHeader.bind(this);
  }

  render() {
    const { currentComponent: { name, properties } } = this.props;
    const propKeys = Object.keys(properties);

    const atomStyling = propKeys.map((propKey, idx) => {
      const propValue = properties[propKey];
      return this.atomTextFromPropInfo(propKey, propValue, idx);
    });

    const atomImport = this.atomImportHeader();


    return (

      <div className="live-code-container">
        <div className="interior-live-code-container">

          {atomImport}

          <span className="atom-red">{`<${name}`}</span>

          {atomStyling}

          <span className="closing-brace atom-red">{" />"}</span>
        </div>
      </div>
    );
  }

  atomImportHeader() {
    const {currentComponent: {name}} = this.props;
    return (
      <div>
        <span className="atom-purple">import </span>
        <span className="atom-red property">{name} </span>
        <span className="atom-purple property">from </span>
        <span className="atom-green property">{`"material-ui/${name}"`}</span>
        <span className="atom-grey">;</span>
        <br></br>
        <br></br>
      </div>
    );
  }

  ///

  atomTextFromPropInfo(propKey, propValue, idx) {
    const propType = typeof(propValue);
    if (propType === "boolean") {

      return (
        <span key={idx}>
          <span className="property atom-orange"> {propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-orange">{propValue ? "true" : "false"}</span>
        </span>
      );
    } else if (propType === "number") {
      return (
        <span key={idx}>
          <span className="property atom-orange"> {propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-orange">{propValue}</span>
        </span>
      );
    } else {
      return (
        <span key={idx}>
          <span className="property atom-orange"> {propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-green">{`"${propValue}"`}</span>
        </span>
      );
    }
  }
}

const mapStateToProps = ({currentComponent}) => ({
  currentComponent
});

  export default connect(mapStateToProps)(LiveCode);
