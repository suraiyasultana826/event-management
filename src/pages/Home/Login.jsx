import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {


  


    const {signIn} = useContext(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state: '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    const { googleSignIn } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state: '/');
      toast('Login successful!')
    })
    .catch(error => {
      console.error(error);
  })
  }
    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
    <div className="text-center md:text-left lg:text-left">
     
    <iframe className="h-80 w-80" src="https://lottie.host/?file=168683c9-2572-4bf0-9abd-6372258a362c/5qNqQmJ7rE.json"></iframe>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} ><div  className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control mt-6">
          <button   className="btn btn-primary bg-blue-500 ">Login</button>
        </div>
        
      </div></form>
      <div className="form-control pl-7 pr-7 pb-7">
          <button onClick={handleGoogle} className="btn btn-primary bg-pink-500 ">Google</button>
        </div>
     
      <p className="text-center mb-8">Do not have an account? <Link className="font-bold text-blue-700" to='/register'>Register</Link></p>
      
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Login;