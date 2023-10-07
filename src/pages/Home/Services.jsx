import { useLoaderData } from "react-router-dom";
import About from "./About";

const Services = () => {
    const event = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-5">
              {
                 event.map(events => <About key={events.id} event={events}></About>)
            }
            
        </div>
    );
};

export default Services;