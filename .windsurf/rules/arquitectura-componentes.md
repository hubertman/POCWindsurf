---
trigger: always_on
---

# Component Architecture Rules
- Los componentes deben ser funcionales (no clases).
- Props tipadas con `interface` o `type`.
- Evitar lógica compleja en la UI → mover a hooks o servicios.
- Un componente = una responsabilidad.