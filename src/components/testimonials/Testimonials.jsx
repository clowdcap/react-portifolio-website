import React from 'react'
import './testimonials.css'
import proflie1 from './../../assets/avatar1.jpg'
import proflie2 from './../../assets/avatar2.jpg'
import proflie3 from './../../assets/avatar3.jpg'
import proflie4 from './../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data_profile = [
  {
    id: 1,
    imagem: proflie1,
    titulo: 'User Profle',
    nome_user: 'Ernast Archtecture',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio, quas voluptates dolorem rem hic, pariatur alias, distinctio exercitationem officia quibusdam necessitatibus facilis vel ipsam laboriosam temporibus? Atque, praesentium reprehenderit?',
  },

  {
    id: 2,
    imagem: proflie2,
    titulo: 'User Profle',
    nome_user: 'Ernast Archtecture',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio, quas voluptates dolorem rem hic, pariatur alias, distinctio exercitationem officia quibusdam necessitatibus facilis vel ipsam laboriosam temporibus? Atque, praesentium reprehenderit?',
  },
  {
    id: 3,
    imagem: proflie3,
    titulo: 'User Profle',
    nome_user: 'Ernast Archtecture',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio, quas voluptates dolorem rem hic, pariatur alias, distinctio exercitationem officia quibusdam necessitatibus facilis vel ipsam laboriosam temporibus? Atque, praesentium reprehenderit?',
  },
  {
    id: 4,
    imagem: proflie4,
    titulo: 'User Profle',
    nome_user: 'Ernast Archtecture',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio, quas voluptates dolorem rem hic, pariatur alias, distinctio exercitationem officia quibusdam necessitatibus facilis vel ipsam laboriosam temporibus? Atque, praesentium reprehenderit?',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback dos</h5>
      <h2>Clientes</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
      {
        data_profile.map(({imagem, titulo, nome_user, review}, id) => {
          return (

            <SwiperSlide key={id} className='testimonial'>

              <div className="client__avatar">
                <img src={imagem} alt={titulo}/>
              </div>
              <h5 className="client__name">{nome_user}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials