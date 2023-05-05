import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +60123456789</label> 
            <i className='fa fa-envelope'></i>
            <label> shopbuddies@gmail.com</label>
          </div>
          <div className='right row RText'>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>MYR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
