import { useLoaderData } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";

const Services = () => {
    const event = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-5">
              {
                 event.map(events => <Gallery key={events.id} event={events}></Gallery>)
            }
            
        </div>
    );
};

export default Services;