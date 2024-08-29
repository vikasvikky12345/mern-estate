import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="bg-slate-400 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap gap-1">
                <span className="text-slate-600">Vikas</span>
                <span className="text-slate-900">Estate</span>
            </h1>
            <form action="" className="flex items-center justify-around bg-slate-200 p-2 rounded-lg ">
                <input type="text" placeholder="search ....." className="bg-transparent focus:outline-none w-24 sm:w-64"/>
                <FaSearch className='text-slate-400 '/>
            </form>
            <ul className='flex gap-4'>
                <Link to="/">
                <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer hover:text-slate-800'>Home</li></Link>
                <Link to="/about">
                <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer hover:text-slate-800'>About</li>
                </Link>
                <Link to="/signup">
                    <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer hover:text-slate-800'>Sign In</li>
                </Link>
                
            </ul>
        </div>
    </header>
  )
}

export default Header
