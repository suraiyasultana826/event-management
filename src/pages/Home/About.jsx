import { useParams } from "react-router-dom";


const About = () => {
    const {id, image_url} = useParams();
    return (
        <div>

           
            <h1>this is about section</h1>
            <img src={image_url} alt="" />
            <p>{id}</p>
            
        </div>
    );
};

export default About;