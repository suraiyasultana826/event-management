import { useParams } from "react-router-dom";
import anniversary from '../../assets/anniversary.jpg';
import birthday from '../../assets/birthday-celebrations-with-screaming-friends.jpg'
import wedding from '../../assets/wedding.jpg'




const About = () => {
    const {id} = useParams();
    // const {image_url, price} = event || {};
    return (
        <div className="w-2/4 mx-auto">
            {/* <img src={anniversary} alt="" />
            <img src={birthday} alt="" /> */}
            <img  src={wedding} alt="" />
            <p className="font-bold text-3xl text-black">Weddings</p>
            <p>Celebrate love with our exquisite wedding planning services. From intimate ceremonies to grand receptions, we create unforgettable moments that reflect your unique style. Our expert team takes care of every detail, from venue selection and decor to catering and entertainment, ensuring your special day is nothing short of magical.</p>
            <p>Price: 4000$</p>
          
          <p>{id}</p>
              
        </div>
    );
};

export default About;