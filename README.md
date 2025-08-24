# 🏨 Tu Mejor Reserva

Una aplicación web interactiva para ayudarte a encontrar la mejor opción de alojamiento y viaje, comparando precios de hoteles y otros gastos de forma clara y sencilla.

## 📝 Descripción del proyecto

"Tu Mejor Reserva" es una herramienta web diseñada para simplificar el proceso de planificación de viajes. La aplicación permite a los usuarios introducir los detalles de su estancia en un hotel (nombre, número de personas, precio por día, días de alojamiento y descuentos) y calcula el coste total.

Además, ofrece funcionalidades dinámicas para incluir gastos adicionales como el alquiler de un coche o la conversión de divisas para viajes al extranjero, todo en una interfaz intuitiva.

La aplicación también guarda un historial de las consultas realizadas, mostrando un resumen de cada hotel con su precio total. Al hacer clic en un hotel guardado, se muestra un desglose detallado de su coste, permitiéndote tomar la mejor decisión de calidad-precio.

## ✨ Características principales

* **Cálculo de Coste de Hotel:** Introduce los datos necesarios de la posible reserva para obtener el precio total, incluyendo descuentos.

* **Formulario Dinámico para Coche:** Al hacer click en el checkbox, muestra u oculta automáticamente los campos para calcular el coste de un coche de alquiler.

* **Conversión de Moneda:** Si planeas un viaje internacional, haciendo click en el checkbox activa un menú desplegable que te permite convertir el coste total de euros a otra moneda usando la API de **ExchangeRate-API**.

* **Historial de Consultas:** El panel de la izquierda guarda los hoteles consultados, mostrando el nombre y el precio final.

* **Desglose Detallado:** Al pulsar el boton "Calcular el total", podrás ver un desglose de la factura de la posible reserva. Si seleccionas un hotel del historial, se muestra la factura completa de ese hotel con el desglose de todos los gastos.

* **Validación de Formularios:** Se han implementado validaciones para asegurar que los datos introducidos son correctos antes de realizar cualquier cálculo.

## 🛠️ Tecnologías utilizadas

El proyecto está construido con las siguientes tecnologías:

* **React:** Biblioteca de JavaScript para construir interfaces de usuario.

* **Vite:** Herramienta de construcción para proyectos de frontend moderna y rápida.

* **Tailwind CSS:** Framework de CSS para un desarrollo rápido y con estilo.

* **React Hooks:** `useState` y `useEffect` para la gestión del estado y efectos secundarios.

* **API de ExchangeRate-API:** Para obtener los tipos de cambio de divisas en tiempo real.

* **Props Condicionales:** Para el renderizado dinámico de los componentes.

* **Estructura de Componentes:** Organización del código en componentes reutilizables (`HotelForm`, `CarForm`, `Bill`).

## 🚀 Cómo usarlo

1. Clona el repositorio:
   `git clone https://github.com/Tu-Usuario/Hotel-price-comparison-react.git`

2. Instala las dependencias:
   `npm install`

3. Ejecuta el proyecto:
   `npm run dev`

4. Abre la aplicación en tu navegador:
   `http://localhost:5173/` (o el puerto que te indique Vite)


