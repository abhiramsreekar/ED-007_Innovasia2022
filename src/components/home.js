import React from 'react'
import './home.css'

export default function home() {
  return (
    <div className=" py-3 px-3 homePage bg-dark ">
        <div className="row align-items-start">
            <div className="col c1">
              <strong>Smart Learning Recommendation System</strong>
              <p className='coltext text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat sapiente vel nostrum veniam officia necessitatibus quos vero cupiditate, mollitia ab molestias dolorum ipsam autem tempora sed non impedit voluptate exercitationem. Doloribus error cupiditate a culpa repellat, deserunt minus quisquam fugit voluptatibus nisi delectus excepturi nostrum pariatur dolorum maiores tempora! </p></div>
            <div className="col c2">
                <div className="register">
                    <p><strong>If you are a new user</strong></p>
                    <button><strong>Begin your journey !</strong></button>
                    <br />
                    <p><strong>Been here already</strong></p>
                    <button><strong>Continue your progress !</strong></button>
                </div>
            </div>
        </div>
    </div>
  )
}
