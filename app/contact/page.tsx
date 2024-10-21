import React from 'react'
import './Contact.css'
import Image from 'next/image'
import location from '../images/contact/location.svg';
import mail from '../images/contact/mail.svg';
import link from '../images/contact/link.svg';
import phone from '../images/contact/phone.svg';


function Contact() {
  return (
    <div>
        
     <section>
     <div className="items-center justify-center relative m-[3rem] flex ">
      {/* Contact Details Section */}
      <div style={{background: 'linear-gradient(270deg, #000000 0%, #494D55 110.83%);'}} className="right-[-100px] bg-[#1e1e1e] text-white p-[30px] overflow-hidden rounded-[8px] w-[328px] h-[406px] text-left relative z-10">
        <h3 className='py-3 text-xl'>Contact Us</h3>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={location} alt='location' /> <p className='px-1'>Banglore, Karnataka</p></div>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={mail} alt='mail' /> <p className='px-1'> support@estellaecocarbon.com</p></div>
        <div className='flex text-xs py-2 items-center'><Image width={20} src={phone} alt='phone' /> <p className='px-1'> +91 94818 73543</p></div>
        {/* <div className='flex text-xs py-2 items-center'><Image width={20} src={link} alt='internet' /> <p className='px-1'> Lorem Ipsum is simply dummy text</p></div> */}
  
      </div>
      <div style={{boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.3);'}} className="contact-form">
        <h3>Get in Touch</h3>
        <p>Lorem Ipsum is simply dummy text</p>
        <form>
          <input type="text" placeholder="Name" className="input" />
          <input type="email" placeholder="Email Id" className="input" />
          <textarea placeholder="Type your message here..." className="textarea"></textarea>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
     </section>
 
    </div>
  )
}

export default Contact
