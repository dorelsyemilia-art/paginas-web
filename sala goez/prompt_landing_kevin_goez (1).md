# PROMPT PARA CLAUDE CODE — Landing "Sala GOEZ" (Kevin Goez)

## STACK TÉCNICO
HTML/CSS/JS plano (sin framework). Debe quedar listo para subirse a cualquier
hosting estático sin build step. Un solo `index.html` con CSS y JS en el mismo
archivo o en `styles.css` / `script.js` separados, como prefieras — pero nada de
Next.js/React/build tools.

## SI SE ADJUNTAN IMÁGENES DE REFERENCIA VISUAL (fondo rojo/negro)
Esas capturas son SOLO referencia de estructura y mecánica (hero, storytelling,
carrusel de resultados, formulario multi-step). El color de esas imágenes NO se
replica bajo ninguna circunstancia — usa exclusivamente la paleta negro/verde
definida abajo (verde tomado del logo Agencia GOEZ).

## CONTEXTO
Landing page para captar leads fríos de Meta Ads que aplican a una llamada de ventas
para una mentoría de dropshipping/e-commerce ("Sala GOEZ"), impartida por Kevin Goez.
El objetivo NO es vender la mentoría en esta página — es calificar al lead y conseguir
que agende una llamada.

Referencia de estructura y mecánica (no de copy ni colores): funnel tipo "de estudiante
perdido a millones" con hero + storytelling + carrusel de resultados + formulario
multi-step de calificación.

## IDENTIDAD VISUAL

- Fondo principal: negro `#0A0A0A`
- Texto principal: blanco `#FFFFFF`
- Acento de marca: verde tomado del logo oficial "Agencia GOEZ Marketing" (adjunto
  como asset — sample el verde exacto del archivo, aprox `#1FA35A`–`#2ECC71`, pero usar
  el valor real del logo, no aproximar a ojo)
- Tipografía: geométrica sans-serif, bold/black para titulares (tipo Montserrat
  ExtraBold o similar), regular/medium para cuerpo
- Estilo general: fondo oscuro, alto contraste, resplandor (glow) sutil en verde
  detrás de elementos clave (headline, botones, marcos de imágenes/video) — inspirado
  en la estética ya usada en el contenido personal de Kevin
- Botones CTA: fondo verde sólido, texto negro o blanco (verificar contraste), esquinas
  ligeramente redondeadas, con glow sutil alrededor
- Logo de Agencia GOEZ disponible como asset — usar en header/footer

## ESTRUCTURA Y COPY EXACTO

### 1. Hero
- Logo arriba: "Kevin Goez" (wordmark en verde con efecto glow, según asset de
  referencia)
- Headline (grande, bold):
  "Aprende cómo pasé de camarero y asesor inmobiliario en Tecnocasa a vivir 100%
  del dropshipping"
- Subheadline:
  "Empecé completamente desde 0 en 2024. Te enseño cómo puedes hacerlo paso a paso
  en mi formación."
- Video de bienvenida: dejar el bloque/reproductor listo con marco y placeholder
  (aún no está grabado — dejar comentario `<!-- PENDIENTE: video bienvenida Kevin -->`)
- CTA: **"AGENDAR LLAMADA"** (no "recibir clase gratis" — este funnel no tiene clase
  gratuita, va directo a llamada calificada)

### 2. Historia personal (storytelling)
- Bloque de texto + imagen lifestyle al lado (usar foto del coche — asset adjunto)
- Copy (adaptar tono a primera persona, cercano pero seguro, sin exagerar más de lo
  que ya está aquí):
  "De camarero y asesor inmobiliario en Tecnocasa a facturar miles en dropshipping.
  Empecé creando mi propia agencia de marketing, y con esa base construí después mi
  camino en el e-commerce. Si yo pude hacerlo empezando desde cero, tú también puedes."
- CTA repetido: "Agendar llamada"

### 3. Resultados de alumnos / resultados propios
- Carrusel horizontal deslizante (igual mecánica que la referencia)
- Usar las capturas reales adjuntas: dashboards de Shopify (sesiones, ventas
  totales, pedidos) y capturas de WhatsApp con mensajes de alumnos
- IMPORTANTE: cada tarjeta del carrusel debe llevar una micro-etiqueta de contexto
  (periodo de la captura, ej. "Ago 2026" o "Últimos 30 días") ya que las imágenes
  originales la incluyen — no recortar esa información
- Diseñar el carrusel como modular/expandible: hoy hay pocas piezas, debe ser fácil
  agregar más testimonios después sin rehacer el layout
- Sección con pocos casos por ahora — no rellenar con contenido inventado

### 4. Formulario de calificación (multi-step)
- Diseño idéntico en mecánica a la referencia: contador de progreso "01 → 06",
  una pregunta por pantalla, opciones tipo A/B/C en tarjetas seleccionables
- Preguntas (usar tal cual, tono directo/con humor ya validado):

  **01/06 — ¿Cuándo estarías disponible para empezar?**
  *Si tu aplicación es aceptada.*
  A) Ahora mismo
  B) Esta semana
  C) No lo sé porque no sé tomar decisiones

  **02/06 — ¿Cuál es tu situación actual?**
  A) Tengo trabajo/estudios y quiero un cambio
  B) Ya lo intenté antes y no funcionó
  C) Estoy empezando completamente de cero

  **03/06 — ¿Cuánto podrías invertir para arrancar tu tienda?**
  *Hablamos de presupuesto inicial, no del coste de la mentoría.*
  A) Menos de 500€
  B) Entre 500€ y 2.000€
  C) Más de 2.000€

  **04/06 — ¿Cuántas horas a la semana le podrías dedicar?**
  A) Menos de 5 horas
  B) Entre 5 y 15 horas
  C) Todo el tiempo que haga falta

  **05/06 — ¿Qué es lo que más te frena ahora mismo?**
  A) No sé por dónde empezar
  B) Ya lo intenté y no me salió
  C) Tengo miedo a invertir y que no funcione

  **06/06 — ¿Qué tan en serio te lo estás tomando?**
  A) 100% comprometido, quiero empezar ya
  B) Interesado, pero quiero ver si encajo
  C) Solo estoy mirando opciones

- Al terminar: pantalla final "Rellena tus datos para reservar tu llamada" con
  campos nombre, email, WhatsApp
- CTA final: "RESERVAR MI LLAMADA"

### 5. Footer
- Logo Agencia GOEZ
- Aviso legal básico / redes sociales (placeholder, a definir)

## ASSETS DISPONIBLES (adjuntar a Claude Code junto con este prompt)
- Logo "Kevin Goez" (wordmark verde con glow, sobre fondo negro)
- Logo "Agencia GOEZ Marketing" (circular, G|Z, verde/blanco/negro) — usar para
  extraer el verde oficial
- Foto lifestyle de Kevin junto al coche, con notificaciones de Shopify
- 8 capturas de resultados (dashboards de Shopify + chats de WhatsApp) para el
  carrusel de la sección 3

## PENDIENTES (dejar como placeholders claros en el código, comentados)
- Video de bienvenida del hero (aún no grabado)
- Copy legal del footer
- Posibles testimonios adicionales a futuro (diseñar el carrusel pensando en esto)

## NOTAS TÉCNICAS PARA VÍCTOR
- Mobile-first: la mayoría del tráfico va a venir de Meta Ads en móvil
- El formulario multi-step debe guardar el progreso visualmente (barra tipo "01→06")
  igual que la referencia
- Mantener performance alta: las imágenes de resultados deben optimizarse
  (no cargar los 8 assets pesados sin comprimir)
