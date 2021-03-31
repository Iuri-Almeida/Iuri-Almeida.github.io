import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global'
import './styles/global.css'

import Header from './components/Header'
import Main from './components/Main'

import light from './styles/themes/light'
import dark from './styles/themes/dark'


// função responsável por toda aplicação
function App() {

  // pegando o estado do tema
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  // função responsável por definir o tema escolhido pelo usuário
  const toogleTheme = () => { setTheme(theme.title === 'dark' ? light : dark) }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toogleTheme={toogleTheme} />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
