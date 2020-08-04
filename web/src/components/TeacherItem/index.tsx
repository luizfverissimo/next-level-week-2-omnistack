import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className='teacher-item'>
          <header>
            <img
              src='https://avatars2.githubusercontent.com/u/62751844?s=460&u=10de8776b1680e9756ada0c3d375538e6151a0f1&v=4'
              alt='Luiz Fernando'
            />
            <div>
              <strong>Luiz Fernando Veríssimo</strong>
              <span>Farmacologia</span>
            </div>
          </header>

          <p>
            Ensinando Farmacologia para estudantes de cursos da saúde.
            <br/><br/>
            Há 1 ano ensinando como os fármacos modificam o nosso organismo para resolver nossos problemas de saúde.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 50,00</strong>
            </p>
            <button type='button'>
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem