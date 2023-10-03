const RegisterPage = () => {
  return (
    <>
      <div className="loginPage flex items-center justify-center w-full gap-2 h-screen">
        <div className="leftPage flex items-center justify-center flex-col">
          <div className="titleAndLogo flex items-center">
            <div className="logoPng ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png" className="object-scale-down h-14 w-14"/>
            </div>
            <div className="title text-6xl font-bold"> 
              NurseLink
            </div>
          </div>
          <div className="welcomeTitle text-4xl"> Welcome Back. </div>
          <div className="containPwUsername float-left" >
            <form method="post" className="flex items-center flex-col" >
              <label htmlFor="username"> 
                  Username
                  <br/>
                  <input name="username" id="username" className="bg-slate-200"/> 
              </label>
              <br/>
              <label htmlFor="password"> 
                  Password
                  <br/>
                  <input name="password" type="password" id="password" className="bg-slate-200"/> 
              </label>
              <br/>
              <button type="submit" className="loginBtn bg-slate-400 ">Log In</button>
            </form>
          </div>
          
          <div>
            Not a member? Sign up.
          </div>
        </div>
        <div className="rightPage">
          <img src="https://t4.ftcdn.net/jpg/00/66/01/29/360_F_66012928_ztFfdS8dnLgghWKWxrDOH8FfhrzAkI2Z.jpg"/>
        </div>
      </div>
    </>
  );
}

export default RegisterPage