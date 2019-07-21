/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
 import ImageSlot from './ImageSlot/imageSlot';
 import Pic1 from '../../../images/SlotImages/IMG_20170226_150338.jpg'
 import Pic2 from '../../../images/SlotImages/IMG_20170404_133938.jpg'
 import Pic3 from '../../../images/SlotImages/IMG_20180515_081708_977.jpg'
 import Pic4 from '../../../images/SlotImages/IMG_20180707_123405_284.jpg'
 import Pic5 from '../../../images/SlotImages/IMG_20180725_165300_509.jpg'
 import Pic6 from '../../../images/SlotImages/IMG_20180731_155539_567.jpg'
 import Pic7 from '../../../images/SlotImages/IMG_20180808_170700_758.jpg'
 import Pic8 from '../../../images/SlotImages/IMG_20180814_174126_452.jpg'
 import Pic9 from '../../../images/SlotImages/IMG_20181001_143645_993.jpg'

 
 /**
  * Styles
  */
import './imagesPage.scss';
 
 /**
  * App component definition and export
  */
 export class ImagesPage extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
        super(props);
        this.state = {
           imageSlots: [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8,Pic9],
           showImagePage: false
        }
    }
  
   componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
 }

    handleScroll = () => {
        let scrollHeight = document.body.scrollTop
        let el = document.getElementById("imagePage")
        console.log(window.innerHeight, window.outerHeight)
        if(scrollHeight > el.offsetTop - window.innerHeight/2){
           this.setState({
              showImagePage: true
           })
        }else{
            // this.setState({
            //    showImagePage: false
            // })
        }
    }

    
    renderImages = () => {
            return(
               <div className={this.state.showImagePage ? "slots" : "hidden"}>
                  {this.state.imageSlots.map((el,i)=>{
                     return (
                           <ImageSlot
                              key={i}
                              // onClick={() => {this.handleOnClick(i)}}
                              // clicked={this.state.clicked}
                              // number={"number" + i}
                              image={el}
                              timer={(i+1) * 500 }
                           >
                              {"Humay"}
                           </ImageSlot>
                     )
                  })}    
               </div>
            )
      }
 

    render(){
       return(
            <div 
               id="imagePage"
               // className={this.state.showImagePage ? "show" : "hidden"}
               >
                {this.renderImages()}
            </div>
       );
    }
 }
 
 export default ImagesPage;
 