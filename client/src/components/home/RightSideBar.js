import React from 'react'
import "./RightSideBar.css"
import { useSelector, useDispatch } from 'react-redux'

import RightUserCard from '../RightUserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="widgets">

            <div className="widgets_header">
                <h6>Suggestions for you</h6>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <RightUserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </RightUserCard>
                        ))
                    }
                </div>
            }


        </div>
    )
}

export default RightSideBar
