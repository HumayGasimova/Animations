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
 
import './parallax.scss';

import Text from './Text/text'
 
 /**
  * App component definition and export
  */
 export class Parallax extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
   }
 
    render(){
       return(
         
            <div className="main">
               <div className="backgroundBox"/>
               <div className="feather"/>
               <div className="logo">
                  <Text/>
               </div>
              
            </div>
        
       );
    }
 }
 
 export default Parallax;
 