import axios from "axios";
import{useEffect, useState} from "react";

export default function App(){
  return(
    <>
    <sender />
    <br/>
    <br/>
    </>
  );
}

function MyComponent(){
  const[username, setUsername]=useState("");
  const[email, setemail]=useState("");
  const[password, setpassword] = useState("");
  const[list, setList]=useState([]);
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleemailChange = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async() => {
    if (username == "" || password ==""){
      alert("Validation fails");
      return;
    }

    const url = "http://localhost:4000/add-message";
    const data ={
      username:username,
      password:password,
      email:email

    };

    //Ajax 
    await axios.post(url,data);
    const newList = [data, ...list];
    setList(newList);

    
    setusername("");
    setPassword("");
    setemail("");
    };

    const getUser1= async() => {
      const url="http://localhost:4000/users";
      const result = await axios.get(url);

      const list = result.data;
      const newList = [...list];
      setList(newList);
    };

    const getUser= async() => {
      const url="http://localhost:4000/users";
      const result = await axios.fetch(url);
      const list = await result.json();

      const newList = [...list];
      setList(newList);
    };

    //like constructor
    useEffect(() => getUser(),[]);

    return(
      <div>
        <h2 className="bg-dark text-light p-3">User Registration</h2>
        <div>
          <input
            className="form-control form-control-lg mb-l "
            type="text"
            id=""
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Username"

          />
        </div>

       <div>
          <input
            className="form-control form-control-lg mb-l "
            type="text"
            id=""
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"

          />
      </div>
    
      <div>
          <input
            className="form-control form-control-lg mb-l "
            type="text"
            id=""
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"

          />
      </div>
      <input
        className="btn btn-secondary w-100 "
        type = "button"
        name=""
        value="Register"
        onClick={addUser}
      
      
      
      
      />

     <h3 className="bg-dark text-light mt-1 p-3">User List</h3>
     {
       list.map((item, index)=>(
        <div key ={index} className="alert alert-secondary fs-4">
          {item.username}{item.pssword}{item.email}
</div>
       ))}
</div>
    
    
    
    
    
    
    
    )


}


function sender()
{
  const[sMessage, setsMessage]=useState("");
  const[list, setList]=useState([]),

  const handleUsernameChange = (e) => {
    setsMessage(e.target.value);
  };

}
