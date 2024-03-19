

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import First from "../components/First";
import Second from "../components/Second";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function Home() {
  return (
    <div className='my-carouse z-0'>
        <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className='md:h-[98vh] h-72'>
    <img src="/plane.jpg" className='w-full' alt="" />
    <div className='my-bg absolute w-full h-full top-0'>

    </div>
  </div>
  <div className='md:h-[98vh] h-72'>
    <img src="/plane1.jpg" className='w-full' alt="" />
    <div className='my-bg absolute w-full h-full top-0'>

    </div>
  </div >
  <div className='md:h-[98vh] h-72'>
    <img src="/plane2.jpg" className="w-full" alt="" />
    <div className='my-bg absolute w-full h-full top-0'>

    </div>
  </div>
 
</Carousel>
   <div>
<First/>
<Second/>


   </div>
    </div>
  )
}

export default Home
