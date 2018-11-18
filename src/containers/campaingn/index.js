import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';
import { Campaign } from './campaign';
import {HistoryRenderer} from './historyRenderer'
import {deleteCampaign,renameCampaign,puaseHandler,addComment} from './actions';


/*
    Campaign List and History Caontainer

    @@FUNCTIONS {
            Select Campaign,

    }

    @@ COMPONENTS {
            CAMPAIGNS,
            HISTORY - SELECTED CAMPAIGN
    }
*/
export class CampaignList extends Component {
    constructor(){
        super();
        this.state={
            selectedCampaign : null
        }
    }
    onselectCampaign = ( id ) => {
        this.setState({
            selectedCampaign:id
        })
    }
    renderCampaignList = (campaignList) =>{
            if(Array.isArray(campaignList) && campaignList.length>0){
                return campaignList.map((campaign,index)=>{
                        return (
                            <Campaign addComment={this.props.addComment} puaseHandler={this.props.puaseHandler}  deleteCampaign={this.props.deleteCampaign} renameCampaign={this.props.renameCampaign} selected = { campaign.id == this.state.selectedCampaign } key={index} index={index} campaign={campaign} onselectCampaign={this.onselectCampaign}/>
                        )
                })
            }
            return (
                <div className = "no-campaign">
                    Click on  <code>+Create</code> to create new campaign !!
                </div>
            )
    }
    renderHistoryList = (campaignList) =>{
        let campaign = campaignList.findIndex((campaign)=>{
            return  campaign.id == this.state.selectedCampaign
        });
        if(campaign>=0)
        {
            
            return (
               <HistoryRenderer campaign = {campaignList[campaign]} />
            )
        }
        else{
            return (
                <div>
                </div>
            )
        }
        
    }
    render(){
        const { campaignsList } = this.props;
        return(
            <>
                <div className='campaign-holder'>
                {
                    this.renderCampaignList(campaignsList) 
                }
                </div>
                <div className='history-holder'>
                {
                    this.renderHistoryList(campaignsList)
                }
               </div>
          </>
        )
    }
}

function  mapStatesToProps(state){
   return{
    campaignsList:state.appData.campaignsList
   }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        deleteCampaign,
        renameCampaign,
        puaseHandler,
        addComment
    },dispatch)
}

export default connect(mapStatesToProps,mapPropsToDispatch)(CampaignList)