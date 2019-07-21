/**
 * Libraries
 */

import React,{
   Component
} from 'react';

/**
 * Components
 */
import HeaderText from './Text/HeaderText/headerText';
import Stars from './Stars/stars';
import Unicorn from './Unicorn/unicorn';
import AirBalloon from './AirBalloon/airBalloon';
import ImageSlot from './ImageSlot/imageSlot';
import Pic1 from '../../images/SlotImages/IMG_20170226_150338.jpg'
import Pic2 from '../../images/SlotImages/IMG_20170404_133938.jpg'
import Pic3 from '../../images/SlotImages/IMG_20180515_081708_977.jpg'
import Pic4 from '../../images/SlotImages/IMG_20180707_123405_284.jpg'
import Pic5 from '../../images/SlotImages/IMG_20180725_165300_509.jpg'
import Pic6 from '../../images/SlotImages/IMG_20180731_155539_567.jpg'
import Pic7 from '../../images/SlotImages/IMG_20180808_170700_758.jpg'
import Pic8 from '../../images/SlotImages/IMG_20180814_174126_452.jpg'
import Pic9 from '../../images/SlotImages/IMG_20181001_143645_993.jpg'

/**
 * Styles
 */

import './parallax.scss';



/**
 * App component definition and export
 */
export class Parallax extends Component {

   /**
   * Constructor
   */

   constructor(props) {
      super(props);
      this.state = {
         imageSlots: [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8,Pic9]
      }
}

renderImages = () => {
   return(
      <div className="slots">
         {this.state.imageSlots.map((el,i)=>{
            return (
                  <ImageSlot
                     key={i}
                     // onClick={() => {this.handleOnClick(i)}}
                     // clicked={this.state.clicked}
                     // number={"number" + i}
                     image={el}
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
         <div className="main">
            <div className="backgroundBox">
               <Stars left/>
               <HeaderText/>
               <Stars/> 
               <AirBalloon left/>
               <AirBalloon />
            </div>

            <div className="text">
               <h1>Text</h1>
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>
               <br/>
            </div>

            <div className="backgroundBox2">
               <div className="text">
                  <h1>Text</h1>
                  <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <Unicorn left/>
                  <Unicorn />
               </div>
            </div>
               {this.renderImages()}
         </div>
      );
   }
}

export default Parallax;
