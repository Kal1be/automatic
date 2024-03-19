import { faCcPaypal } from "@fortawesome/free-brands-svg-icons"
import { faPerson, faQuestionCircle, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

function First() {
  return (
    <div>
        <div className="z-45 relative md:absolute md:flex gap-2 w-full justify-between md:px-20 px-3 -mt-16">
           <motion.div 
             initial={{x:-100,opacity:.4}}
             transition={{duration:1}}
             whileInView={{x:0,opacity:1}}
           className="border border-orange-400 bg-white p-12 md:w-96 w-full text-center">
            <FontAwesomeIcon icon={faPerson} className="text-5xl text-orange-400" />
            <h2 className="text-2xl my-3 font-medium">Checkout</h2>
           </motion.div>
           <motion.div 
             initial={{x:-140,opacity:.4}}
             transition={{duration:1}}
             whileInView={{x:0,opacity:1}}
           className="border border-orange-400 bg-white p-12 md:w-96 w-full text-center">
            <FontAwesomeIcon icon={faSchool} className="text-5xl text-orange-400" />
            <h2 className="text-2xl my-3 font-medium">School Exam</h2>
           </motion.div>
           <motion.div 
             initial={{x:-180,opacity:.4}}
             transition={{duration:1}}
             whileInView={{x:0,opacity:1}}
           className="border border-orange-400 bg-white p-12 md:w-96 w-full text-center">
            <FontAwesomeIcon icon={faCcPaypal} className="text-5xl text-orange-400" />
            <h2 className="text-2xl my-3 font-medium">Check Account</h2>
           </motion.div>
           <motion.div 
             initial={{x:-220,opacity:.4}}
             transition={{duration:1}}
             whileInView={{x:0,opacity:1}}
           className="border border-orange-400 bg-white p-12 md:w-96 w-full text-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-5xl text-orange-400" />
            <h2 className="text-2xl my-3 font-medium">Token Verify</h2>
           </motion.div>
        </div>

        <div className="md:pt-52 md:px-24 px-4">
            <h3 className="text-center md:text-4xl text-xl my-3 font-bold pb-6 ">Center of Registration and get your Visa!</h3>
            <div className="md:flex gap-6">
                <motion.div
                animate={{y:-100,opacity:0}}
                transition={{duration:1}}
                whileInView={{y:0,opacity:1}}
                >
                    <img src="./good.jpg" className="md:w-[500px] w-full " alt="" />
                </motion.div>
                <motion.div
                initial={{x:-200,opacity:0,scale:.4}}
                transition={{durtaion:3}}
                whileInView={{x:0,opacity:1,scale:1}}
                className="md:w-[600px]">
                    <h2 className="text-2xl font-medium pb-2 text-orange-500">Voici la liste de nos visa !</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum magnam eveniet, quos iure sit, 
                        sunt exercitationem omnis sed earum qui repellat nisi perspiciatis perferendis illum deleniti
                         dolore facere eos aliquid consequuntur natus voluptate optio. Repellat autem sapiente,
                          et magnam id nihil unde dignissimos enim veniam? Architecto illo in hic omnis! Cupiditate
                           amet cum minus suscipit! Dolore suscipit facere.
                    </p>
                    <button className="text-xl my-3 bg-orange-400 px-4 py-1 text-white">Check List</button>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default First
