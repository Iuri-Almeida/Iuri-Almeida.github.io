import React from 'react'
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import js from '../../../images/js.png'
import python from '../../../images/python.png'
import sql from '../../../images/sql.png'
import reactjs from '../../../images/reactjs.png'
import nodejs from '../../../images/nodejs.png'
import vscode from '../../../images/vscode.png'
import linux from '../../../images/linux.png'
import terminal from '../../../images/terminal.png'
import git from '../../../images/git.png'
import github from '../../../images/github.png'

import styles from '../../../styles/components/Tools.module.css'
import commands from '../../../styles/components/Main.module.css'
import animation from '../../../styles/components/Animation.module.css'

import { Tool } from './style'

const Tools: React.FC = () => {

    return (

        <div id="tools" className={styles.toolsContainer}>

            <span className={`${styles.toolsCommand} ${commands.commands} ${animation.commands}`}>
                $ ls tools/
            </span>

            <div className={styles.tools}>

                <Tool>
                    <img src={html} alt="HTML5" title="HTML5" />
                </Tool>

                <Tool>
                    <img src={css} alt="CSS3" title="CSS3" />
                </Tool>

                <Tool>
                    <img src={js} alt="JavaScript" title="JavaScript" />
                </Tool>

                <Tool>
                    <img src={python} alt="Python" title="Python" />
                </Tool>

                <Tool>
                    <img src={sql} alt="SQL" title="SQL" />
                </Tool>

                <Tool>
                    <img src={reactjs} alt="ReactJS" title="ReactJS" />
                </Tool>

            </div>

            <div className={styles.tools}>

                <Tool>
                    <img src={nodejs} alt="NodeJS" title="NodeJS" />
                </Tool>

                <Tool>
                    <img src={vscode} alt="Visual Studio Code" title="Visual Studio Code" />
                </Tool>

                <Tool>
                    <img src={linux} alt="GNU/Linux" title="GNU/Linux" />
                </Tool>

                <Tool>
                    <img src={terminal} alt="Terminal" title="Terminal" />
                </Tool>

                <Tool>
                    <img src={git} alt="Git" title="Git" />
                </Tool>

                <Tool>
                    <img src={github} alt="GitHub" title="GitHub" />
                </Tool>

            </div>

        </div>
    )
}

export default Tools
