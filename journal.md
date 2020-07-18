# Journal

## Vittor - 02/07/2020
Preparazione dei file principali per lo svolgimento del progetto, gui vista a lezione e orbit control.
Aggiunta del vertex e fragment shader di base per il la modifica del colore finale di una semplice sfera dalla gui.
Caricamento dei primi modelli facendo in modo che risultino sempre della stessa dimensione finale grazie all'uso dei bounding box; possibilità di sceglierli in maniera interattiva dalla gui.
Aggiunta di una prima environment map (in particolare una cube map).

## Finotto - 10/07/2020
Cominciato a creare un sistema che gestisca la gui (dat gui) per le proprietà del modello con la possibilità di fare il double binding tra i valori della gui e quelli del modello selezionato. Per permettere una selezione dell'oggetto e la modifica dell'oggetto.
Cominciato a creare un sistema per gestire facilmente la creazione di una o più canvas nella pagina, in caso si voglia avere una griglia che mostri in piccolo i modelli.
Cominciato a creare un sistema per gestire le risorse come modelli/materiali ed il loro caricamento/cancellazione sulla Scheda grafica in modo asincrono, per ragioni di performance la politica migliore è precaricare tutto ciò che serve per una scena a priori e disegnare solo ciò che serve. Un altra possibilità sarebbe il caricamento asincrono al momento in cui servono e il render a operazione terminata, (per evitare il blocco del render fino a caricamento ultimato).

## Vittor
Completato import asincrono (più efficiente) e corretto dei modelli gltf e obj con studio sulla modifica e sostituzione dei materiali. Salvataggio dei materiali di default in un json e modifica in real time della gui con l'elenco dei materiali specifici del modello, così da poterli modificare/scambiare con quelli preparati da noi.

## Finotto
Aggiunta illuminazione di base alla scena, creazione degli shader dei materiali custom e utilizzo della environment map nel calcolo finale.
Shader utilizzati:
-
-
-

Postprocessing:

## Vittor
Aggiunta visualizza dell'e-commerce base con descrizione, modifica font e colori, riduzione del canvas e aggiunti loghi.


## Merge finale
La struttura base del progetto viene unita alla gestione delle luci e dei materiali per la modifica real time.
