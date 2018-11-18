import { CREATE_NEW_CAMPAIGN } from './constants';
import { CAMPAIGN_DELETE, CAMPAIGN_PAUSE_UPDATE, CAMPAIGN_RENAME, ADD_COMMENT } from '../campaingn/constants';
import { transformer } from './utility';

    /*
            intialState with empty campaign List array

            */
const intialState = {
    campaignsList : []
}

export function appReducer(state=intialState , action){

            /*
               CREATE_NEW_CAMPAIGN - to create new campaign

            */
     switch(action.type)
     {
        case CREATE_NEW_CAMPAIGN : {
                let campaign = transformer(action.campaignName);
                campaign.history.push({action : 'create', creator : campaign.creator, name:campaign.name});
                const newCampaignList = [...state.campaignsList,campaign];
                return {...state,campaignsList : newCampaignList}
        }

            /*
               CAMPAIGN_DELETE - to create  campaign
                @@params {
                    name
                }
            */

        case CAMPAIGN_DELETE : {
            let itemToDelete = state.campaignsList.findIndex((campaign)=>{
                return campaign.id == action.id
            })
            const newCampaignList = [...state.campaignsList.slice(0,itemToDelete),...state.campaignsList.slice(itemToDelete+1)];
            return {...state,campaignsList : newCampaignList}
        }

          /*
               CAMPAIGN_PAUSE_UPDATE - to toggle  campaign
                @@params {
                    id,
                    status
                }
            */

        case CAMPAIGN_PAUSE_UPDATE : {
            let campaign = state.campaignsList.findIndex((campaign)=>{
                  return  campaign.id == action.id
            })
            let newCampaignList = [...state.campaignsList];
            newCampaignList[campaign].history.push({action : 'pause', creator : newCampaignList[campaign].creator, isPaused:action.status});
            newCampaignList[campaign].isPaused = action.status;
            return {...state,campaignsList : newCampaignList }
           
        }
            /*
               ADD_COMMENT - to add comment  campaign
                @@params {
                    id,
                    comment
                }
            */
        case ADD_COMMENT : {
            let campaign = state.campaignsList.findIndex((campaign)=>{
                return  campaign.id == action.id
            });
            let newCampaignList = [...state.campaignsList]
            newCampaignList[campaign].comments.push(action.comment);
            newCampaignList[campaign].history.push({action : 'comment', creator : newCampaignList[campaign].creator, comment:action.comment});
            return {...state,campaignsList : newCampaignList }
            
        }

           /*
               CAMPAIGN_RENAME - to rename the  campaign
                @@params {
                    id,
                    newName
                }
            */
        case CAMPAIGN_RENAME : {
            let campaign = state.campaignsList.findIndex((campaign)=>{
                return  campaign.id == action.id
            });
            let newCampaignList = [...state.campaignsList];
            newCampaignList[campaign].name = action.name;
            newCampaignList[campaign].history.push({action : 'rename', creator : newCampaignList[campaign].creator, rename:action.name});
            return {...state,campaignsList : newCampaignList };
        }
        default : {
           return state;
        }
 }
}