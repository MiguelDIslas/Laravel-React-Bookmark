import React from 'react'

const WelcomePage:React.FC = () => {
    return (
      <div className="container">
        <h1>Welcome to Bookmark app</h1>
        <p>
          <a href="/login">Login here</a>
        </p>
        <p>
          <a href="/register">SignUp here</a>
        </p>
      </div>
    );
}

export default WelcomePage;