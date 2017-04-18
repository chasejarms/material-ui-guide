import React from 'react';
import ReactDOM from 'react-dom';
import LiveComponentContainer from './live_component/live_component_container';
import LiveCode from './live_code/live_code';
import LiveDocumentationContainer from './live_documentation/live_documentation_container';
import SlideDownCallToAction from './call_to_action/slide_down_call_to_action';

class LiveComponentsWithCode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main className="live-components-with-code-container">
        <SlideDownCallToAction />
        <LiveComponentContainer/>
        <div className="component-modifier-container">
          <LiveDocumentationContainer />
          <LiveCode />
        </div>
      </main>
    );
  }
}

export default LiveComponentsWithCode;
