import React from 'react'
import python from '../../../images/python.png'
import challenges from '../../../images/challenges.png'
import code from '../../../images/code.png'
import jiujitsu from '../../../images/jiujitsu.png'

import { Hobbies } from './style'

import commands from '../../../styles/components/Main.module.css'
import styles from '../../../styles/components/About.module.css'
import animation from '../../../styles/components/Animation.module.css'

const About: React.FC = () => {

    return (

        <div id="about" className={styles.aboutContainer}>

            <span className={`${commands.commands} ${animation.commands} ${styles.aboutCommand}`}>
                $ whoami
            </span>

            <p className={`${styles.aboutText} ${animation.aboutTextAppear}`}>
                Hi there, I'm <span className={styles.regularText}>Iuri Almeida</span>, a self-taught and full stack developer from Brazil, currently working at <a className={styles.regularText} href="https://nossaenergia.petrobras.com.br/pt/energia/conexoes-para-a-inovacao-modulo-ignicao-busca-as-ideias-de-jovens-estudantes/#menu" target="_blank" rel="noreferrer">Módulo Ignição</a> as a software developer. I’m always willing to learn new things and spread knowledge around the world.

                <br />
                <br />

                <span className={styles.regularText}>Curiosity:</span> I'm a jiu jitsu black belt.
            </p>

            <span className={`${commands.commands} ${animation.commands} ${styles.lsCommand}`}>
                $ ls hobbies/
            </span>

            <div className={`${styles.hobbiesContainer} ${animation.hobbiesAppear}`}>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={code} alt="Programming" />
                    </div>

                    <h1>Programming</h1>

                    <span>
                        I love spending hours on the computer developing and creating new things.
                    </span>

                </Hobbies>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={python} alt="Python" />
                    </div>

                    <h1>Python</h1>

                    <span>
                        Python is beautiful and that's it, you need to accept.
                    </span>

                </Hobbies>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={challenges} alt="Challenges" />
                    </div>

                    <h1>Challenges</h1>

                    <span>
                        I am driven by challenges and I’m always looking for more.
                    </span>

                </Hobbies>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={jiujitsu} alt="Jiu Jitsu" />
                    </div>

                    <h1>Jiu Jitsu</h1>

                    <span>
                        When I train Jiu Jitsu I relax and forget about my obligations.
                    </span>

                </Hobbies>

            </div>

        </div>
    )
}

export default About
