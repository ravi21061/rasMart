import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex  items-center justify-between py-5 font-medium'>
      <Link to="/">
        <img
          className='w-36'
          src={assets.logo}
          alt="example"
        />
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
        <NavLink to='/' className='flex flex-col item-center gap-1'>
          <p >HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col item-center gap-1'>
          <p >COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col item-center gap-1'>
          <p >ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col item-center gap-1'>
          <p >CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='cursor-pointer w-5' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='cursor-pointer w-5' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2  py-3 px-5 w-36 bg-slate-100 text-grey-500 rounded'>
              <p className='hover:text-black cursor-pointer'>My Profiles</p>
              <p className='hover:text-black cursor-pointer'>Orders</p>
              <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>

        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='cursor-pointer w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px]  w-4  text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='cursor-pointer sm:hidden w-5' />
      </div>
      {/* Side bar menu for side screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition all ${visible ? 'w-full' : 'w-0'}`}>
        <div onClick={() => setVisible(false)} className='flex item-center cursor-pointer gap-4 p-3'>
          <img src={assets.dropdown_icon} className='h-4 rotate-180' />
          <p>Back</p>
        </div>

        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/' >Home</NavLink>
        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection' >Collection</NavLink>
        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about' >About</NavLink>
        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact' >Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar