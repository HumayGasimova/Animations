/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import UnicornLogo  from '../../../images/pink-unicorn-silhouette-png-18.png';
 
 /**
  * Styles
  */
import './unicorn.scss';
 
 /**
  * App component definition and export
  */
 export class Unicorn extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
       this.state={
           slower: 0
       }
   }
//    componentDidMount = () => {
//     window.addEventListener('scroll', this.handleScroll)
//  }

//     handleScroll = () => {
//         let scrollHeight = document.body.scrollTop
//          this.setState({
//              slower: scrollHeight/2
//          })
//     }
 

    render(){
       return(
            <div className={this.props.left ? "leftUnicorn": "rightUnicorn"}>
                <img 
                    src={UnicornLogo}
                    // style={{transform: `translate(0px, ${this.state.slower}px)`}}
                    />
            </div>
       );
    }
 }
 
 export default Unicorn;
 