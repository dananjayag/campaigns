import { CREATE_NEW_CAMPAIGN } from './constants';

export function onCreateCampaign(campaignName){
    return {
        type:CREATE_NEW_CAMPAIGN,
        campaignName
    }
}