import { Link } from 'react-router-dom';
import error from '../assets/404-error-template-3.webp'
const ErrorPage = () => {
    return (
        <div>
            <div className='w-full h-screen mb-20 bg-no-repeat bg-cover ' style={{backgroundImage: `url(${error})`}}>
            <div className='mt-6 ml-10'>
            <Link to ='/'>   <button className='btn btn-secondary bg-black' >Go To Home</button></Link>
            </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;