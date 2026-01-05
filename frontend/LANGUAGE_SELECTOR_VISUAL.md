# Guía Visual - Sistema de Idiomas

## 📊 Dónde aparece el selector

### En Desktop (Navbar)
```
[Logo]     [About] [Skills] [Projects] [Contact] [ES/EN dropdown] [Resume Button]
```

El selector de idioma es un dropdown simple con dos opciones:
- **ES** - Español (por defecto)
- **EN** - English

### En Mobile (Menú Desplegable)
Cuando se abre el menú móvil, el selector aparece de la misma forma:
```
[About]
[Skills]
[Projects]
[Contact]
[ES/EN dropdown]
[Resume Button]
```

## 🎨 Estilos del Selector

```css
/* Estilos aplicados al select */
font-mono text-sm
bg-background
text-foreground
border border-border
rounded px-3 py-1
hover:border-primary
transition-colors
cursor-pointer
```

El selector:
- Tiene un border gris oscuro (`border-border`)
- Cambia a color primario al pasar el mouse
- Usa la fuente monospace para consistencia
- Se ve bien tanto en light como en dark mode

## 🔄 Comportamiento

1. **Seleccionar idioma**: Click en el dropdown → Selecciona ES o EN
2. **Cambio inmediato**: Toda la página se traduce al instante
3. **Persistencia**: El idioma se guarda en localStorage
4. **Próxima visita**: Se carga con el idioma que tenías seleccionado

## 📱 Responsividad

- **Desktop (≥768px)**: Selector en la barra de navegación
- **Mobile (<768px)**: Selector en el menú desplegable de navegación

## 🌐 Idiomas Soportados

| Código | Idioma | Por Defecto |
|--------|--------|------------|
| `es` | Español | ✅ Sí |
| `en` | English | ❌ No |

## 🎯 Secciones Traducidas

Todas estas secciones están completamente traducidas:

- ✅ Navegación (About, Skills, Projects, Contact, Resume)
- ✅ Hero (saludo, profesión, descripción, botones)
- ✅ About (descripción, estadísticas, cards de cualidades)
- ✅ Skills (títulos, descripciones, tecnologías)
- ✅ Projects (títulos, descripciones)
- ✅ Contact (encabezado, descripción, botón)
- ✅ Footer (créditos)
- ✅ ProjectDetails (etiquetas, arquitectura, imágenes)
- ✅ NotFound (página 404)

## 💡 Ejemplo de Uso

Para ver los idiomas en acción:
1. Abre tu portfolio
2. Localiza el selector de idioma en el navbar
3. Cambia entre ES y EN
4. Observa cómo toda la página se traduce en tiempo real
5. Recarga la página y verifica que el idioma se mantiene
