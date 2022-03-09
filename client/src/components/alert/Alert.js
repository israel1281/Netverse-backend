import React from 'react'


import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
 

    return (
        <div>
         <Loading /> 
         <Toast msg="error" bgColor="bg-danger" />
         <Toast msg="success" bgColor="bg-success" />
        </div>
    )
}

export default Notify
