import React from 'react'
import './testimonials.css'
import proflie1 from './../../assets/avatar1.jpg'
import proflie2 from './../../assets/avatar2.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data_profile = [
  {
    id: 1,
    imagem: proflie1,
    titulo: 'exercito-brasileiro',
    nome_user: 'Exército Brasileiro',
    review:'De 2015 até 2020, Soldado EP no PQRMNT/5 trabalhei na seção de manutenção de ótica, na seção de suprimento e na seção de compras. Realizei estágio de atividades na CRO/5, onde tive maior contato com o sistema BIM.',
  },

  {
    id: 2,
    imagem: proflie2,
    titulo: 'User Profle',
    nome_user: 'Prefeitura Municipal de Campo Magro',
    review:'De 2020 até os dias atuais, Estagiário na SEDUA (Urbanismo), recebi bastante experiencia e conhecimento na área de Urbanismo, experiencia na questão orçamentária de projetos, tenho uma grande aprendizagem de análise de projetos e noções de aplicação real de georreferenciamento.',
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Minhas experiências</h5>
      <h2>Profissionais</h2>

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