import { login, signup } from './actions'

import './styles.css'

export default function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="title">Welcome Back</h2>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <div className="button-group">
          <button type="submit" formAction={login} className="login-button">Log in</button>
          <button type="submit" formAction={signup} className="signup-button">Sign up</button>
        </div>
      </form>
    </div>
  )
}