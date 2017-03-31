import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import InteractiveSidebar from './interactive_sidebar/interactive_sidebar';
import LiveComponentsWithCode from './live_components_with_code/live_components_with_code';
import LandingPage from './landing_page/landing_page';
import {lightBlue500, blue600, lightBlue400, deepPurple300, deepPurple500} from 'material-ui/styles/colors';
//
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: blue600,
    primary3Color: lightBlue400,
    accent1Color: deepPurple300,
    accent2Color: deepPurple500
  }
});


class App extends React.Component {
  constructor(store) {
    super(store);
    this.state = {
      showLandingPage: true
    };
    this.toggleLandingPage = this.toggleLandingPage.bind(this);
    this.landingPageIfShowIsTrue = this.landingPageIfShowIsTrue.bind(this);
  }

  toggleLandingPage() {
    // this.setState({
    //   showLandingPage: !this.state.showLandingPage
    // });
  }

  landingPageIfShowIsTrue() {
    if (this.state.showLandingPage) {
      return <LandingPage toggleLandingPage={this.toggleLandingPage}/>;
    }
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="page-with-landing">
            { this.landingPageIfShowIsTrue() }
            <div className="page-container" id="page-container">
              <InteractiveSidebar/>
              <LiveComponentsWithCode/>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
