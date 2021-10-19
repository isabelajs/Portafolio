import React from 'react';
import { IconLoader } from '@components/icons';


const Loader = ({ finishLoading }) => {
  return (
    <div className='loader'>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </div>
  )
}

export default Loader;