import {CAMPAIGN_PAUSE_UPDATE,CAMPAIGN_DELETE,CAMPAIGN_RENAME,ADD_COMMENT} from './constants';

export function puaseHandler(id, status){
    return {
        type:CAMPAIGN_PAUSE_UPDATE,
        id,
        status
    }
}

export function deleteCampaign(id){
    return{
        type:CAMPAIGN_DELETE,
        id
    }
}
export function renameCampaign(id,name){
    return {
        type : CAMPAIGN_RENAME,
        id,
        name
    }
}
export function addComment(id, comment){
    return {
        type:ADD_COMMENT,
        id,
        comment
    }
}