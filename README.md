# Casa Nativa

Este es mi proyecto del taller de frameworks CSS. Es una página web para una casa de hospedaje rural llamada **Casa Nativa**

La página tiene cinco partes: el menú de arriba, la portada con el título principal, los servicios, el formulario para reservar y el pie de página. Se ve bien en el celular y en el computador.


**Tres cosas de UIkit que me sirvieron:**
1. Trae componentes ya hechos, como el menú, las tarjetas y las alertas. Solo hay que usar sus clases, y no tuve que hacerlos desde cero.
2. Tiene clases para que la página se adapte a cada pantalla. Por ejemplo, `uk-width-1-2@s` hace que algo ocupe la mitad del ancho en pantallas medianas.
3. Con clases como `uk-visible@m` y `uk-hidden@m` pude mostrar el menú normal en el computador y la hamburguesa en el celular.

**Tres componentes de UIkit que usé en la página:**
1. **Navbar y offcanvas** (`uk-navbar`, `uk-offcanvas`): para el menú de arriba y el menú del celular, que se abre desde un lado.
2. **Grid y cards** (`uk-grid`, `uk-card`): para ordenar las tarjetas de servicios en columnas.
3. **Formulario** (`uk-input`, `uk-select`, `uk-textarea`): para los campos del formulario de reserva.

Además escribí mi propio CSS en `css/styles.css` para cambiar los colores y las letras, y así la página tuviera un estilo propio.

## Animaciones con Anime.js

Usé Anime.js, una librería para hacer animaciones, en dos partes:

- **Menú:** al abrir la página, el logo y los enlaces aparecen desde arriba, uno detrás de otro. En el celular, los enlaces también aparecen uno por uno cuando abro el menú.
- **Servicios:** las cuatro tarjetas aparecen una después de otra cuando llego a esa sección al bajar por la página.


## Lo que aprendí

- Un framework ahorra mucho trabajo, pero igual hay que escribir algo de CSS para que la página se vea como uno quiere.
- Las animaciones deben ser cortas y suaves para que no estorben al leer.
- Hacer commits por partes ayuda a ver cómo va avanzando el proyecto (aunque siempre se me olvida)
