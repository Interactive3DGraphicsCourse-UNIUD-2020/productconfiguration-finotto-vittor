# Journal

## Vittor - 02/07/2020
Preparazione dei file principali per lo svolgimento del progetto, gui vista a lezione e orbit control.
Aggiunta del vertex e fragment shader di base per il la modifica del colore finale di una semplice sfera dalla gui.
Caricamento dei primi modelli facendo in modo che risultino sempre della stessa dimensione finale grazie all'uso dei bounding box; possibilità di sceglierli in maniera interattiva dalla gui.
Aggiunta di una prima environment map (in particolare una cube map).

## finotto - 10/07/2020
cominciato a creare un sistema che gestisca la gui (dat gui) per le proprietà del modello con la possibilità di fare il double binding tra i valori della gui e quelli del modello selezionato. per permettere una selezione dell'oggetto e la modifica dell'oggetto.
cominciato a creare un sistema per gestire facilmente la creazione di una o più canvas nella pagina, in caso si voglia avere una griglia che mostri in piccolo i modelli.
cominciato a creare un sistema per gestire le risorse come modelli/materiali ed il loro caricamento/cancellazione sulla Scheda grafica in modo asincrono, per ragioni di performance la politica migliore è precaricare tutto ciò che serve per una scena a priori e disegnare solo giò che serve. un altra possibilità sarebbe il caricamento asincrono al momento in cui servono e il render a operazione terminata, (per evitare il blocco del render fino a caricamento ultimato).
