/**
 * Libraries
 */

import React,{
   Component
} from 'react';

import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

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

const animationTiming = {
   enter: 400,
   exit: 1000
}
export class DialogBox extends Component {

   /**
 * Constructor
 */


   render(){
      return(
      // <Transition 
      //    in={this.props.dialogBoxIsOpen} 
      //    timeout={animationTiming}
      //    mountOnEnter
      //    unmountOnExit
      //    onEnter={()=>console.log("onEnter")}
      //    onEntering={()=>console.log("onEntering")}
      //    onEntered={()=>console.log("onEntered")}
      //    onExit={()=>console.log("onExit")}
      //    onExiting={()=>console.log("onExiting")}
      //    onExited={()=>console.log("onExited")}
      // > 
      //    {state => (
      //       <div 
      //          // className={this.props.dialogBoxIsOpen ? "dialogBox open" : "dialogBox close"}
      //          className={state === "entering" ? "dialogBox open" : state === "exiting" ? "dialogBox close": "dialogBox"}
      //          >
      //             <h1>Dialog Box</h1>
      //             <button onClick={this.props.handleDialogBoxClose}>Close Dialog Box</button>
      //       </div>
      //    )}
      // </Transition>
      <CSSTransition 
      in={this.props.dialogBoxIsOpen} 
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      classNames={{
         enter: '',
         enterActive: 'open',
         exit: '',
         exitActive: 'close'
      }}
   > 
         <div 
            // className={this.props.dialogBoxIsOpen ? "dialogBox open" : "dialogBox close"}
            className={"dialogBox"}
            >
               <h1>Dialog Box</h1>
               <button onClick={this.props.handleDialogBoxClose}>Close Dialog Box</button>
         </div>
   </CSSTransition>
      
      );
   }
}

export default DialogBox;
