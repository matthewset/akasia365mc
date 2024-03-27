import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../../components/english/NavigationBar.js';
import axios from 'axios';

function EnHome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const images = [
    `${process.env.PUBLIC_URL}/images/model/365mcModel1.png`,
    `${process.env.PUBLIC_URL}/images/model/365mcModel2.png`,
    `${process.env.PUBLIC_URL}/images/model/365mcModel3.png`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const scroll = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight;
    chatContainerRef.current.scrollTo(0, scroll);
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage) return;
    const tempMessages = [...messages, { from: 'user', text: newMessage }];
    setMessages(tempMessages);
    setNewMessage('');

    try {
      const response = await axios.post('https://365mc-bots.vercel.app/chat', {
        message: newMessage,
      });

      if (response.data && response.data.response) {
        setMessages([...tempMessages, { from: 'bot', text: response.data.response }]);
      }
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <div className="max-w-full overflow-x-hidden">
      <NavigationBar />
      <div className="relative my-8">
        <div className="overflow-hidden">
          <img src={images[currentImageIndex]} alt="Model" className="w-full h-auto" />
          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white py-2 px-6 rounded-full hover:bg-white hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <b>Book Now</b>
            <img 
              src={isHovered ? `${process.env.PUBLIC_URL}/icons/arrow-orange.svg` : `${process.env.PUBLIC_URL}/icons/arrow-white.svg`}
              alt="Arrow" 
              className="ml-2" 
            />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-4 w-4 rounded-full ${index === currentImageIndex ? 'bg-amber-500' : 'bg-white'}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-3xl text-amber-500">Have any questions? Contact us or ask our AI consultant, Sunhee!</p>
      </div>
      <div className="flex flex-col my-8 mx-auto p-6 bg-white border border-grey rounded-lg shadow max-w-md">
        <div className="flex items-center mb-4">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2b/a7/98/2ba7982b-9743-5027-97ee-aad107ae8202/AppIcon-0-0-1x_U007epad-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          <span className="font-bold text-amber-500">Sunhee</span>
        </div>
        <div ref={chatContainerRef} className="flex flex-col h-64 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 ${msg.from === 'user' ? 'self-end bg-amber-500 text-white' : 'self-start bg-gray-300 text-black'} my-1 rounded`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
          />
          <button
            className="bg-amber-500 text-white p-2 rounded-r-lg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>

      <div className="rounded-3xl p-5 my-8 mx-auto" style={{ background: 'linear-gradient(to bottom, #fcc930, #ffffff)' }}>
        <div className="text-center my-4">
          <p className="text-3xl text-white">#LebihSimple #LebihPasti #LAMSaja</p>
        </div>
        {/* Wrapper div with Tailwind classes for horizontal scrolling */}
        <div className="flex justify-center overflow-x-auto space-x-10 py-2">
          <div className="instagram-embed min-w-max" dangerouslySetInnerHTML={{__html: `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C4ffvuQvCPQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
          `}} />
          <div className="instagram-embed min-w-max" dangerouslySetInnerHTML={{__html: `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C4cUy3bPBMO/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
          `}} />
          <div className="instagram-embed min-w-max" dangerouslySetInnerHTML={{__html: `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C4cy-RVPvqp/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
          `}} />
        </div>
      </div>
      
      <div>
        <div className="text-center my-4">
          <p className="text-3xl text-amber-500"><b>Location</b></p>
          <br/>
          <p className="text-lg text-black">Mayapada Hospital Jakarta Selatan, Tower 2, 6th Floor</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="my-8 w-full sm:w-3/4 h-[600px]">
            <iframe
              title="Mayapada Hospital South Jakarta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4060915.789803911!2d101.90783121250006!3d-6.298109199999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f00fe6edf7%3A0xb664883bee56870c!2sMayapada%20Hospital%20South%20Jakarta!5e0!3m2!1sen!2suk!4v1711556850073!5m2!1sen!2suk"
              className="w-full h-full" // This makes the iframe responsive
              style={{ border: 0, display: 'block', margin: 'auto' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 py-4 pl-20 mx-auto max-w-3xl pb-10">
        <div className="flex-1">
          <p className="text-amber-500 text-3xl font-bold">Contact</p>
          <ul className="list-none space-y-2 mt-4 text-left">
            <li>Call: (021) 2921-7777 ext 3601</li>
            <li>Email: contact@365mcindonesia.com</li>
            <li>WhatsApp: (+62) 8566-365-365</li>
            <li>Facebook: @365mcindonesia.id</li>
            <li>Instagram: @365mcindonesia</li>
          </ul>
        </div>

        <div className="flex-1">
          <p className="text-amber-500 text-3xl font-bold">Hours</p>
          <ul className="list-none space-y-2 mt-4 text-left">
            <li>MON-FRI: 08:00~17:00</li>
            <li>SAT: 08:00~16:00</li>
            <li>- Closed on Holidays</li>
          </ul>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 pb-6 flex flex-col items-center justify-center">
        <div className="mt-2">
          <p>
            Copyright © 2023 PT AKASIA THREESIXFIVEMC All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EnHome;