import { Link } from "react-router-dom";

const EventCard = ({event}) => {
    const {service_name, id, image_url, service_description, price  } = event;
    return (
       <div className="flex ">
         <div className=" ">
            <div className="  rounded-lg">
  <figure><img src= {image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{service_description}</p>
    <div className="card-actions justify-end">
     <Link to = {`/public/celebrations.json/${id}`}> <button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
       </div>
    );
};

export default EventCard;