import React,{useState} from "react";

const Signin =()=>{
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
    if(!name || !email || !password){
        alert("please fill all feilds")
    }
    else{
        alert(`sign in successfull \nName: ${name} \nEmail: ${email}`)
    }

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          required placeholder="type name here.."  style={{ width: "100%", padding: "8px", margin: "10px 0" }}/>

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="type email here"  style={{ width: "100%", padding: "8px", margin: "10px 0" }}/>

            <label>Password:</label>
            <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="type password here"  style={{ width: "100%", padding: "8px", margin: "10px 0" }}/>
            <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>
        Sign In
      </button>
        </form>
    )
}
export default Signin