import React, { useEffect, useState } from 'react'
import useUser from '../Hooks/useUser';

function Home() {
  const { state: { users }, get } = useUser();
  // const [name,setName] = useState("");
  // const [username,setUsername] = useState("");

  const [values , setValues]= useState({
    password: "",
    name:"",
    username:"",
  });

  useEffect(() => {
    get()

  }, [])

  // const handleName =(event)=>{
  //   const {target:{value}} = event;
  //   setName(value);
  // }
  // const handleUsername =(event)=>{
  //   const {target:{value}} = event;
  //   setUsername(value);
  // }

  const handleChange=(event)=>{
    const {target:{value,name}} = event;
    console.log(name);
    setValues((prevValues)=>{
      return {...prevValues , [name]:value}
    })
  }
  return (
    <div>
      {/* <h1>id:{user.id}</h1>
            <h1>name:{user.name}</h1> */}
      {/* <button onClick={update}>uPDATE STATE</button> */}
      <div>
        <form>
          <label>Password : </label>
          <input type='text' name='password' onChange={handleChange}/>
          <label>name : </label>
          <input type='text' name='name' onChange={handleChange}/>
          {" "}
          <label>username : </label>
          <input type='text' name='username' onChange={handleChange}/>
          {" "}
          <input type='submit' />
        </form>
      </div>
      {
        users.length > 0 && users.map(user => <h1 key={`user-${user.id}`}>{user.name}</h1>)
      }
    </div>
  )
}

export default Home;