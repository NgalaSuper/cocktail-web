import React from 'react'
import Wrapper from '../assets/wrapper/ErrorPage';
import {Link, useRouteError} from 'react-router-dom'
import img from '../assets/404-error.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status === 404) {
    return (
      <Wrapper className='divErrorBody'>
        <div className='divError'>
          <img src={img} alt='not found' />
          <h3>Ohhh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to='/' className='link-nav'>back home</Link>
        </div>
      </Wrapper>
    )
  }
  
}

export default Error
