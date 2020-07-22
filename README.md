# Progetto ProductConfiguration di Finotto e Vittor

## Descrizione
Il progetto consiste nella scelta di un prodotto delle Stark Industries come le armature di IronMan e di poterle configurare col visualizzare 3D della A.C.M.E.

Tramite la gui si può scegliere un prodotto da una lista, per ogni prodotto viene mostrata una lista di materiali disponibili col modello che possono essere modificati e/o modificati con dei materiali creati da noi.
È possibile muoversi intorno al prodotto con il mouse e ingrandirlo/rimpicciolirlo a piacimento.


## Strumenti utilizzati
- Hardware:
  - CPU: 2,3 GHz Intel Core i5 quad-core
  - Scheda grafica: Intel Iris Plus Graphics 655 1536 MB
- Software:
  - Git
  - Atom
  - Google Chrome
  - Safari


##  Realizzazione
Il progetto è stato realizzato dividendo i compiti tra i partecipanti, in particolare Finotto si è occupato principalmente della realizzazione degli shaders e di imbastire la struttura generale dei file nel progetto; mentre  Vittor dell'impostazione della scena dell'implementazione delle singole funzioni di import con lo studio sui formati e i materiali di base,  della generazione della gui dinamica e amministrazione delle variabili  uniform e della visualizzazione finale.
Per lo sviluppo in contemporanea su parti diverse del codice sono stati utilizzati diversi branch di sviluppo e diversi file sugli stessi branch.
I modelli sono stati trovati online e modificati con i materiali creati appositamente.

## Funzionamento
All'avvio della pagina web, vengono effettuate delle chiamate asincrone per caricare i modelli con i relativi materiali e gli shaders.
Alla scelta del prodotto viene modificata la cartella contenente i materiali già presenti nel progetto, per ogni materiale è possibile poi modificarne il tipo, sostituendolo con uno di quelli creati appositamente e modificarne i parametri di "metalness" e "roughness" da passare agli shader.
È possibile, inoltre, modificare i colori e l'intensità delle luci presenti.
In linea teorica, questo configuratore potrebbe accettare in input qualsiasi tipo di modello in formato .obj e .gltf, come diversi shaders, senza modifiche se non sui path relativi e i nomi da utilizzare.

## Problematiche
Oltre a cercare di creare di realizzare degli shaders soddisfacenti dal punto di vista visivo, le difficoltà maggiori riscontrate sono state modifica dinamica della gui e la modifica dei singoli materiali.


## Ottimizzazione
La ricerca dell'efficenza del codice è stata ricercata nell'utilizzo di chiamate asincrone per il caricamento dei modelli.

## Customizzazioni
L'applicazione permette di scegliere diversi modelli, con uno o più materiali applicati direttamente dai file di importazione. Permette successivamente di cambiare il materiale applicato alle differenti mesh e di configurare i parametri principali del materiale. 
Permette la scelta  tra diverse tipologie di materiale, partendo da materiali più semplici fino ad arrivare a quelli maggiormente fotorealistici.
## Esempi
![iron-glass](/re-img/glass.PNG)
Glass material, permette di creare una superficie trasparente, che ammette sia riflessioni che rifrazioni.
![iron-pbr](/re-img/pbr.PNG)
PBR Material, il più accurato tra ii vai materiali proposti, permette di avere una illuminazione realistica, compresa di riflessi dall'enviorment.
![iron-pbr](/re-img/microfacet.PNG)
Microfacet Material, un materiale con effetti di luce realistici.
![iron-pbr](/re-img/basic.PNG)
Basic Material, un materiale con un illuminazione non realistica fotorealistica.
![iron-pbr](/re-img/toon.PNG)
Toon Material, un materiale non fotorealistico che rende la luce in modo cartunesco, non fotorealistico, prevalentemente utilizzato in ambito videoludico.

