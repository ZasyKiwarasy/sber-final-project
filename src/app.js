import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'
import Post from './pages/post'
import PostEdit from './pages/post-edit'
import PostNew from './pages/post-new'


export default function App() {
    return (
        <>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/post' element={<Post />} />
            <Route path='/post-new' element={<PostNew />} />
            <Route path='/post-edit' element={<PostEdit />} />
         </Routes>
        </>
    )
}

function Header() {
    return (<header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/post-new'>New Post</Link></li>
            </ul>
        </nav>
    </header>)
}