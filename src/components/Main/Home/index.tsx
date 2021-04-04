import React from 'react'
import github from '../../../images/github.png'
import linkedin from '../../../images/linkedin.png'
import instagram from '../../../images/instagram.png'
import facebook from '../../../images/facebook.png'
import gmail from '../../../images/gmail.png'
import iuri from '../../../images/iuri.jpg'

import Swal from 'sweetalert2'

import styles from '../../../styles/components/Home.module.css'
import commands from '../../../styles/components/Main.module.css'

const Home: React.FC = () => {

    // função responsável por disponibilizar os currículos no alert
    function downloadAlert() {

        // lançando o alert
        Swal.fire({
            title: 'Select a resume for download',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Portuguese',
            cancelButtonText: 'English'
        })

        // lógica usada para por o button dentro do link e não vice-versa
        // armazenando os botões e a TAG pai dos dois
        const alertConfirmButton = Swal.getConfirmButton(),
            alertCancelButton = Swal.getCancelButton(),
            father = Swal.getActions()

        // removendo eles do HTML
        alertConfirmButton?.remove()
        alertCancelButton?.remove()

        // criando um link para cada
        const portugueseLink = document.createElement('a'),
            englishLink = document.createElement('a')

        // adicionando os atributos dos links
        portugueseLink.setAttribute('href', '/iuri_pt-br.pdf')
        portugueseLink.setAttribute('download', 'iuri_pt-br.pdf')
        englishLink.setAttribute('href', '/iuri_en-us.pdf')
        englishLink.setAttribute('download', 'iuri_en-us.pdf')

        // adicionando os botões dentro do link
        portugueseLink.appendChild(alertConfirmButton ? alertConfirmButton : document.createElement('button'))
        englishLink.appendChild(alertCancelButton ? alertCancelButton : document.createElement('button'))

        // adicionando os links na TAG pai
        father?.appendChild(portugueseLink)
        father?.appendChild(englishLink)

        // estilizando o alert
        Swal.getHeader()?.parentElement?.classList.add(styles.alertContainer)
        Swal.getTitle()?.classList.add(styles.alertTitle)
        Swal.getConfirmButton()?.classList.add(styles.alertConfirmButton)
        Swal.getCancelButton()?.classList.add(styles.alertCancelButton)
        Swal.getCloseButton()?.classList.add(styles.alertCloseButton)
    }

    return (

        <div id="home" className={styles.homeContainer}>

            <div className={styles.leftContainer}>

                <div className={styles.profileContainer}>

                    <span className={`${commands.commands} ${styles.catCommand}`}>
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

                        <span className={commands.commands}>
                            $ wget resume.pdf
                        </span>

                        <div>

                            <button className={styles.downloadResume} onClick={downloadAlert}>
                                Download Resume
                            </button>

                        </div>

                    </div>

                    <div className={styles.socialMediasContainer}>

                        <span className={commands.commands}>
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

                    <span className={commands.commands}>
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

export default Home
