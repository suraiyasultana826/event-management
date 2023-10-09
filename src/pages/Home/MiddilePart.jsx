import { FaHome, FaEnvelopeOpenText , FaPencilAlt, FaStar } from "react-icons/fa";
const MiddilePart = () => {
    return (
        <div className="bg-blue-50 p-5">
            <div className="flex justify-evenly items-center content-center">
                <div>
                    <h1 className="text-5xl ml-6 font-bold"><span className="text-blue-600">Hello!</span> We Are an Event Planning Agency</h1>
                    <p  className="text-xl mt-10 w-3/4 ml-24 mb-10">As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                </div>
            </div>
            <div className=" md:grid grid-cols-2 lg:flex justify-evenly mb-10">
                {/* card-one  */}
                <div className="flex content-center items-center">
                   <div>
                   <FaHome className="w-16 h-28 ml-7"></FaHome>
                    <p className="text-xl">Find the perfect <br /> venue for free</p>
                   </div>

                </div>
                {/* card-two  */}
                <div className="flex content-center items-center">
                   <div>
                   <FaEnvelopeOpenText className="w-16 h-28 ml-7"></FaEnvelopeOpenText>
                    <p className="text-xl">Connect with <br /> the best vendor</p>
                   </div>

                </div>
                {/* card-three  */}
                <div className="flex content-center items-center">
                   <div>
                   <FaPencilAlt className="w-16 h-28 ml-7"></FaPencilAlt>
                    <p className="text-xl">Let us help you <br />with the event</p>
                   </div>

                </div>
                {/* card-four  */}
                <div className="flex content-center items-center">
                   <div>
                   <FaStar className="w-16 h-28 ml-7"></FaStar>
                    <p className="text-xl">Enjoy the party <br /> with your friends</p>
                   </div>

                </div>
            </div>
            
        </div>
    );
};

export default MiddilePart;