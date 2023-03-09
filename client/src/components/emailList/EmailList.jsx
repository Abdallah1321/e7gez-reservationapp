import './emailList.css'

const EmailList = () => {
  return (
    <div className="email">
        <h1 className="emailTitle">Lets stay connected!</h1>
        <span className="emailDesc">Sign up and we will keep you updated with all our awesome offers!</span>
        <div className="emailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe!</button>
        </div>
    </div>
  )
}

export default EmailList