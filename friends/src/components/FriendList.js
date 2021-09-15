import React, {useState, useEffect} from "react";
import axiosWithAuth from "../tools/axiosWithAuth";
import Friend from "./Friend";

const FriendList = ()=>{

    const [friends, setFriends] = useState([]);
    const [didFetch, setDidFetch] = useState(false);

    useEffect(()=>{
        axiosWithAuth().get('/friends')
                       .then(res=>{
                          setFriends(res.data);
                          setDidFetch(true);
                       })
                       .catch(err=>{
                            console.log(err.response)
                       })
    },[]);

    return(
        <div>
            <h2>Friends</h2>
            {didFetch && friends.map((friend)=>
                <Friend friend={friend} key={friend.id}></Friend>
            )}
        </div>
    )
}

export default FriendList;