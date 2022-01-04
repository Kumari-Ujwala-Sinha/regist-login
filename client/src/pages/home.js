import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import Avatar from '../components/Avatar';


const Home = () => {
    const [userData, setUserData] = useState([]);
    const { auth } = useSelector((state) => state);
    useEffect(()=>{
        setUserData([auth.user])
    },[])
    
    return (
         <div className="info">
      {userData.map((user) => (
        <div className="info_container" key={user._id}>
          <Avatar size="super-avatar" src={user.avatar} />
          <div className="info_content">
            <div className="info_content_title">
              <h2>{user.username}</h2>
              
            </div>
            
            <h6>
              {user.firstname} {user.lastname}<span className="text-danger pl-2">{user.mobile}</span>
            </h6>
            <p className="m-0">{user.address}</p>
            <h6>{user.email}</h6>
            
           
          </div>
       
        </div>
      ))}
    </div>
    )
}

export default Home
