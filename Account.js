import React from 'react'

export default function Account(){
    return(
        <>
        <table border='1px'>
            <tr>
                <th>Balance</th>
                <th>Name</th>
                <th>Mobile</th>
            </tr>
            <tr>
                <td>{data.balance}</td>
                <td>{data.name}</td>
                <td>{data.mobile}</td>
            </tr>
        </table>
        </>
    )
}