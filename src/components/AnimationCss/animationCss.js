/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 import TransitionGroup from 'react-transition-group/TransitionGroup';
 import CSSTransition from 'react-transition-group/CSSTransition';
 
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
            dialogBoxIsOpen: false,
            items:[1,2,3]
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
                <BackDrop  handleDialogBoxClose={this. handleDialogBoxClose}/>
            )
        }
    }

    renderItems = () => {
        let array = this.state.items
        return(
            <TransitionGroup 
                component="ul"
                className="List"
            >
                {array.map((x,i)=>{
                   return(
                       <CSSTransition
                            key={i}
                            classNames="fade"
                            timeout={300}
                       >
                        <li onClick={() =>this.removeItem(i)}
                            className="ListItem"
                        >
                            {x}
                        </li>
                        </CSSTransition>
                   )
                })}
           </TransitionGroup>
        )
    }

    addItem = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItem = (i) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== i)
            };
        });
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
                <h1> Animating Lists </h1> 
                <button onClick={this.addItem}>Add Item</button><br/>
                <div>Click Item To Remove</div>
              
                {this.renderItems()}
             
            </div>
         </div>
       );
    }
 }
 
 export default AnimationCss;
 