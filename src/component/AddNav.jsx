import React from 'react'
import { Link } from 'react-router-dom'

const AddNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">User-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Add User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/SearchUser">Search User</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/DeleteUser">Delete User</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/ViewUser">View Users</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AddNav
