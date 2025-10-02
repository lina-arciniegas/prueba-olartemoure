# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## MIS PROBLEMAS Y CÓMO LOS SOLUCIONÉ

Mis problemas y cómo los solucioné. Mi problema al principio era que no podía instalar React, específicamente Node.js y npm para poder crear la interfaz, ya que cuando instalé node, no me dejaba verificar si tenía instalada la versión en Power Shell de Visual Studio Code. 

Intenté varias veces y no me dejaba instalar, incluso intenté desintalar y reinstalar nuevamente pero no me funcionaba. Y el problema principal en el que estab aatascada es que cuando quería comprobar la instalación en la CMD funcionaba, pero curiosamente en PoweerShell no, y neceistaba solucionarlo para poder empezar a el proyecto, puesto que la terminal de Visual Studio Code solo funciona con esta. Luego, decidí instalar las nuevas herramientas de Node que em recomendaba Microsoft directamente desde la interfaz de PowerShell y seguí las instrucciones, pero después de varios minutos noté que estab alento y no me funcionó. Así que decidí enficarme en el mensaje del error, y busqué en el enlace que me proporcionaba información para entender el error. Ahí entendí que el problema era porque PowerShell no tenía todos los permisos, así que busqué en Google como activar los permisos y encontré cuál era el comando a realizar para dar los permisos. 

Finalmente, esto me funcionó, y pude hacer la instalación y la creación del proyecto front-end con React, y por lo que pude crear, un circulo que azul que al dar clic cambie a color verde.