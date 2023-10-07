import Header from "./Header";
import banner from '../../assets/8107880.jpg'
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import About from "./About";


const Home = () => {
    const event = useLoaderData();
    console.log(event);
    return (
        <div className="w-3/4 mx-auto">
            <Header></Header>
           
          <div className='w-full h-screen mb-20 bg-no-repeat bg-cover ' style={{backgroundImage: `url(${banner})`}}>
           <div className="flex justify-center items-center content-center pt-28 pl-20 md:pl-0 lg:pl-0 md:pt-40 lg:pt-80">
           <div>
           <h1 className="font-bold text-blue-500 lg:text-5xl">CELEBRATION</h1>
            <p className="lg:pl-20 pt-4">Social Event Agency</p>
           </div>
           </div>
          </div>
         <div className="flex justify-center mb-20">
         <p className="font-bold text-4xl text-blue-500">OUR SERVICES</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10">
            {/* //news container */}
            {
                event.map(events => <EventCard key={events.id} event={events}></EventCard>)
               
               
            }
          
          
         </div>
           
            
        </div>
    );
};

export default Home;