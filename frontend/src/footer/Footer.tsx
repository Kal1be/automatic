import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faXTwitter,faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className="md:px-10 px-4 py-4 border-t border-gray-600 bg-black text-white shadow-2xl mt-12">
        <div className="md:flex justify-between  gap-8">
           <div >
            <div className="flex items-center gap-1">
                <img src="./icon1.jpg" alt="" className="w-12 h-12 rounded-full" />
                <h2 className='title font-medium'>Automatic <span className='text-orange-400'>Pro</span></h2>
            </div>
            <p className="md:w-96 text-gray-500 font-medium">Automatic Pro is the project for check different visa place in Nigeria and check their different price for any travel in the world!
                like we say the project is open source and anybody can contribute of it !
            </p>
           </div>
           <div className="md:my-0 my-4">
            <h2 className="text-xl font-bold">Check center</h2>
            <ul>
                <li>- Lagos Center</li>
                <li>- Abuja Center</li>
                <li>- Kaduna Center</li>
                <li>- Maiduguri Center</li>
                <li>- Anambra Center</li>
            </ul>
           </div>

           <div className="md:my-0 my-4">
            <h2 className="text-xl font-bold">Check center</h2>
            <ul>
                <li>- Lagos Center</li>
                <li>- Abuja Center</li>
                <li>- Kaduna Center</li>
                <li>- Maiduguri Center</li>
                <li>- Anambra Center</li>
            </ul>
           </div>

           <div className="md:my-0 my-4">
            <h2 className="text-xl font-bold">Check center</h2>
            <ul>
                <li>- Lagos Center</li>
                <li>- Abuja Center</li>
                <li>- Kaduna Center</li>
                <li>- Maiduguri Center</li>
                <li>- Anambra Center</li>
            </ul>
           </div>
        </div>

        <div className="flex justify-between mb-4 items-center md:text-2xl text-xl mt-4">
            <h2>Follow us:</h2>

            <div className="flex md:gap-12 gap-6">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faXTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </div>
        </div>

        <hr />
        <div className="md:flex justify-between mt-4 ">
            <h2 className="text-sm my-2">
               Automatic Pro Copyright &copy; 2024
            </h2>
            <h2>
                Product by <span className="text-orange-400">DevSoftware Yahoulbo</span>
            </h2>
        </div>

      
    </div>
  )
}

export default Footer
