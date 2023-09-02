import { Gallery } from "./Gallery"

// image
import Goal1 from '../../assets/Image/Goals/Goal1.png'
import Goal2 from '../../assets/Image/Goals/Goal2.png'
import Goal3 from '../../assets/Image/Goals/Goal3.png'
import Goal4 from '../../assets/Image/Goals/Goal4.png'
import Goal5 from '../../assets/Image/Goals/Goal5.png'
import Goal6 from '../../assets/Image/Goals/Goal6.png'
import Goal7 from '../../assets/Image/Goals/Goal7.png'
import Goal8 from '../../assets/Image/Goals/Goal8.png'
import Goal9 from '../../assets/Image/Goals/Goal9.png'
import Goal10 from '../../assets/Image/Goals/Goal10.png'
import Goal11 from '../../assets/Image/Goals/Goal11.png'
import Goal12 from '../../assets/Image/Goals/Goal12.png'
import Goal13 from '../../assets/Image/Goals/Goal13.png'
import Goal14 from '../../assets/Image/Goals/Goal14.png'
import Goal15 from '../../assets/Image/Goals/Goal15.png'
import Goal16 from '../../assets/Image/Goals/Goal16.png'
import Goal17 from '../../assets/Image/Goals/Goal17.png'
import Goal18 from '../../assets/Image/Goals/Goal18.png'


function GalleryPage() {

    const imgArray = [Goal1, Goal2, Goal3, Goal4, Goal5, Goal6, Goal7, Goal8, Goal9, Goal10, Goal11, Goal12, Goal13, Goal14, Goal15, Goal16, Goal17, Goal18]

  return (
    <>
      <Gallery input_array={imgArray}/>
    
    </>
  )
}

export default GalleryPage
