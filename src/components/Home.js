import React,{ useState } from 'react'
import styles from './Home.css'
import {NavLink} from 'react-router-dom'

const Home = () => {

    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        password:"",
    })
    const[data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e)=>{
        // console.log(e.target.value);
        // const value= e.target.value;
        const value=e.target.value;
        const name= e.target.name;
        // const {value,name}= e.target;
        console.log(value,name);
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }
    const addData = (e) =>{
        e.preventDefault();
        const{name,email,password} = inpval;
        if(name === ""){
            alert("name is required");
        }
        else if(email === ""){
            alert("email is required");
        }
        else if(!email.includes("@")){
            alert("email is invalid");
        }
        else if(password.length<5){
            alert("invalid password length");
        }else{
            console.log("data added successfully");
        }
        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }
  return (
    <>
        <div className="container">
            <section>
                <div className='left_data'>
                    <h3>Sign Up</h3>
                    <form action="" className="form">
                       
                        <input name='name' onChange={getdata} type="text" id="name" placeholder="Enter name"/> <br/>
                        
                        <input name='email' onChange={getdata} type="email"id="email" placeholder="enter email" /> <br/>
                       
                        <input name='password' onChange={getdata} type="password" id="password" placeholder="enter password"/> <br/>
                        <button className="btn" onClick={addData} id="btn">Sign Up</button>
                        <p>Already Have an Account?    <span><NavLink to="/login">Sign in</NavLink></span> </p>


                    </form>
                </div>
                <div className="right_data">
                
                </div>
            </section>

        </div>
    </> 
  )
}

export default Home
