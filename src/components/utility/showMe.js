import React, {Component} from 'react';

export class ShowMe extends Component{

    /*
            Higher Order Component to render children based on conditions
        
    */
      render(){
          const { when } =this.props;
           return(
               <>
                {
                    when && this.props.children
                }
               </>
           )
      }
}