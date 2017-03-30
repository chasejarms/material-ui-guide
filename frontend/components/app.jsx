import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import InteractiveSidebar from './interactive_sidebar/interactive_sidebar';
import LiveComponentsWithCode from './live_components_with_code/live_components_with_code';
import {lightBlue500, blue600, lightBlue400, deepPurple300, deepPurple500} from 'material-ui/styles/colors';
//
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  palette: {
    primary1Color: lightBlue500,
    primary2Color: blue600,
    primary3Color: lightBlue400,
    accent1Color: deepPurple300,
    accent2Color: deepPurple500
  }
});


const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="page-container">
        <InteractiveSidebar/>
        <LiveComponentsWithCode/>
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
