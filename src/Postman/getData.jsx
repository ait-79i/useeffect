import axios from "axios";
import React,{useState, useEffect}from "react";
//https://jsonplaceholder.typicode.com/posts
function Get(){
                const [posts , setPosts] = useState([]);
                const [id, setId] = useState(4);
                const[idSbm,setIdSbm]=useState(4);
                useEffect(()=>{
                    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
                      console.log(res.data)
                       setPosts([res.data]);
                    }).catch((res)=>{
                      console.log(res.status)
                      console.log(res.message)
                    })
                },[idSbm])
                const handleClick =()=>{
                    setIdSbm(id)
                }
                return (
                  <div>
                    
                    <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
                    <br />
                    <button type="button" onClick={handleClick}>Envoyer</button>
          
                    {posts.map(post => 
                    <div>
                    <p key={post.id}> {post.id} -{post.title}</p>
                     <p>{post.body}</p>
                     </div>
                    )
                    }
                  </div>
                );
              }
export default Get;
