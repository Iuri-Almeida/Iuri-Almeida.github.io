import 'styled-components'

// definindo um novo component na biblioteca styled-components
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            text: string;
        }
    }
}
