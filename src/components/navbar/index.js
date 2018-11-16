import  React, {Component} from 'react';
import './navbar.scss'
export class Navbar extends Component{
     render(){
         return (
             <div className ='nav-bar'>
                  <ul>
                      <li>Campaigns List </li>
                      <li> Create Campaign </li>
                  </ul>
             </div>
         )
     }
}