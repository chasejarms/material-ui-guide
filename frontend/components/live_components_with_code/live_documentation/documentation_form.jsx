import React from 'react';
import FlatButtonFormType from './individual_component_forms/flat_button_form_type';

class DocumentationForm extends React.Component {
  constructor(props) {
    super(props);
    this.correctForm = this.correctForm.bind(this);
  }

  render() {
    return(
      <div>
        { this.correctForm() }
      </div>
    );
  }

  correctForm() {
    const {componentName, currentTab } = this.props;
    switch(componentName) {
      case "Flat Button":
        return <FlatButtonFormType currentTab={currentTab}/>;
      default:
        return <div></div>;
    }
  }
}

export default DocumentationForm;
