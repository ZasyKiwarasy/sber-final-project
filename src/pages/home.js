import React, { useEffect, useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://api.react-learning.ru/posts', {
            headers: {
              authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
            }
          })
            .then(res => res.json())
            .then((result) => {
                setPosts(result)
            })
    }, [])


    return (
        <main>
            {posts.map(post => <Post post={post} key={post._id} />)}
        </main>
    )
}

function Post(props) {

    return (
        <div className='Home-post' >
            <div>{props.post.title}</div>
            <div>{props.post.author.name}</div>
            <div>{props.post.text}</div>
            <div>{props.post.created_at}</div>
            <div>{props.post.updatedAt}</div>
            <div>{props.post.tags}</div>
            <img src={props.post.image} width={250} height={250} />
        </div>
    )
}