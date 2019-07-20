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
       this.state={
         slower: 0
     }
   }
   componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
   }
  
   handleScroll = () => {
         let scrollHeight = document.body.scrollTop
         this.setState({
            slower: scrollHeight/2
         })
   }
 
    render(){
       return(<div  style={{transform: `translate(0px, ${this.state.slower}px)`}}>
                  <svg height="100%" width="100%"
                     >
                     <text x="50%" y="50%" fill="rgb(136, 0, 101)" textAnchor="middle">Crypto347!</text>
                  </svg>
               </div>
       );
    }
 }
 
 export default Text;
 