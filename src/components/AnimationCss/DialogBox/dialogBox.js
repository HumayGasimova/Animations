/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
 
 /**
  * Styles
  */
 
 import './dialogBox.scss';
 
 /**
  * AnimationCss component definition and export
  */
 export class DialogBox extends Component {
 
    /**
    * Constructor
    */
 

    render(){
       return(
         <div className={this.props. dialogBoxIsOpen ? "dialogBox open" : "dialogBox close"}>
          
               <h1>Dialog Box</h1>
               <button onClick={this.props.handleDialogBoxClose}>Close Dialog Box</button>
          
         </div>
       );
    }
 }
 
 export default DialogBox;
 