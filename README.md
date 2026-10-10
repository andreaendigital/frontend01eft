# Pixel Arcade

## Presentación del proyecto

Pixel Arcade es una tienda web de videojuegos desarrollada como resultado de la evolución del trabajo realizado durante el bimestre. El proyecto comenzó como una interfaz de productos y fue incorporando progresivamente nuevos recursos de desarrollo frontend con React, hasta convertirse en un catálogo interactivo con filtros, carrito de compras y formulario de contacto.

Durante el bimestre se trabajó con:

- Componentes reutilizables en React.
- Separación de la interfaz en componentes `Navbar`, `HeroCarousel`, `ContactForm` y `Footer`.
- Props para comunicar información y eventos entre componentes.
- `useState` para administrar estados de la interfaz.
- `useEffect` para trabajar con efectos de la aplicación.
- Renderizado dinámico de productos mediante `.map()`.
- Renderizado condicional para estados vacíos, resultados de búsqueda y mensajes.
- Filtrado de productos por categoría.
- Búsqueda de videojuegos por nombre y descripción.
- Validaciones personalizadas de formularios.
- Manejo de mensajes de error, envío y confirmación.
- Diseño responsive con Bootstrap 5.
- Maquetación semántica con HTML5.
- Estilos personalizados con CSS y uso de Flexbox.
- Organización modular de una aplicación React con Vite.

El formulario de contacto utiliza actualmente un envío simulado para demostrar el flujo de validación y confirmación. No envía datos a un correo ni requiere un backend.

## Funcionalidades

### Catálogo de videojuegos

El catálogo contiene nueve videojuegos distribuidos en tres categorías:

- PlayStation 5.
- Xbox 360.
- Switch 2.

Cada tarjeta de producto presenta:

- Imagen.
- Nombre.
- Categoría.
- Descripción.
- Precio.
- Botón para agregar al carrito.

Los datos se encuentran en [`src/assets/products.js`](./src/assets/products.js) y las imágenes se almacenan en [`src/assets/img/`](./src/assets/img/).

### Filtro y búsqueda

La aplicación incluye:

- Menú desplegable para filtrar por categoría.
- Opción para mostrar todas las categorías.
- Búsqueda por nombre o descripción.
- Combinación del filtro por categoría con la búsqueda textual.
- Mensaje cuando no existen coincidencias.

### Carrito de compras

El carrito permite:

- Agregar productos.
- Agregar varias unidades del mismo videojuego.
- Mostrar la cantidad total en la barra de navegación.
- Eliminar productos individualmente.
- Mostrar un mensaje cuando está vacío.
- Calcular el total acumulado.
- Mostrar `Precio no disponible` si en el futuro se agrega un producto sin valor.

### Formulario de contacto

El formulario está implementado como un componente reutilizable en [`src/components/ContactForm.jsx`](./src/components/ContactForm.jsx).

Incluye:

- Estado React para nombre, correo y mensaje.
- Validación de nombre obligatorio.
- Validación de longitud del nombre entre 2 y 80 caracteres.
- Validación de caracteres permitidos en el nombre.
- Validación del formato del correo electrónico.
- Validación de mensaje entre 10 y 500 caracteres.
- Mensajes específicos debajo de cada campo.
- Indicadores visuales de campos inválidos.
- Estado de envío.
- Mensaje de confirmación exitoso.
- Mensaje de error cuando la validación no es correcta.
- Envío simulado sin backend.

El uso de `event.preventDefault()` permite que React controle la validación y la simulación del envío sin recargar la página.

### Modularidad de la interfaz

La estructura de la interfaz se divide en componentes reutilizables:

- [`Navbar.jsx`](./src/components/Navbar.jsx): navegación principal y contador del carrito mediante props.
- [`HeroCarousel.jsx`](./src/components/HeroCarousel.jsx): carrusel promocional independiente.
- [`ShoppingCart.jsx`](./src/components/ShoppingCart.jsx): búsqueda, filtro, tarjetas y carrito.
- [`ContactForm.jsx`](./src/components/ContactForm.jsx): formulario con estado y validaciones.
- [`Footer.jsx`](./src/components/Footer.jsx): pie de página reutilizable.
- [`App.jsx`](./src/App.jsx): composición general y estado del contador del carrito.

