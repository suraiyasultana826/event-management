import { FaLocationArrow, FaClock, FaPhone, FaRegClipboard } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className="bg-slate-100  justify-evenly p-14 mb-20 md:grid grid-cols-2 lg:flex">
            {/* first card  */}

            <div className="w-52 h-52 bg-white  rounded-lg flex justify-center p-5">
                <div className="flex justify-center">

                    <div >
                        <FaLocationArrow className="w-10 h-10 ml-14 mb-5"></FaLocationArrow>
                        <p className="font-bold text-xl">Postal Address</p>
                        <p>Unica Event Agency
                            85 Fentiman Ave
                            Ottawa, ON K1S 0T7</p>
                    </div>
                </div>
            </div>
            {/* 2nd card  */}

            <div className="w-52 h-52 bg-white rounded-lg p-5">
                <div className="flex justify-center">

                    <div >
                        <FaClock className="w-10 h-10 ml-14 mb-5"></FaClock>
                        <p className="font-bold text-xl">Phone & E-mail</p>
                        <p>Phone: 1-800-64-38
                            Fax: 1-800-64-39
                            office@fable.com</p>
                    </div>
                </div>
            </div>
            {/* 3rd card  */}

            <div className="w-52 h-52 bg-white rounded-lg p-5">
                <div className="flex justify-center">

                    <div >
                        <FaPhone className="w-10 h-10 ml-14 mb-5"></FaPhone>
                        <p className="font-bold text-xl">Open Hours</p>
                        <p>Monday – Friday <br />
                            8.00 am – 5.00 pm <br />
                            Weekend Closed</p>
                    </div>
                </div>
            </div>
            {/* 4th card  */}

            <div className="w-52 h-52 bg-white rounded-lg pt-5">
                <div className="flex justify-center">

                    <div >
                        <FaRegClipboard className="w-10 h-10 ml-14 mb-5"></FaRegClipboard>
                        <p className="font-bold text-xl">Sessions</p>
                        <p>Mornings, 8 am – 12 noon <br />
                            Afternoons, 1 pm – 5 pm <br />
                            Full Day, 8 am – 5 pm</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;