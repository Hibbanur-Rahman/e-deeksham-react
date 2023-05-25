import React from 'react';
import Accordion from './Accordion';
import './faqs.css';
import img from './img.png';
import {FiMail} from 'react-icons/fi'
import {FiPhoneCall} from 'react-icons/fi'
const Faqs = () => {
  const accordionData1 = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adip',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`
      }
  ];

  return (
    <div>
  <div className="img-div">
    <img className="img-about" src={img} alt />
  </div>
  <div className="main">
    <div className="col-1">
        {accordionData1.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
    </div>
    <div className="col-2">
    <div className="accordion">
        {accordionData1.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  </div>
  <div class="div3">
        <div class="support">
            <h1>Support</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Lor</p>

        </div>
        <div class="mail-us">
            <div className='mail-icon'><FiMail/></div>
            <h3>Mail Us</h3>
            <p>edeekshamsupport@gmail.com</p>
        </div>
        <div class="call-us">
        <div className='call-icon'><FiPhoneCall/></div>
            <h3>Call Us on</h3>
            <p>955226566545</p>
            
        </div>
    </div>
</div>


    //   {/* <h1>React Accordion Demo</h1>
    //   <div className="accordion">
    //     {accordionData.map(({ title, content }) => (
    //       <Accordion title={title} content={content} />
    //     ))}
    //   </div> */}
    // </div>
    
  );
};

export default Faqs;