import React, {Component} from 'react';
import './campaign.scss';
import { transformTime } from './utility';
import {ShowMe} from '../../components/utility/showMe';


/*
    Single Campaign container 
    @@Functions{
        actions {
             pause,
             delete,
             rename,
             comment
        }
     @@Modal {
            AddComment,
            Rename
     } 
    }

*/
export class Campaign extends Component{
    constructor(){
        super();
        this.state = {
            isCommmentBox:false,
            isRenameBox : false,
        }
    }

    deleteCampaign = (id) => {
        this.props.deleteCampaign(id)
    }


    changename = (id) => {
        if(this.rename.value){
            this.props.renameCampaign(id,this.rename.value);
            this.setState({
                isRenameBox : false,
            })
        }
        else{
            alert('Add Proper Comment')
        }     
    }


    addComment = (id) => {
            if(this.comment.value){
                this.props.addComment(id,this.comment.value);
                this.setState({
                    isCommmentBox : false,
                })
            }
            else{
                alert('Add Proper Name')
            }
    }


    onpuase = (id, status) => {
        this.props.puaseHandler(id,status)
    }



    toggleComment = () =>{
        let newState = !this.state.isCommmentBox;
        this.setState({
            isCommmentBox : newState,
            isRenameBox : false, 
        })
    }


    toggleRename = () =>{
        let newState = !this.state.isRenameBox;
        this.setState({
            isCommmentBox:false,
            isRenameBox : newState
        })
    }


    _handleKeyPress = (context,e, id) =>{
        if (e.key === 'Enter') {
            if(context == 'rename')
            {
                this.changename(id)
            }
            else{
                this.addComment(id)
            }
      }
    }


    
    render(){
        const {name, id, createdAt, creator, isPaused, comments, history} = this.props.campaign;
        const { index , selected, onselectCampaign } = this.props;
        const {isCommmentBox,isRenameBox} = this.state;
        return(
            <div className={ selected ? 'campaign selected ' : 'campaign' } onClick={()=>{onselectCampaign(id)}}>
                 <ul>
                     <li className = "pullLeft"> 
                         <b> {index+1} </b>
                         <div className="campaign-header">
                             <h2> Camapign {index+1} - { name } </h2>
                             <h6> created at {transformTime(createdAt)}</h6>
                         </div>
                      </li>
                    <li className = "pullRight" > 
                         <div className="delete" onClick = {()=>{this.deleteCampaign(id)}}>
                            <i className="fa fa-trash"></i>
                        </div>
                    </li>
                     <li className = "pullRight" > 
                         <div className="rename">
                            <i className="fa fa-pencil" onClick={this.toggleRename}></i>
                            <ShowMe when = {isRenameBox}>
                                 <div className="modal">
                                      <label> New Name</label>
                                      <input type="text" placeholder="Update Name" ref={(elmnt)=>{this.rename = elmnt}}  onKeyPress = {(e)=>{this._handleKeyPress('rename',e,id)}}/>
                                      <button onClick = { ()=>{this.changename(id)}}> Submit </button>
                                 </div>
                             </ShowMe>
                        </div>
                    </li>
                     <li className = "pullRight" > 
                         <div className="comment">
                            <i className="fa fa-commenting-o" onClick={this.toggleComment}></i>
                             <ShowMe when = {isCommmentBox}>
                                 <div className="modal">
                                      <label>Comment</label>
                                      <input type="text" placeholder="Add Comment" ref={(elmnt)=>{this.comment = elmnt}}  onKeyPress = {(e)=>{this._handleKeyPress('comment',e,id)}}/>
                                      <button onClick = { ()=>{this.addComment(id)}}> Submit </button>
                                 </div>
                             </ShowMe>
                        </div>
                    </li>
                     <li className = "pullRight" > 
                         <div className="pause">
                           {
                               isPaused ?  <i className="fa fa-play-circle-o" onClick={()=>{this.onpuase(id,false)}}></i>  :  <i className="fa fa-pause" onClick={()=>{this.onpuase(id,true)}}></i>
                           }
                        </div>
                    </li>
                    
                 </ul>
            </div>
        )
    }
}