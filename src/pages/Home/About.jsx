import { useParams } from "react-router-dom";
import Services from "./Services";



const About = ({event}) => {
    const {id} = useParams();
    const {image_url, price} = event || {};
    return (
        <div>
            <Services></Services>
            <img src={image_url} alt="" />
          <p>{id}</p>
              
        </div>
    );
};

export default About;