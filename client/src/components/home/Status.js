import React from 'react'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import "./Status.css"

const Status = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="form">
            <Avatar src={auth.user.avatar} size="medium-avatar" />
            
            <button className="button"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                {auth.user.username}, what are you thinking?
            </button>
        </div>
    )
}

export default Status
