import React from 'react'
import "./Menu.css"
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Menu = ({ avatar, Icon , title, onClick }) => {

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'
    }

return (
<div className="headerOption">
{Icon && <Icon className="headerOption_icon" />}
<h3 className="headerOption_title">{title}</h3>
</div>
)
}

export default Menu
