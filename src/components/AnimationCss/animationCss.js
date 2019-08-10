/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */

  import DialogBox from './DialogBox/dialogBox';
  import BackDrop from './BackDrop/backDrop';
 
 /**
  * Styles
  */
 
 import './animationCss.scss';
 
 /**
  * AnimationCss component definition and export
  */
 export class AnimationCss extends Component {
 
    /**
    * Constructor
    */
 
    constructor(props) {
       super(props);
       this.state = {
            dialogBoxIsOpen: false
       }
    }
 
    handleDialogBoxOpen = () => {
        this.setState({
            dialogBoxIsOpen: true
        })
    }

    handleDialogBoxClose = () => {
        this.setState({
            dialogBoxIsOpen: false
        })
    }

    renderBackDrop = () => {
        if(this.state.dialogBoxIsOpen) {
            return(
                <BackDrop/>
            )
        }
    }

    render(){
       return(
         <div className="animathionCss">
            <div className="child">
                <h1> React Animation  </h1> 
                <button onClick={this.handleDialogBoxOpen}>Open Dialog Box</button>
                {this.renderBackDrop()}
                <DialogBox 
                    handleDialogBoxClose={this.handleDialogBoxClose}
                    dialogBoxIsOpen={this.state.dialogBoxIsOpen}
                />
            </div>
         </div>
       );
    }
 }
 
 export default AnimationCss;
 