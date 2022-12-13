const tldata={
	"tl_nb1":"Inicio",
	"tl_nb2":"Guía",
	"tl_nb3":"Arriba",
	"tl_nb4":"English",
	"tl_page_title":"Referencia de comandos de MF Shell",
	"tl_sub":"Bots de Telegram",
	"show_all_commands":"Mostrar todos los comandos",
	"search_a_command":"Buscar un comando",
	"search_button":"Buscar",
	"cmd_about":"Muestra una breve información acerca del bot, el administrador, y un enlace al sitio web interno del bot",
	"cmd_help":"Muestra enlaces a la guía de usuario y la referencia de comandos del bot (o sea, este sitio web)",
	"cmd_start":"Muestra información real del bot y de su sesión en el bot",
	"cmd_ls":"Lista los contenidos de una ruta<br>N = (Opcional) Selección simple o de rango<br>La ruta puede ser el CWD (cuando se ejecuta sin argumentos), un subdirectorio o un pariente del CWD (una selección simple como argumento)<br>Si el argumento es una selección de rango, mostrará los elementos seleccionados. Esto puede usarse para hacer pruebas de rango",
	"cmd_cd":"Cambia de CWD<br>N = (Obligatorio) Selección simple de un subdirectorio presente en el CWD ó un pariente del CWD",
	"cmd_back":"Cambia el CWD al padre<br>Falla si el CWD es la raíz '/'",
	"cmd_adl":"Activa o desactiva el listado automático de directorio (ADL en inglés)<br>Desactivado de forma predeterminada<br>De forma predeterminada, la única forma de que el contenido del CWD sea listado de forma automática es después de ejecutar '/cd' y '/back', pero con el ADL activado, el listado automático está disponible para más comandos que trabajen con archivos",
	"cmd_mkdir":"Crea un nuevo subdirectorio (una carpeta) en el CWD<br>N = (Obligatorio) Nombre del subdirectorio<br>El comando da  error si hay un recurso con el mismo nombre en el CWD<br>Este comando es compatible con el modo ADL",
	"cmd_mv":"Uso 1<br>Mover uno o más recursos (archivos o directorios) presentes en el CWD a un subdirectorio o pariente del CWD<br>Los argumentos A y B son obligatorios<br>A = Selección simple, rango o libre de elementos del CWD<br>B = Selección simple de un subdirectorio o un pariente del CWD<br><br>Uso 2<br>Cambiar el nombre de un recurso del CWD<br>los argumentos C y D son obligatorios<br>C = Selección simple de un recurso del CWD<br>D = Nuevo nombre para el recurso. En el caso de ser un archivo, debe incluirse el sufijo (extensión)",
	"cmd_rm":"Elimina uno o más recursos del CWD<br>N = (Obligatorio) Selección simple, rango o libre de recursos del CWD<br>Este comando no pide confirmación al borrar: los recursos seleccionados son borrados de forma permanente y al instante<br>Usted bajo ningún concepto debe eliminar recursos que formen parte de operaciones pendientes o en curso de otros comandos",
	"cmd_bren":"Renombrador de archivos en masa<br>Los argumentos X, Y y Z son obligatorios<br>X = Selección simple, rango o libre de recursos en el CWD. En el caso particular de seleccionar a un directorio con un selector simple, lo que se hace es seleccionar todos los archivos que tenga el directorio dentro. En el caso de la selección por rango o libre todos los subdirectorios seleccionados son ignorados. El comando arrojará un error en caso de que la cantidad de archivos a procesar sea menor de 2<br>Y = El tipo de operación. Hay 3 operaciones: 'A' (añadir), 'E' (enumerar), y 'R' (remplazar)<br>Z = Parámetros de la operación. Los parámetros deben estar en cierto formato según el tipo de operación ya que cada tipo de operación lleva su propio formato<br><br>Los parámetros de operaciones<br>A (agregar)<br>Agrega una cadena de texto adicional al principio (prefijo) o al final (sufijo) del tallo (el nombre del archivo sin la extensión<br>Formato (refijo): 'StringToAdd/'<br>Formato (sufijo):  '/StringToAdd'<br>E (enumerar): Renombra los archivos de modo tal que quede así: 'NuevoNombre + Número + extensión')<br>Formato: 'NewStem/InitialNumber/Digits'<br>R (remplazar):<br>Encuentra en el nombre de cada archivo dado un acadena de caracteres específica y la remplaza por una cadena de caracteres diferente<br>Format: 'ExistenteEnElNombre/NuevoTexto'<br><br>Cuando ejecuta este comando, va a salir un mensaje con el resultado de renombrar los archivos seleccionados pidiendo una confirmación para aplicar los cambios, Si ejecuta '/ok', los cambios serán aplicados. Si usa cualquier otro comando o una órden distinta de '/bren', la propuesta para renombrar se cancela o se cambia",
	"cmd_info":"Muestra información de un archivo de Telegram<br>Se usa respondiendo a un archivo de Telegram",
}