import react, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Comments() {
  const [commentData, setCommentData] = useState([])
  const [formNameData, setFormNameData] = useState("")
  const [formCommentData, setFormCommentData] = useState("")
  const [postTime, setPostTime] = useState('')

  useEffect(() => {
    clock()
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then(data => setCommentData(data))
  }, [])

  let clock = () => {
    const monthText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayText = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] 
    let date = new Date();
    let dateNum = date.getDate()
    let month = monthText[date.getMonth()]
    let day = dayText[date.getDate()]
    let hrs = date.getHours();
    let mins = date.getMinutes();
    
    let time = `${day}, ${month} ${dateNum} - ${hrs >= 12 ? hrs - 12 : hrs}:${mins < 10 ? `0${mins}` : mins} ${hrs >= 12 ? 'PM' : 'AM'}`

    setPostTime(time)
  }

  const alternatingColor = ['card1', 'card2'];

  const commentCards = commentData.map((post, index) => (
    <div key={post.id} className={alternatingColor[index % alternatingColor.length]}>
      <h3>{post.name}</h3>
      <p>{post.time}</p>
      <p>{post.comment}</p>
      <button onClick={handleDelete(post.id)}>X delete X</button>
    </div>
  ))
  
    function handleOnSubmit(e) {
      e.preventDefault()
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": `${formNameData}`,
          "time": `${postTime}`,
          "comment": `${formCommentData}`
        }),
      })
      .then(res => res.json())
      .then(data => setCommentData([...commentData, data]))
      setFormNameData("")
      setFormCommentData("")
    }

    function handleDelete(id) {
      fetch(`http://localhost:3000/comments/${id}`, {
        method: 'DELETE'
      }),
      .then(res => res.json())
      .then(data => console.log(data))
    }

  return (
    <div>
       <div className="labelBar">
         <form className="form">
           <input id="formName" type="text" placeholder="Name..." onChange={e => setFormNameData(e.target.value)} value={formNameData}></input>
           <input id="formComment" type="text" placeholder="Comment..." onChange={e => setFormCommentData(e.target.value)} value={formCommentData}></input>
           <input type="submit" id="form" name="commentForm" onClick={handleOnSubmit}></input>
         </form>
      </div>
      <div id="cardContainer">
        {commentCards}
      </div>
    </div>
  )
};

export default Comments;