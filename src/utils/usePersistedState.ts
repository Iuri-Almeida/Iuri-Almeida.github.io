import { useState, useEffect, Dispatch, SetStateAction } from 'react'

// definindo uma resposta que facilita leitura da função em outros arquivos
type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]


// função responsável por manter o tema escolhido pelo usuário
function usePersistedState<T>(key: string, initialState: T): Response<T> {

    // definindo qual o estado
    const [state, setState] = useState(() => {

        // tentando buscar o valor em local storage
        const storageValue = localStorage.getItem(key)

        return (storageValue) ? JSON.parse(storageValue) : initialState
    })

    // salvando uma nova informação a cada mudança de key ou state
    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [key, state])

    return [state, setState]
}

export default usePersistedState