Esta separación mantiene en `App.jsx` únicamente la composición de la página y la comunicación entre las secciones principales, facilitando el mantenimiento y la reutilización.

## Evidencias de funcionalidades

Las siguientes capturas muestran las validaciones y estados principales del formulario:

### Validación de campos

![Validación de campos del formulario](./src/assets/img/formulariovalidacioncampos.png)

La imagen evidencia los indicadores visuales de campos inválidos y los mensajes específicos para:

- Nombre obligatorio.
- Longitud del nombre entre 2 y 80 caracteres.
- Caracteres permitidos en el nombre.
- Formato válido del correo electrónico.
- Mensaje entre 10 y 500 caracteres.

### Mensajes específicos de validación

![Mensajes específicos de validación](./src/assets/img/formulariovalidacionmensaje.png)

Cada campo muestra una explicación particular del error, en lugar de un mensaje genérico.

### Confirmación del envío simulado

![Mensaje de confirmación del formulario](./src/assets/img/formulariomensajeconfirmacion.png)

La confirmación se muestra después de completar correctamente el formulario. El envío es simulado y no transmite información a un servidor o correo electrónico.

### Búsqueda sin coincidencias

![Mensaje de productos sin coincidencias](./src/assets/img/mensajenocoincidencias.png)

Cuando la búsqueda o el filtro por categoría no encuentra videojuegos, la aplicación informa al usuario que no existen productos coincidentes.

### Filtro por categoría

![Despliegue del filtro por categorías](./src/assets/img/desplieguecategorias.png)

La imagen muestra el menú desplegable utilizado para filtrar los videojuegos por plataforma.

### Cambio del botón al agregar un producto

![Producto agregado al carrito](./src/assets/img/enelcarritocambioboton.png)

La imagen evidencia que, después de agregar un videojuego al carrito, el texto del botón cambia de `Agregar al carrito` a `En el carrito`.

### Navegación entre secciones

La barra de navegación permite desplazarse entre las secciones principales mediante enlaces internos:

- `Inicio` → sección principal.
- `Productos` → catálogo de videojuegos.
- `Carrito` → productos agregados y total.
- `Contacto` → formulario de contacto.

### Diseño y maquetación

La interfaz utiliza:

- Etiquetas semánticas HTML5: `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
- Bootstrap 5 para la navegación, tarjetas, formulario, botones, badges y diseño responsive.
- Flexbox mediante clases de Bootstrap y reglas CSS personalizadas.
- Carrusel promocional con imágenes de videojuegos.
- Estilos visuales personalizados en [`src/assets/styles.css`](./src/assets/styles.css).

### Diseño responsive

La aplicación se adapta a distintos tamaños de pantalla utilizando el sistema responsive de Bootstrap 5 y reglas CSS específicas:

- La barra de navegación se colapsa en pantallas pequeñas mediante `navbar-expand-lg`.
- El catálogo utiliza `col-12 col-md-6 col-lg-4`, mostrando una tarjeta por fila en móvil, dos en pantallas medianas y tres en escritorio.
- El buscador, el botón y el filtro de categoría utilizan `col-12` para apilarse en móvil y columnas responsive desde `md`.
- El carrusel utiliza una altura adaptable mediante `clamp()` para evitar que ocupe demasiado espacio en teléfonos.
- Las imágenes de las tarjetas mantienen una altura controlada y `object-fit: contain` para mostrar las portadas completas.
- El carrito permite que los nombres largos se ajusten y que el botón `Quitar` conserve su espacio.
- El formulario y los paneles reducen su padding en pantallas pequeñas.
- Se utilizan clases como `flex-wrap`, `flex-grow-1`, `w-100` y `text-nowrap` para evitar cortes y desbordamientos.

## Tecnologías utilizadas

- React 18.
- Vite.
- Bootstrap 5.
- JavaScript.
- HTML5.
- CSS3.
- npm.

## Requisitos previos

Antes de ejecutar el proyecto se necesita tener instalado:

1. **Node.js**, preferentemente una versión LTS.
2. **npm**, que se instala normalmente junto con Node.js.
3. Un navegador web actualizado.

Para comprobar las versiones instaladas:

```bash
node --version
npm --version
```

Si alguno de esos comandos no funciona, instala Node.js desde:

<https://nodejs.org/>

## Instalación y ejecución local

### 1. Clonar o descargar el proyecto

Ubica el proyecto en una carpeta local. Luego abre una terminal en la carpeta raíz, donde se encuentran `package.json` y `vite.config.js`.

En Windows, por ejemplo:

```powershell
cd "C:\ruta\al\proyecto\sem09ETF"
```

### 2. Instalar las dependencias

Ejecuta:

```bash
npm install
```

Este comando lee `package.json` y descarga las dependencias necesarias en la carpeta `node_modules`.

### 3. Ejecutar en modo desarrollo

Inicia el servidor local con:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abre esa dirección en el navegador. También puedes pedir que Vite abra el navegador automáticamente:

```bash
npm run dev -- --open
```

Para detener el servidor de desarrollo, presiona `Ctrl + C` en la terminal.

## Generar la versión de producción

Para crear una compilación optimizada, ejecuta:

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`. Esta carpeta es una salida de compilación y no debe subirse al repositorio.

