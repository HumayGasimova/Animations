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
 

 
 /**
  * App component definition and export
  */
 export class Text extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
   }
 
    render(){
       return(
                <svg height="100%" width="100%"
                    >
                    <text x="50%" y="50%" fill="black" text-anchor="middle">AWESOME!</text>
                </svg>
       );
    }
 }
 
 export default Text;
 