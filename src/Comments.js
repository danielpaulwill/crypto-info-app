import react, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Comments() {
  const [commentData, setCommentData] = useState([])
  const [formNameData, setFormNameData] = useState("")
  const [formCommentData, setFormCommentData] = useState("")

  console.log(formCommentData)

  useEffect(() => {
    clock()
    fetch('http://localhost:3000/comments')
      .then(res => res.json())
      .then(data => setCommentData(data))
  }, [])

  let clock = () => {
    let date = new Date();
    let month = date.getMonth()
    let day = date.getDate()
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${month}, ${day} - ${hrs}:${mins}:${secs}`
    console.log(time)
  }

  const alternatingColor = ['card1', 'card2'];

  const commentCards = commentData.map((post, index) => (
    <div key={post.id} className={alternatingColor[index % alternatingColor.length]}>
      <h3>{post.commenter}</h3>
      <p>{post.time}</p>
      <p>{post.comment}</p>
    </div>
  ))
  
    function handleOnSubmit(e) {
      e.preventDefault()
      console.log(e)
    }

  return (
    <div>
       <div className="labelBar">
         <form className="form">
           <input id="formName" type="text" placeholder="Name..." onChange={e => setFormNameData(e.target.value)}></input>
           <input id="formComment" type="text" placeholder="Comment..." onChange={e => setFormCommentData(e.target.value)}></input>
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