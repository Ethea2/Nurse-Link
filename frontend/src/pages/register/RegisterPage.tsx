const RegisterPage = () => {
  return (
    <>
      <div>
        <span> Register Page </span>
        <div>
          <form method="post" >
            <label htmlFor="username"> 
                Username
                <input name="username"/> 
            </label>
            <br/>
            <label htmlFor="password"> 
                Password
                <input name="password" type="password"/> 
            </label>
            <br/>
            <button type="submit">Log In</button>
          </form>
        </div>
        
        <div>
          Not a member? Sign up.
        </div>
      </div>
    </>
  );
}

export default RegisterPage