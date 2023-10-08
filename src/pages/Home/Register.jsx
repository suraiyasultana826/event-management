import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [regError, setRegError] = useState('')
    const {createUser} = useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        console.log(form);
        console.log(name, email, password);

        if(password.length< 6){
          setRegError('Password should be at least 6 characters or longer');
          return;

        }

        else if(!/[A-Z]/.test(password)){
          setRegError('Your Password should have at least a capital character');
          return;
        }
        else if(!/[#?!@$%^&*-]]/.test(password)){
          setRegError('Your Password should have at least a special  character');
          return;
        }
        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state: '/');
            toast("Registration Successful!");
        })
        .catch(error => {
            console.error(error)
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
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="text" className="input input-bordered" required name="name" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name='email' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        {
          regError && <p className="text-red-700">{regError}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-500 ">Register</button>
        </div>
      </form>
      <p className="text-center mb-8">Already have an account? <Link className="font-bold text-blue-700" to='/login'>Login</Link></p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;