import React from 'react'
import github from '../../../images/github.png'

import { Project } from './style'

import styles from '../../../styles/components/Projects.module.css'
import commands from '../../../styles/components/Main.module.css'
import animation from '../../../styles/components/Animation.module.css'

const Projects: React.FC = () => {

    return (

        <div id="projects" className={styles.projectsContainer}>

            <span className={`${commands.commands} ${animation.commands}`}>
                $ cd projects/
            </span>

            <div className={styles.projects}>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Donut Rotation</h1>

                        <p>
                            In this project I wanted to challenge myself to recreate the <a href="https://www.a1k0n.net/2011/07/20/donut-math.html" target="_blank" rel="noreferrer">Donut Project</a> made by <a href="https://github.com/a1k0n" target="_blank" rel="noreferrer">a1k0n</a>. Initially this project was made entirely in C# and I wanted to create using only JavaScript. And this was the result that I  achieved.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/donut-rotation">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/donut-rotation" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Donut Rotation Repository" />

                        </a>

                    </div>

                </Project>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Rotate Cube</h1>

                        <p>
                            This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to treat 3D objects using CSS.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/rotate-cube">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/rotate-cube" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Rotate Cube Repository" />

                        </a>

                    </div>

                </Project>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Carousel</h1>

                        <p>
                            This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to create a carousel in several different ways.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/carousel">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/carousel" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Carousel Repository" />

                        </a>

                    </div>

                </Project>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Smile Focus</h1>

                        <p>
                            This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how the click positions and the movements of the mouse cursor on a page works.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/smile-focus">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/smile-focus" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Smile Focus Repository" />

                        </a>

                    </div>

                </Project>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Flip Card</h1>

                        <p>
                            This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how to create a 3D object using CSS.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/flip-card">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/flip-card" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Flip Card Repository" />

                        </a>

                    </div>

                </Project>

                <Project className={styles.project}>

                    <div className={styles.projectDescription}>

                        <h1>Chronometer</h1>

                        <p>
                            This project was part of my personal challenges, which I needed to create a page every day. Here I studied about how a timer buttons start, continue and restart works.
                        </p>

                    </div>

                    <div className={styles.projectFooter}>

                        <a href="/chronometer">

                            <button type="button">Demo</button>

                        </a>

                        <a href="https://github.com/Iuri-Almeida/chronometer" target="_blank" rel="noreferrer">

                            <img src={github} alt="GitHub Repository" title="Chronometer Repository" />

                        </a>

                    </div>

                </Project>

            </div>

        </div>
    )
}

export default Projects