TROVI COMPONENTI GIA PRONTI SU DAISY UI
(GUIDA INSTALLAZIONE SU DOCUMENTAZIONE PER VITE)

CREO DEI MODULI, IN MODO TALE CHE OGNI COMPONENTE ABBIA LA SUA PAGINA DI CSS DEDICATA, QUINDI DA COMPONENTS CREO DELLE SOTTO CARTELLE, AD EDEMPIO NAVBAR, AL CUI INTERNO CI SARANNO I FILE NAVBAR.JSX E NAVBAR.MODULE.CSS. A questo punto però navbar.module.css è un file specifico e quindi pu avendo delle classi non si vedrà lo stile globalmente. Per risolvere basterà importare sul file .jsx il modulo .css: ESEMPIO:

import classes from './Navbar.module.css';

export default function Navbar(){
    return(
        <>
         <nav className={classes.navbar}>
         ...
         ...
         ...
        
        </>
    )
}

N.B. ora qualsiasi cosa scritta su index.css non potrà sovrascrivere lo stile che ho assegnato con un modulo.

un metodo ancora più moderno però è utilizzare le librerie frontend dedicate allo stile, in particolare tailwind, che a differenza per esempio di bootstrap fa in modo che le classi siano dinamiche/customizzabili e gestite dallo sviluppatore attraverso js
------------------------------------------------------------------------------
1-INSTALLAZIONE TAILWIND:
da terminale: npm install tailwindcss @tailwindcss/vite --force

2-SU VITE.CONFIG.JS:
export default defineConfig({
 plugins: [react(),tailwindcss(),], <-----aggiungere tailwindcss(), dentro l'array
})
ed importarlo: import tailwindcss from '@tailwind.css/vite'

3- SU INDEX.CSS:
@import "tailwind.css";
-------------------------------------------------------------------------------

ESTENSIONE UTILE SU VSCODE:
tailwind css intellisense