## Visualizar la compilación de producción

Después de ejecutar `npm run build`, inicia el servidor de previsualización:

```bash
npm run preview
```

Vite mostrará una dirección local, normalmente:

```text
http://localhost:4173/
```

Abre esa dirección en el navegador para revisar la versión compilada.

## Rutas locales y despliegue en GitHub Pages

La configuración actual de Vite no define una ruta base personalizada, por lo que el proyecto se ejecuta localmente desde la raíz:

```text
http://localhost:5173/
```

La carpeta física del proyecto no determina por sí sola la URL. La propiedad `base` de [`vite.config.js`](./vite.config.js) define la ruta pública que Vite utilizará para cargar los recursos.

### Publicación en un repositorio de GitHub

GitHub Pages normalmente publica el sitio dentro de una subruta con el nombre del repositorio. Por ejemplo, si el repositorio se llama `pixel-arcade`, la configuración de Vite debe ser:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pixel-arcade/",
  plugins: [react()],
});
```

En ese caso, la URL de GitHub Pages sería similar a:

```text
https://tu-usuario.github.io/pixel-arcade/
```

El nombre `pixel-arcade` debe reemplazarse por el nombre real del repositorio. Después de cambiar `base`, se debe ejecutar nuevamente `npm run build` antes de publicar.

### Publicación en la raíz de un dominio

Si GitHub Pages está configurado para un sitio de usuario u organización, o se utiliza un dominio personalizado en la raíz, se puede mantener:

```js
base: "/"
```

o dejar la propiedad `base` sin definir, como está actualmente. En ese escenario la URL puede ser:

```text
https://tu-usuario.github.io/
```

Por lo tanto, cambiar `base` a la raíz permite ejecutar correctamente el proyecto en local, pero **no hace que se publique automáticamente en la raíz de GitHub Pages**. La ruta final depende de si GitHub Pages utiliza un repositorio de proyecto, un sitio de usuario/organización o un dominio personalizado.

## Estructura principal

```text
sem09ETF/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── assets/
│   │   ├── products.js
│   │   ├── styles.css
│   │   └── img/
│   │       ├── formulariovalidacioncampos.png
│   │       ├── formulariovalidacionmensaje.png
│   │       ├── formulariomensajeconfirmacion.png
│   │       ├── mensajenocoincidencias.png
│   │       └── ... imágenes del catálogo
│   └── components/
│       ├── CartTotal.jsx
│       ├── ContactForm.jsx
│       ├── Counter.jsx
│       ├── Footer.jsx
│       ├── HeroCarousel.jsx
│       ├── Navbar.jsx
│       ├── ProductList.jsx
│       ├── ShoppingCart.jsx
│       └── UserStatus.jsx
└── .gitignore
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |

## Estado del proyecto

El proyecto está preparado para ejecutarse localmente y demostrar:

- Catálogo dinámico de videojuegos.
- Filtrado por categoría.
- Búsqueda de productos.
- Carrito de compras.
- Cálculo del total.
- Formulario validado con React.
- Envío simulado con confirmación visual.

El formulario no realiza envíos reales. Para conectarlo posteriormente con un correo o un backend, se puede reemplazar la función de simulación de [`ContactForm.jsx`](./src/components/ContactForm.jsx) por una solicitud `fetch()` hacia un servicio externo o una API.
