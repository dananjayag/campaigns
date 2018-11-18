import React,{Component} from 'react';
import './campaign.scss';
import { Campaign } from './campaign';

/*
    History Renderer based on the actions - DUMB Component

    @@ACTIONS {
                add,
                comment,
                rename,
                created

    }
*/

export class HistoryRenderer extends Component{
    render(){
        const {history, name} =this.props.campaign
        return(
            <div className="history">
                 <div className= "header">
                         
                         <div>
                            <i className="fa fa-undo" style={{fontSize:16,paddingRight:5}}></i> History <br/>
                              <span>{`Campaign - ${name}` }</span>
                         </div>

                 </div>
                    <ul>
                    {
                        history.map((history)=>{
                            switch(history.action){
                                case 'create':{
                                    return (
                                        <div className="create-history">
                                            <span> Campaign </span> <b>created </b> <br/> by
                                            <span className="creator"> {history.creator}</span>
                                        </div>
                                    )
                                }
                                case 'pause' :{
                                    return (
                                        <div className="pause-history">
                                            <span> Campaign </span> <b> {history.isPaused ? 'puased' : 'unpaused'} </b> <br/> by
                                            <span className="creator"> {history.creator}</span>
                                        </div>
                                    )
                                }
                                case  'rename':{
                                    return (
                                        
                                        <div className="rename-history">
                                             <span>  Campaign  renamed</span> <b> {history.name} </b> <br/>  by
                                            <span className="creator"> {history.creator}</span>
                                    
                                        </div>
                                    )
                                }
                                case 'comment':{
                                    return (
                                        <div className="comment-history">
                                            <span> Comment </span> <b> {history.comment} </b> added <br/> by
                                            <span className="creator"> {history.creator}</span>
                                    
                                        </div>
                                    )
                                }
                                default : {

                                    return ''
                                }
                            }
                         })

                    }
                    </ul>
            
            </div>
        )
    }
}