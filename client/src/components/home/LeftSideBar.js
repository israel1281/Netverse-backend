import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar'
import "./LeftSideBar.css"

const LeftSideBar = () => {
const { auth } = useSelector(state => state)
const dispatch = useDispatch

 const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ) 

return (
<div className="sidebar">
<div className="sidebar_top">
<img src=" https://i.ibb.co/rc7Tjmw/computer.png   " alt="background" />
<span className="sidebar_avatar">
<Avatar src={auth.user.avatar} size="big-avatar" />
</span>
<h2>{auth.user.fullname}</h2>
<h4>{auth.user.email}</h4>
</div>

 <div className="sidebar__stats">
                <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">126</p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">67</p>
                </div>

            </div>

  <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('jobs')}
                {recentItem('fintech')}
                {recentItem('spaceX')}
                {recentItem('MongoDB')}
                <h4>Followed Hastags</h4>
                {recentItem('nodejs')}
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('business')}
                {recentItem('tech')}
            </div>

</div>
)
}

export default LeftSideBar
