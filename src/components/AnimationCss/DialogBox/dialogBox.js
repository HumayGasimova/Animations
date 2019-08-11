/**
 * Libraries
 */

import React,{
   Component
} from 'react';

import Transition from 'react-transition-group/Transition';
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
      <Transition 
         in={this.props.dialogBoxIsOpen} 
         timeout={300}
         mountOnEnter
         unmountOnExit
      > 
         {state => (
            <div 
               // className={this.props.dialogBoxIsOpen ? "dialogBox open" : "dialogBox close"}
               className={state === "entering" ? "dialogBox open" : state === "exiting" ? "dialogBox close": "dialogBox"}
               >
                  <h1>Dialog Box</h1>
                  <button onClick={this.props.handleDialogBoxClose}>Close Dialog Box</button>
            </div>
         )}
      </Transition>
      
      );
   }
}

export default DialogBox;