'use client';

import "./Navbar.css"; // Importing the CSS file for styling
import location from '../../images/location.png';
import call from '../../images/call.png';
import logo from '../../images/logo.png';
import arr from '../../images/arr.png';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {


 

  return (
    <header className="sticky z-40 w-full top-0">
      <div class="bg-black text-white  flex justify-between p-[10px] items-center">
        <div className="flex ">
          <span role="img" aria-label="location">
            <Image src={location} alt='location' width={20} height={20} />
          </span>
          <h1 className="px-2">Banglore, Karnataka</h1>
        </div>
        <div className="flex items-center">
          <span role="img" aria-label="phone">
            <Image src={call} alt="call" width={20} height={20} />
          </span>
          <h1 className="px-2">+91 99999 99999</h1>
        </div>
      </div>

      <div className="logo-bar ">
        <Image src={logo} alt="ECC Logo" className="logo" width={100} height={50} />
        <button className="quote-btn">Get a Quote ➔</button>
      </div>

      <nav className="main-nav w-[1219px] ">
        <ul style={{lineHeight:'28.81px'}} className=" flex poppins font-[400px] text-[20px] px-[4%] w-full justify-between ">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li className="logogo" > {/*<li className="logogo" onClick={toggleDropdown}> */}
            <Link className="flex items-center" href='/product'><h1>PRODUCT</h1>
            <div className="h-[13px] p-1"><Image className="" src={arr} alt="arrow" width={10} height={10} /></div></Link>
           
            
            {/* {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link href="/product/product1">Product 1</Link></li>
                <li><Link href="/product/product2">Product 2</Link></li>
                <li><Link href="/product/product3">Product 3</Link></li>
              </ul>
            )} */}
            <ul className="dropdown">
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product1">Granular Activted Carbon</Link></li>
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product2">Powder Activted Carbon</Link></li>
                <li className='montserrat font-normal text-[20px]'><Link href="/product/product3">Pelletized Activted Carbon</Link></li>
              </ul>
          </li>
          <li><Link href="/activated">ACTIVATED CARBON</Link></li>
          <li>
            <Link className="flex items-center" href="/application"><h1>APPLICATIONS</h1> </Link>
          </li>
          <li><Link href="/service">SERVICES</Link></li>
          <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
