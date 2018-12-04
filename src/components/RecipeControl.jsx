import React from 'react';
import RecipeList from './RecipeList';
import { connect } from 'react-redux';


class RecipeControl extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.props.listVisibleOnPage){
      currentlyVisibleContent = <RecipeList/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listVisibleOnPage: state.domDisplay.listVisibleOnPage
  };
};

export default connect(mapStateToProps)(RecipeControl);
