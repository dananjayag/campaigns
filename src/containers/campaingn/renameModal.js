import React, {Component} from 'react';

export class RenameModal extends Component{
    componentDidMount(){

    }
    render(){
        return(
            <div className="modal">
                    <label> New Name</label>
                    <input type="text" placeholder="Update Name" ref={(elmnt)=>{this.rename = elmnt}}  onKeyPress = {(e)=>{this._handleKeyPress('rename',e,id)}}/>
                    <button onClick = { ()=>{this.changename(id)}}> Submit </button>
            </div>
        )
    }
}