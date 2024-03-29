# Carosello di Immagini

## Descrizione
Questo carosello di immagini è stato implementato utilizzando HTML, CSS e JavaScript. Consente agli utenti di navigare attraverso un set di immagini utilizzando pulsanti di navigazione verso sinistra e destra.

## Struttura dei File
- `index.html`: File HTML contenente la struttura della pagina web.
- `style.css`: File CSS per lo stile della pagina web.
- `script.js`: File JavaScript che implementa la funzionalità del carosello di immagini.
- `img/`: Directory contenente le immagini utilizzate nel carosello.

## Funzionamento
1. **Array di Immagini**: La variabile `images` contiene i percorsi delle immagini.
2. **Recupero degli Elementi**: Vengono recuperati il div con la classe `.images` e i pulsanti di navigazione.
3. **Creazione del Carosello**: Utilizzando un ciclo for, le immagini vengono aggiunte dinamicamente al div `.images`.
4. **Inizializzazione**: La prima immagine viene evidenziata aggiungendo la classe `active`.
5. **Gestione dei Click**: Gli eventi click sui pulsanti di navigazione aggiornano l'indice e cambiano l'immagine visualizzata.