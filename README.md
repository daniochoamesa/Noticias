# Noticias

Link para rawgit de la página principal index.html: https://rawgit.com/daniochoamesa/Noticias/master/index.html

Trabajo realizado por Daniel Ochoa Mesa, alumno de ASIX en IES Francesc de Borja Moll.

En este Readme explicaré el proceso de este proyecto final para Lenguaje de marcas: Página web de noticias.

En el pedido, el cliente nos ha especificado los siguientes puntos:
  
·La maquetación tiene que dejar espacio a la derecha de la pantalla para publicidad si la pantalla es suficientemente ancha.

·Para dispositivos móviles se utilizará diferente de publicidad a la utilizada en modo escritorio.

·Los de datos de cada noticia dentro del archivo rss.xml son los siguientes: título, imgbig, imgmid, descripción, y fecha de 
publicación.

·Se han de crear dos plantillas o tipos de páginas html, la plantilla donde se verá toda y la plantilla donde se visualizará una 
noticia.
    
Una vez leídas las especificaciones hechas por el cliente, se ha realizado a la maquetación del modelo de la página web. Hecha en
cuaderno, se puede apreciar una primera idea de cómo sería el formato y la maquetación de la misma.

![img_20180602_231005_hdr](https://user-images.githubusercontent.com/32293791/40880916-3b4e12b8-66ba-11e8-84b1-cc2c854b4e93.jpg)

Después de varios días, decidí que este formato no era el más adecuado para una página web de noticias de League of Legends y decidí
darle otra maquetación a la página web.

![img_20180417_181215_hdr](https://user-images.githubusercontent.com/32293791/40880895-bf47a3e6-66b9-11e8-956c-5e5026783728.jpg)

De esta manera me parecía una versión más sencilla y simple para las personas que visitaran esta página y donde podrían ver el contenido de la misma de una forma más adecuada y limpia a la presentada anteriormente.

A partir de aquí empezó la construcción de la página web, utilizando herramientas como Bootstrap para facilitar la programación de la
página y pudiendo añadir nuevas funcionalidades como una barra de navegación en la parte superior de la pantalla o la utilización de 
columnas para situar las notícias en la parte central de la página.

Semanas después se fue añadiendo los archivos JSON y RSS para que la página pudiera ser compartida externamente a través de las redes 
sociales y también la temática de la página web, que sería la actualidad sobre el videojuego League of Legends, con noticias de las 
nuevas actualizaciones, parches y entrada a los nuevas campeones.

Se consiguió la implementación del botón en la parte inferior de la página para poder cargar las notícias con sus descripciones que 
estaban alojadas en el archivo json, tanto 1 como 2. 

En cuanto al tema de la publicidad, está alojada en la parte derecha de la pantalla con su espacio reservado y para modo móvil este div 
de publicidad se encuentra en la parte superior que desaparece cuando hace scroll el usuario. En modo escritorio, la publicidad va 
variando cada dos segundos y en modo móvil es una imagen fija.

Para finalizar con la página principal, en la parte inferior se situa el footer que aloja tres imágenes correspondientes a dos redes 
sociales para poder compartir la página web (tanto Twitter como Facebook) y el tercer botón con el logo de LoL.com que servirá para 
volver a la página principal.

En las páginas donde se encuentran las notícias individuales se ha incluido el título de la noticia junto a la fecha de publicación, el 
texto referente a la noticia y un vídeo de Youtube en referencia a la noticia. Este vídeo se puede visualizar tanto en la página de 
LoL.com como en Youtube.
