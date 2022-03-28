import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { logout } from "../../redux/actions/authAction"
import { GLOBALTYPES } from "../../redux/actions/globalTypes"
import Avatar from "../Avatar"
import { useSelector, useDispatch } from "react-redux"
import Menu from './Menu'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotifyModal from "../NotifyModal"


const Header = () => {
const { auth, theme, notify } = useSelector(state => state)
const dispatch = useDispatch()


const navLinks = [
{ title: "Home", icon: [HomeIcon], path: "/" },
{ title: "Message", icon: [ChatIcon], path: "/message" },
{ title: "Explore", icon: [SupervisorAccountIcon], path: "/discover" },
]

return (
<div className="header">
<div className="header_left">
<img
onClick={() => window.scrollTo({top: 0})}
src="https://i.ibb.co/rc7Tjmw/computer.png"
alt="lit logo"
/>
<div className="header_search">
<Search />
</div>
</div>
 
<div className="header_right">
{
navLinks.map((link, index) => (
<NavLink style={{textDecoration: 'none'}} to={link.path} activeStyle={{
fontWeight: 'bold',
color: "red"
}}  >
<Menu Icon={link.icon[0]} title={link.title} />
</NavLink>
))
}

<div className="dropdown">
<span style={{color: notify.data.length > 0 ? 'crimson' : ''}}>
<Menu Icon={NotificationsIcon} title="Notifications" />
</span>

<span className="notify_length">{notify.data.length}</span>


<div className="dropdown-content">
<NotifyModal />
</div>
</div>

<div className="nav-item dropdown" style={{opacity: 1}} >
<span className="nav-link dropdown-toggle" id="navbarDropdown" 
role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<Avatar src={auth.user.avatar} size="medium-avatar" />
</span>

<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<NavLink className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</NavLink>

<label htmlFor="theme" className="dropdown-item"
onClick={() => dispatch({
type: GLOBALTYPES.THEME, payload: !theme
})}>

{theme ? 'Light mode' : 'Dark mode'}
</label>

<div className="dropdown-divider"></div>
<NavLink className="dropdown-item" to="/"
onClick={() => dispatch(logout())}>
Logout
</NavLink>
</div>
</div>

</div>
</div>
)
}

export default Header
