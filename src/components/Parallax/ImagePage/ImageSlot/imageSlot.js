/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './imageSlot.scss';

/**
 * ImageSlot component definition and export
 */

class ImageSlot extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
        this.state={
            hidden: true
        }
    }
    
    componentWillMount = () => {
        setTimeout(()=>{
            this.setState({
                hidden: false
            })
        },this.props.timer)
    }


    /**
    * Markup
    */

    render(){
        return(
            <div 
                // className="slot"
                className={this.state.hidden ? "hidden" : "slot"}
            >
                <img src={this.props.image}/>
            </div>
        );
    }
}

export default ImageSlot;
