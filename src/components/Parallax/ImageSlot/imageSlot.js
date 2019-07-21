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
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="slot">
                {this.props.children}
            </div>
        );
    }
}

export default ImageSlot;
