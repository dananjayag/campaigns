import randomName from 'random-name';
import cuid from 'cuid';

// function to transform campaign


export function transformer( campaignName ) {
    return {
        id:cuid(),
        name : campaignName,
        creator : randomName.first(),
        createdAt : Date.now(),
        isPaused : false,
        comments : [],
        history : []
    }
}