import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './style'
import styles from '../../styles/components/Header.module.css'

interface Props {
    toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {

    // pegando o contexto do tema da aplicação
    const { title, colors } = useContext(ThemeContext)

    return (
        <Container className={styles.container}>
            <span className={styles.span}>Light</span>
            <Switch
                className={styles.switch}
                checked={title === 'dark'}
                onChange={toogleTheme}
                checkedIcon={false}
                uncheckedIcon={false}
                height={32}
                width={66}
                handleDiameter={26}
                onColor={colors.primary}
                offColor={colors.primary}
                onHandleColor='#449DD1'
                offHandleColor='#449DD1'
            />
            <span className={styles.span}>Dark</span>
        </Container>
    )
}

export default Header
