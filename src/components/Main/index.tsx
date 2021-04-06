import React from 'react'

import styles from '../../styles/components/Main.module.css'
import animation from '../../styles/components/Animation.module.css'

import Home from './Home'
import About from './About'
import Tools from './Tools'

const Main: React.FC = () => {

    // função responsável por criar o efeito de escrita
    function WritingEffect() {

        const commands = document.querySelectorAll(`span.${animation.commands}`)

        for (let i = 0; i < commands.length; i++) {

            let list = commands[i].innerHTML.split('')

            commands[i].innerHTML = ''

            list.forEach(

                (element, position) => setTimeout(

                    () => commands[i].innerHTML += element, 160 * position
                )
            )
        }
    }

    return (

        <div className={styles.mainContainer} onLoad={WritingEffect}>

            <Home />
            <About />
            <Tools />

        </div>
    )
}

export default Main
