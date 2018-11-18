import  React, {Component} from 'react';
import './navbar.scss';

export class CreateCampaignModal extends Component {

    componentDidMount(){
        this.name.focus();
    }
    /*

        Modal to create Campaigns 
        fn - onCreateCampaign - to create new Campaign
        fn - _handleKeyPress - onEnter
    */
    onCreateCampaign = () => {
         const { onCreateCampaign } = this.props;
         let name = this.name.value;
         if(name){
             onCreateCampaign(name);
             this.props.onClose();
         }
         else{
             alert(' Enter Valid Name ')
         }
    }
    _handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
            const { onCreateCampaign } = this.props;
            let name = this.name.value;
            if(name){
                onCreateCampaign(name);
                this.props.onClose();
            }
            else{
                alert(' Enter Valid Name ')
            }
        }
    }
    render(){
        return(
            <div className="modal-holder">
                <div className = 'modal'>
                        <div className="header">
                        <h6 className="close" onClick={this.props.onClose}> X </h6>
                        </div>
                        <div className="modal-content">
                            <input type="name" ref={(elmnt)=>{this.name=elmnt}} onKeyPress={this._handleKeyPress} placeholder="Enter Campaign Name"/>
                            <br/>
                            <input type="submit" onClick = {this.onCreateCampaign}/>
                        </div>
                </div>
            </div>
        )
    }
}