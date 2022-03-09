import "./App.css"
import { useEffect } from 'react'
import Alert from './components/alert/Alert'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import { getPosts } from './redux/actions/postAction'
import { getSuggestions } from './redux/actions/suggestionsAction'

import io from 'socket.io-client'
import {
  GLOBALTYPES
}  from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import {
  getNotifies
} from './redux/actions/notifyAction'
import Peer from 'peerjs'


function App() {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  useEffect(() => {
    if(!("Notification" in window)) {
      alert("This browser does not support desktop notification")
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      })
    }
  },[])

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })

    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])

  return (
   <Router>
    <Alert />
   </Router>
);
}

export default App;
