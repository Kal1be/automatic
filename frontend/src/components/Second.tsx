

import { faBook, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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



function Second() {
  return (
    <div className="my-carousel">
        <div className="md:px-16 px-2 pt-12">
            <h3 className="text-left md:text-3xl text-2xl font-bold ">There is listes of our Center</h3>
            <p className="text-md font-medium text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit id corporis veritatis 
                dolores. Distinctio laboriosam quas eveniet et pariatur officiis vitae quaerat 
                iusto voluptatibus sunt, doloribus atque neque nesciunt facere. Quod necessitatibus 
                eaque cupiditate voluptates iure harum, quo quasi blanditiis, vel qui fugit quam
                 soluta illum asperiores numquam pariatur provident culpa dolorum. Numquam quos mollitia 
                 molestiae reiciendis, quae ad cum velit quas, illum esse aliquid, sint minima neque doloremque
                  consequuntur .</p>
            <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

<div className="shadow-2xl border md:w-[400px] w-full p-3 ">
    <img src="./visa1.jpg" className="w-full h-[30vh]" alt="" />
    <div className="flex justify-between">
  <h2 className="text-xl font-bold">Lagos Center</h2>
  <div>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-black"/>

  </div>
  </div>
  <p  className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
       <h2 className="flex items-center">
             <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>
<div className="shadow-2xl border md:w-[400px] w-full p-3 ">
    <img src="./visa2.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between">
  <h2 className="text-xl font-bold">Abuja Center</h2>
  <div>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  <FontAwesomeIcon icon={faStar} className="text-black"/>

  </div>
  </div>
  <p  className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>

<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa5.jpeg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Anambra Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>



<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa6.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Anambra Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>




<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa7.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Kaduna Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>




<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa8.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Imo Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>




<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa9.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Niger Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>





<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa10.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Kano Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>




<div className="shadow-2xl border md:w-[400px] w-full p-3">
    <img src="./visa4.jpg" className="w-full h-[30vh]" alt="" />
  <div className="flex justify-between px-2">
  <h2 className="text-xl font-bold">Gombe Center</h2>
  <div>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
    <FontAwesomeIcon icon={faStar} className="text-orange-400"/>
  </div>
  </div>
  <p className="text-gray-500 font-medium py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, earum porro,
     rerum omnis fuga nulla dolore aliquam eaque voluptate
      laudantium excepturi consequatur aperiam et ullam recusandae esse atque, vitae error?
      </p>
      <hr />
      <div className="flex justify-between px-2 py-2">
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-sky-500 text-xl"/>
            <span className="px-2">3 week</span>
        </h2>
        <h2 className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-sky-500 text-xl"/>
            <span className="px-2">5 Attempt</span>
        </h2>
      </div>
</div>


 
</Carousel>
        </div>
      
    </div>
  )
}

export default Second
