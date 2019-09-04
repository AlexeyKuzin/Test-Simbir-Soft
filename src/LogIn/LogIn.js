import React from 'react'

const RenderLogIn = () => {
    return (
        <form>
        <div className="form-group">
          <label>Login</label>
          <input type="email" className="form-control" 
          placeholder="Enter Login" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" 
          id="InputPassword1" placeholder="Enter yor Password" />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    )
}

export default RenderLogIn