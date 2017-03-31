import React from 'react';
import Scroll from 'react-scroll';
import {connect} from 'react-redux';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    Scroll.Events.scrollEvent.register('end', () => {
      this.props.toggleLandingPage();
    });
  }

  scrollToBottom() {
    Scroll.animateScroll.scrollToBottom({
      duration: 1000
    });
  }

  render() {
    return(
      <div>
        <div className="landing-page">
          <div>
            <div>
              <h1>LEARN THE MATERIAL UI LIBRARY</h1>
            </div>
            <div>
              <h3>WITH EASY TO FOLLOW TUTORIALS</h3><span></span>
            </div>
            <div className="down-arrow-container">
              <i
                className="fa fa-chevron-down landing-down-arrow"
                onClick={this.scrollToBottom}
                ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
