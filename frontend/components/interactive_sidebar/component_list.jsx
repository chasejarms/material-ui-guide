import React from 'react';
import ComponentListItemContainer from './component_list_item_container';

export default class ComponentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allComponents } = this.props;
    const componentItems = allComponents.map((compName, idx) => {
      return <ComponentListItemContainer
        key={idx}
        name={compName}/>;
    });
    return (
      <div>
        <div className='tour-aside'></div>
        <ul>
          { componentItems }
        </ul>
      </div>
    );
  }
}
