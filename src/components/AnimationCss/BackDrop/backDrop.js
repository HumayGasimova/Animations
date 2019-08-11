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
 
 import './backDrop.scss';
 
 /**
  * AnimationCss component definition and export
  */
 export class BackDrop extends Component {
 
    /**
    * Constructor
    */
 

    render(){
       return(
         <div 
            onClick={this.props.handleDialogBoxClose}
            className="backDrop"/>
       );
    }
 }
 
 export default BackDrop;
 