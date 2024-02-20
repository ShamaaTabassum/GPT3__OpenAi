import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './main.css'

const Main = () => {
  return (
    <div className='main section__padding'>
      <div className='main__content'>
        <h1 className='main__content-heading gradient__text'>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className='main__content-para'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className='main__content-form'>
          <input placeholder='Your Email Address' type='email'className='main__content-form__input gradient__bg' />
          <button className='main__content-form__btn'>Get Started</button>
        </div>
        <div className='main__content-people'>
          <img src={people} alt='people' className='main__content-people__img'/>
          <p className='main__content-people__para'>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='main__image'>
        <img src={ai} alt='ai-image' className='main__image-ai'/>
      </div>
    </div>
  )
}

export default Main