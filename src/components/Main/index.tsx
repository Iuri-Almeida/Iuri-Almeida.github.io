import React from 'react';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import gmail from '../../images/gmail.png'
import iuri from '../../images/iuri.jpg'

import styles from '../../styles/components/Main.module.css'

const Main: React.FC = () => {

    function writingEffect() {

        const commands = document.querySelectorAll(`span.${styles.commands}`)

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

        <div className={styles.mainContainer} onLoad={writingEffect}>

            <div className={styles.leftContainer}>

                <div className={styles.profileContainer}>

                    <span className={`${styles.commands} ${styles.catCommand}`}>
                        $ cat profile.txt
                    </span>

                    <span className={styles.hello}>
                        Hello world, my name is
                    </span>

                    <span className={styles.name}>
                        IURI ALMEIDA
                    </span>

                    <span className={styles.about}>
                        SELF-TAUGHT AND FULL STACK DEVELOPER
                    </span>

                </div>

                <div className={styles.contactContainer}>

                    <div className={styles.resumeContainer}>

                        <span className={styles.commands}>
                            $ wget resume.pdf
                        </span>

                        <div>

                            <a href="/my_resume.pdf" download="iuri_resume">

                                <button className={styles.downloadResume}>
                                    Download Resume
                                </button>

                            </a>

                        </div>

                    </div>

                    <div className={styles.socialMediasContainer}>

                        <span className={styles.commands}>
                            $ open https://social_medias.com
                        </span>

                        <div>

                            <a href="https://github.com/Iuri-Almeida" rel="noreferrer" target="_blank">
                                <img className={styles.socialMedias} src={github} alt="Meu GitHub" />
                            </a>

                            <a href="https://www.linkedin.com/in/iurilopesalmeida/" rel="noreferrer" target="_blank">
                                <img className={styles.socialMedias} src={linkedin} alt="Meu LinkedIn" />
                            </a>

                            <a href="https://www.instagram.com/_iurialmeida/" rel="noreferrer" target="_blank">
                                <img className={styles.socialMedias} src={instagram} alt="Meu Instagram" />
                            </a>

                            <a href="https://www.facebook.com/iuri.almeida.96" rel="noreferrer" target="_blank">
                                <img className={styles.socialMedias} src={facebook} alt="Meu Facebook" />
                            </a>

                            <a href="mailto:iurilopesalmeida@gmail.com" rel="noreferrer" target="_blank">
                                <img className={styles.socialMedias} src={gmail} alt="Meu E-mail" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.rightContainer}>

                <div>

                    <span className={styles.commands}>
                        $ display iuri.png
                    </span>

                    <div>
                        <img className={styles.image} src={iuri} alt="Iuri Almeida" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main
