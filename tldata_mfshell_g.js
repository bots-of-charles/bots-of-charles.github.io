const tldata={
	"tl_nb1":"Inicio",
	"tl_nb2":"Menú",
	"tl_nb3":"Arriba",
	"tl_nb4":"English",
	"tl_page_title":"Guía de MF Shell",
	"tl_sub":"Bots de Telegram",
	"tl_menu0":"Introducción",
	"tl_menu1":"El Sistema de Archivos",
	"tl_menu2":"Los selectores",
	"tl_menu3":"Límites y colas",
	"tl_menu4":"Conocimiento extra",
	"tl_menu5":"Referencia de comandos",
	"tl_intro1":"<strong class=\"sub\">Este bot no es normal</strong><br>En Telegram, la mayoría de bots para descargar y bots de leech tienen este 'efecto boomerang': les das algo, ya sea un archivo de Telegram, o una URL que conduce a un archivo, ellos hacen 'lo suyo' y al terminar suben al chat, todo esto se considera 'normal'. Lo primero que debe saber es que MF Shell no es un bot 'normal', ese 'efecto boomerang' no existe en el bot porque hay dos formas principales para sacar los archivos. La primera es la típica subida del bot al chat y la segunda es compartir los archivos vía web, también conocido como 'File-to-Link'",
	"tl_intro2":"<strong class=\"sub\">Características de MF Shell</strong><br>→ Organice sus archivos como guste. Crear carpeta, renombrar archivos (en masa también), borrar archivos, extraer archivos ZIP, RAR, agrupar archivos en 7Z, y mucho más<br>→ Descarga contenido de donde sea. No se trata del típico Youtube o MEGA, aquí hay soporte directo desde archivos y carpetas de Google Drive, hasta aplicaciones de Android e incluso comics y manga<br>→ Creado para trabajos grandes. MF Shell tiene sistemas de listas de espera y colas. Los procesos encolados pueden pausarse o cancelarse, puedes modificar elementos en una cola. Las listas de espera son para racionar los recursos de cómputo del bot<br>→ FTL con esteroides. La interfaz web es muy útil para descargar grandes cantidades de contenido alojado en el bot",
	"tl_intro3":"<strong class=\"sub\">Tutorial en vídeo</strong><br>La guía puede llegar a ser densa de leer, es por eso que tenemos un tutorial en vídeo mostrando lo básico que se puede hacer en el bot",
	"tl_intro4":"Ver el vídeo",
	"tl_intro5":"El vídeo es solo una mera introducción para entender el uso general que se le da al bot, y el flujo de trabajo<br>El vídeo a penas rasca la superficie, especialmente con lo básico, asi que si ya vió el vídeo, siga leyendo la guía hasta el final y luego vaya a la referencia de comandos",
	"tl_intro6":"Empezar a aprender",
	"tl_fs1":"<strong class=\"sub\">Teoría</strong><br>En el bot, cada usuario tiene su propio directorio (carpeta), donde puede trabajar y dentro de ese directorio, el usuario puede crear más subdirectorios y agrupar archivos",
	"tl_fs2":"Hay una ubicación (ruta) que es el directorio actual de trabajo (CWD en inglés). Un usuario puede cambiar de CWD yendo más profundo o más arriba en la estructura donde se encuentra. Cada CWD tiene un padre o múltiples parientes, a exceptión de la raiz '/'<br>Si todo esto le parece confuso, piense en un árbol de cabeza, donde cada nodo del árbol (directorio) tiene un nombre",
	"tl_fs3":"<strong class=\"sub\">Mirar alrededor</strong><br>Para ver los contenidos del CWD, así como el CWD actual, puede ejecutar el comando '/ls' de esta forma:",
	"tl_fs4":"La siguiente imagen es un ejemplo de listado de directorio usando '/ls'",
	"tl_fs5":"Como se puede ver en esta imagen, al principio del mensaje se puede ver la ruta del CWD y por cada fila (cada elemento) se puede diferenciar entre archivo o directorio solamente mirando el ícono, pero lo más importante de todo esto es lo que hay antes del icono: ese número es el índice del elemento. En MF Shell cuando se seleccionan archivos o directorios, no se hace mediante el nombre del archivo, se hace usando el índice que ocupa en el CWD<br>Sabiendo lo anterior, podemos ver alguna ubicación en específico, como por ejmplo, ese directorio llamado 'stufffff' que ocupa índice 1:",
	"tl_fs6":"<strong class=\"sub\">Moverse</strong><br>El comando '/ls' solamente es útil para observar otros elementos, pero observar otra ruta no te hace cambiar el CWD a esa ruta. Hay 2 comandos para cambiar de CWD: '/cd' y '/back'<br>El comando '/cd' puede cambiar el CWD a un subdirectorio:",
	"tl_fs7":"Y el comando '/back' cambia el CWD al directorio padre del WD actual:",
	"tl_fs8":"Usar como argumento el índice de un elemento en un comando se llama 'Selección simple'<br>El próximo capítulo trata sobre los tipos de selección en MF Shell",
	"tl_sels1":"En el capítulo anterior se vió lo básico acerca del sistema de archivos en MF Shell<br>En este capítulo vamos a ver lo que son los tipos de selección (también llamados selectores) y cómo podemos usarlos para seleccionar elementos",
	"tl_sels2":"Hay 3 tipos de selectores:<br>→ Selector simple<br>→ Selector de rango<br>→ Selector libre",
	"tl_sels_b1":"Selector simple",
	"tl_sels_b2":"Selector de rango",
	"tl_sels_b3":"Selector libre",
	"tl_sels_ss":"Los selectores / Selector simple",
	"tl_sels_back1":"Volver al menú 'Los Selectores'",
	"tl_sels_ss1":"<strong class=\"sub\">Lo básico</strong><br>Forma: 'N'<br>Donde N es un entero<br>En el contexto de la administración de archivos, cuando 'N' es positivo o cero se está seleccionando un elemento que debe existir en el CWD, lo mismo va para la gestión de colas<br>Cuando 'N' es negativo, lo que pasa es que se seleciona un pariente del CWD (niveles superiores), el pariente seleccionado depende del número, o sea, se suben 'N' niveles hacia arriba",
	"tl_sels_ss2":"<strong class=\"sub\">Ejemplo real</strong><br>En el capítulo anterior vimos ejemplos de selectores simples mientras usábamos '/ls' y '/cd' para aprender acerca del sistema de archivos, pero ahora vamos a ver un ejemplo con el comando '/mv'<br>El comando '/mv' se usa para mover archivos o subdirectorios a otras ubicaciones y también se usa para hacer renombrados simples, todo depende de cómo se ejecute<br>Vamos a renombrar un archivo primero:",
	"tl_sels_ss3":"El archivo ha sido renombrado, ahora vamos a moverlo de sitio, pero primero hay que ejecutar otra vez '/ls' ya que debido a que el nombre del archivo cambió y hay más archivos presentes, es probable que su índice en el CWD haya cambiado",
	"tl_sels_ss4":"Como podemos ver en la imagen, el archivo cambió de posición del índice 3 al índice 4. Sabiendo esto, Ejecutamos ahora '/mv':",
	"tl_sels_ss5":"Si corremos '/ls' para ver al directorio que ocupa el índice no. 2, veremos el archivo que recién movimos",
	"tl_sels_ss6":"Consejo:<br>De forma predeterminada, el listado de un directorio que no sea hecho por '/ls' lo hacen '/cd' y '/back', sin embargo, hay un comando llamado '/adl' que activa un modo de listado automático de directorio (ADL en inglés) en muchos comandos relacionados con archivos para no tener que ejecutar '/ls' manualmente y muy seguido",
	"tl_sels_ss7":"Si 'N' es negativo, se selecciona un pariente del CWD, es decir, se sube N niveles hacia arriba respecto al CWD<br>Nuestro CWD ahora mismo es '/some/files/around/here/', si ejecutamos:",
	"tl_sels_ss8":"Lo que pasó aquí es que cambiamos nuestro CWD de '/some/files/around/here/' a '/some/files/', y si nos fijamos bien, lo que hicimos fue movernos 2 niveles por encima",
	"tl_sels_rs":"Los selectores / Selector de rango",
	"tl_sels_rs1":"<strong class=\"sub\">Lo básico</strong><br>Formas: 'N-M' ó 'N-Mr'<br>Donde N y M son enteros positivos y/o cero<br>'N' es el índice (o punto) inicial, 'M' es la cantidad a seleccionar a partir de 'N' y 'r' (literal, una 'r') es para hacer la selección pero en reversa<br>'N' está bien que valga cero en el caso de ser un primer elemento ya sea en una cola o un CWD, pero cuando 'M' (la cantidad a seleccionar) es cero, se seleccionan todos los elementos a partir de 'N'",
	"tl_sels_rs2":"En el contexto de la gestión de archivos, la selección de rango solo afecta a los elementos presentes en el CWD, no tiene nada que ver con los parientes del CWD",
	"tl_sels_rs3":"La selección por rango es muy importante, porque uno puede verse en situaciones obvias donde hay que seleccionar grandes grupos de archivos (consecutivos) ya sea para subirlos usando '/upload', moverlos de sitio con '/mv' o borrar con '/rm'",
	"tl_sels_rs4":"<strong class=\"sub\">Ejemplo pseudo</strong><br>Supongamos que tenemos 16 elementos delante de nosotros, ya sea en una cola o en un CWD:",
	"tl_sels_rs5":"'3-5': Selecciona los elementos 3,4,5,6 y 7 porque tiene índice inicial 3 y selecciona 5 elementos a partir del índice inicial<br>'11-2': Selecciona los elementos 11 y 12, porque 11 es el elemento inicial y se seleccionan 2 elementos<br>Note el sentido en que se seleccionan los elementos. Veamos más ejemplos:",
	"tl_sels_rs6":"'4-0': Selecciona todos los elementos a partir del elemento 4. Aquí se está aplicando la regla especial de lo que pasa cuando 'M' vale cero<br>'0-0': Usando la regla especial de 'M' siendo cero, combinada con 'N' también valiendo cero, da como resultado seleccionar todos los elementos<br>'9-4r': El punto inicial es 9, y se seleccionan 4 elementos, pero se están seleccionando en el sentido contrario debido al modificador de reversa. El modificador de reversa en las selecciones por rango tiene unos casos de uso muy raros y específicos",
	"tl_sels_rs7":"<strong class=\"sub\">Ejemplo real</strong><br>Veamos ahora un ejemplo de uso real de selección de rango usando el comando '/mv' para mover un grupo de archivos. Así se ve el CWD:",
	"tl_sels_rs8":"Lo que hay que hacer es mover los tres últimos archivos a ese directorio llamado 'watch later':",
	"tl_sels_rs9":"Como el objetivo era mover los tres últimos, otras formas de seleccionar por rango para este caso huberan sido '5-0' o '7-3r'",
	"tl_sels_fs":"Los selectores / Selector libre",
	"tl_sels_fs1":"<strong class=\"sub\">Lo básico</strong><br>Forma: 'A,B,C,D,...,Z'<br>Todos los elementos son enteros positivos y/o cero separados por coma y sin espacio entre ellos<br>Los elementos seleccionados no deben repetirse: cada elemento se debe seleccionar una única vez<br>La cantidad de elementos a seleccionar no debe exceder la cantidad de elementos disponible a seleccionar",
	"tl_sels_fs2":"Al trabajar con archivos y directorios, el selector libre solo se limita a trabajar con los elementos presentes en el CWD, (al igual que el selector de rango) no trabaja con parientes del CWD",
	"tl_sels_fs3":"La ventaja principal del selector libre es que puedes seleccionar múltiples elementos no consecutivos en un órden específico. Esto es importante porque hay comandos en los que el orden en el que se seleccionan los elementos influye en los resultados. Existen tambien determinadas situaciones en las que hace falta seleccionar elementos que no están posicionados de forma consecutiva",
	"tl_sels_fs4":"<strong class=\"sub\">Ejemplo pseudo</strong><br>Supongamos que tenemos 8 elementos, ya sea de una cola o de un CWD",
	"tl_sels_fs5":"'1,3,6,7': Selecciona los elementos 1,3,6 y 7 en ese orden<br>'4,5,2': Selecciona los elementos 4,5 y 2 en ese orden",
	"tl_sels_fs6":"<strong class=\"sub\">Ejemplo real</strong><br>Veamos un ejemplo real de selección libre usando el comando '/upload'. Así se ve el CWD:",
	"tl_sels_fs7":"Lo que hacemos es subir los elementos (archivos) 2 y 0, en ese orden, y este es el resultado:",
	"tl_sels_fs8":"Como se puede ver en la imagen, primero se subió el elemento no. 2 y después el no. 0",
};
tldata["tl_menu"]=tldata["tl_nb2"];
tldata["tl_intro"]=tldata["tl_menu0"];
tldata["tl_fs"]=tldata["tl_menu1"];
tldata["tl_sels"]=tldata["tl_menu2"];
tldata["tl_sels_back2"]=tldata["tl_sels_back1"];
tldata["tl_sels_back3"]=tldata["tl_sels_back1"];
