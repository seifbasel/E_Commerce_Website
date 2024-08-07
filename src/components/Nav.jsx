import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-5 absolute z-10 w-full  bg-zinc-900 '>
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] '
          />
        </a>

          <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
            {navLinks.map((item)=>
            (<li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-white'>
                {item.label}</a></li>))}
          </ul>

            <div  className='hidden max-lg:block'>
              <img src={hamburger} alt='hamburger' width={25} height={25}>

              </img>
            </div>
        
      </nav>
    </header>
  )
}

export default Nav