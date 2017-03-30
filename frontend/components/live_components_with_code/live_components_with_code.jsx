import React from 'react';
import LiveComponentContainer from './live_component/live_component_container';
import LiveCode from './live_code/live_code';
import LiveDocumentationContainer from './live_documentation/live_documentation_container';

const LiveComponentsWithCode = () => (
  <main className="live-components-with-code-container">
    <LiveComponentContainer />
    <LiveDocumentationContainer />
    <LiveCode />
  </main>
);

export default LiveComponentsWithCode;
