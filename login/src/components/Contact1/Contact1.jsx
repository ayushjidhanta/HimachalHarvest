import React from 'react'

function Contact1() {

  return (
    <div>
      <div className="container mt-5">
      <h1 className="mb-4" Style="color:white; font-family: robot;">CONTACT US</h1>
      <h4 Style="color: white;">WE WILL DEFINITELY LOOK FOR YOUR MAILS AND REVIEWS</h4>
      <form >
        <div className="mb-4">
          <label className="form-label" htmlFor="name" placeholder='Name' Style="color:white;">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" Style="color: white;">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message" Style="color: white;">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-success" type="submit">
         Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact1;
