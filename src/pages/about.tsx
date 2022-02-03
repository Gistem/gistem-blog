import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
    return (
        
        <Layout pageTitle='About'>
            <Container>
            <h1>Acerca de mí</h1>
            <p>Hola, <br/>
            Muchas gracias por el interes! <br/>
            Me llamo Gastón, soy de Argentina fanático de la natación.<br/>
            Di mis primeros pasos en la natación master en el 2014 y desde ese entonces no he dejado de querer mejorar.<br/><br/>
            En estos últimos años por curiosidad sobre como mejorar en este deporte, he estudiado acerca del cuerpo humano,
             su psique, nutrición y varios otros factores que fui considerando importantes para ser mejor nadador.<br/><br/>
             La idea es este blog es intentar transmitir lo que he aprendido y poder seguir aprendiendo<br/>
             Espero que lo disfruten y les sea de utilidad!</p>
        </Container>
        </Layout>
    )
}

export default about