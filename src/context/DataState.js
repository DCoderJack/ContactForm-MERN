import React, { useState } from 'react'
import DataContext from './dataContext'

const DataState = (props) => {

    const host = "http://localhost:5000"
    const dataInitial = []
    const [datas, setDatas] = useState(dataInitial);

    // Add data in the contact form
    const addData = async(userName, email, age, phoneno, subject, message) => {
        // TODO : API Call
        const response = await fetch(`${host}/api/contactform/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, email, age, phoneno, subject, message}) // body data type must match "Content-Type" header
        });

        const data = await response.json();
        setDatas(datas.concat(data));
    }

    return (
        
            <DataContext.Provider value = {{datas, addData}}>
                {props.children}
            </DataContext.Provider>
        
    )
}

export default DataState;