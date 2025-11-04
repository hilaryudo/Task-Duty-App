import React from 'react'

const ScrollToTop = () => {
    function onTop() {
        window.scrollTo(0, 0);
    }
  return (
    <div>
        <p onClick={onTop} className='cursor-pointer font-normal text-[#974FD0] text-[24px] underline text-center py-7'>Back To Top</p>
    </div>
  )
}

export default ScrollToTop