import React, { Component } from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onCreateCampaign} from './actions';
import { Navbar } from '../../components/navbar/index';
import  CampaignList  from '../campaingn/index';
import './app.scss';

/*
    Root container 
    with childen
    @@{
      Navbar,
      CampaignList
    }

*/
class App extends Component {

  render() {
    return (
      <div className="App">
         <Navbar onCreateCampaign={this.props.onCreateCampaign}/>
         <CampaignList/>
      </div>
    );
  }
}

function mapStateToProps(state){
   return {

   }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    onCreateCampaign
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
