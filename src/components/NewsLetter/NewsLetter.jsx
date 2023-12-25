import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <>
        <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
            Unlock success with our latest updates! Dive into our curated content for valuable insights, tips, and exciting news. Stay connected and stay ahead!
            </p>
          </div>
          <form className="newsletter-form">
            <input
              type="text"
              className="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required
              autoComplete='off'
            />
            <button type="submit" className="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewsLetter;