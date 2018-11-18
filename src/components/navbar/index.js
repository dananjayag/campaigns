import  React, {Component} from 'react';
import './navbar.scss';
import { ShowMe }  from '../utility/showMe';
import { CreateCampaignModal } from './createModal';

/*
    Universal Navbar container 
    with Modal to create new  Campaign 
    @@{
        CreateCampaignModal
    }

*/
export class Navbar extends Component{
    constructor(){
        super();
        this.state = {
                isCreateModel : false
        }
    }

     /*

        fn - createCampaign - to toggle model
        fn - onclose - to close model

    */

    createCampaign = () => {
        const { isCreateModel } = this.state;
        if( !isCreateModel ){
            this.setState({
                isCreateModel:true
            })
        }
    }
    onClose = () => {
        this.setState({
            isCreateModel:false
        })  
    }
 
     render(){
         const { isCreateModel } = this.state;
         return (
             <div className ='nav-bar'>
                  <ul>
                      <li> <h2>Campaigns List </h2></li>
                      <li> <h3 className="btn" onClick = { this.createCampaign}> + Create  </h3> </li>
                  </ul>
                  <ShowMe when = { isCreateModel }>
                    <CreateCampaignModal onClose={this.onClose} onCreateCampaign = {this.props.onCreateCampaign}/>
                  </ShowMe>
             </div>
         )
     }
}