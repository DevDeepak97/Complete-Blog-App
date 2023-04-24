import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      setUsername('')
      setPassword('')
      //alert('registration successful');
      toast.success("registration successful!",{
        position: "bottom-center"
      });
    } else {
      setUsername('')
      setPassword('')
      //alert('registration failed');
      toast.error("Registration failed!",
      {
        position: "bottom-center"
      });
    }
  }
  return (
    <div className="box__design">
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>
    <ToastContainer />
    </div>
  );
}