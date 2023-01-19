import { useState,useEffect } from "react"
import './App.css'
import Button from "./components/Button";
import  ProfileCard from "./components/ProfileCard";
import profiles from './fakeData'
//Counter App
//1.make a Button
//2.detect When a button is clicked
function App(){
  const [count,setCount] = useState(20);
  const [fullname,setFullname] = useState("Waiting for Data")

  const getRandomName = async() =>{
    const response = await fetch("https://randomuser.me/api")
    const data = await response.json()
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last)
    return data.results[0].picture.large
  }
  useEffect(() =>{
    getRandomName();
  },[])
  
  return (
    <>
    <h2>{count}</h2>
    <button onClick={() => setCount(count+1)}>+</button>
    

    <button onClick={() => setCount(count-1)}>-</button>
    <Button title="Buy" color="red"/>
    <Button title="Sell" color="green"/>
    {profiles.map(profile => (
      <ProfileCard 
        image={`https://robohash.org/${Math.random()}.org`}
        name={fullname} 
        title={profile.title} 
        description={profile.description}
        />

    ))}
    </>
  )
}

export default App;