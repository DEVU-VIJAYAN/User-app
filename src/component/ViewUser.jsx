import React, { useEffect, useState } from 'react'
import AddNav from './AddNav'
import axios from 'axios'

const ViewUser = () => {
    const [User, SetUser] = useState(
        []

    )
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response) => {
                SetUser(response.data)
            }
        ).catch()
    }
useEffect(()=>{fetchData()},[])

    return (
        <div>
            <AddNav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                            </tr>
                            {User.map(
                                (value, index) => {
                                    return (
                                        <tbody>
                                            <tr>
                                                <th scope="row">{value.id}</th>
                                                <td>{value.name}</td>
                                                <td>{value.Username}</td>
                                                <td>{value.email}</td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            )}

                        </table>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
