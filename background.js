// =======================
// CONFIGURACIÓN DE PATRONES
// =======================

// Si la URL CONTIENE alguno de estos textos → se borra
const DELETE_IF_CONTAINS = [
  "ejemplo.com"
];

// Las extenciones estan dentro de la web: brave://extensions/ o extenciones de google

// Si la URL EMPIEZA con alguno de estos prefijos → se borra
const DELETE_IF_STARTS_WITH = [

  "https://ejemplo.com/",
  "https://ejemplo.com/",
  "https://ejemplo.com/",
  "https://ejemplo.com/",
  "https://ejemplo.com/",
  "https://ejemplo.com/",
];

// =======================

chrome.history.onVisited.addListener((result) => {
  const url = result.url;

  /* =========
       BORRADO POR CONTENIDO
       ========= */
  for (const text of DELETE_IF_CONTAINS) {
    if (url.includes(text)) {
      chrome.history.deleteUrl({ url });
      return;
    }
  }

  /* =========
     BORRADO POR PREFIJO
     ========= */
  for (const prefix of DELETE_IF_STARTS_WITH) {
    if (url.startsWith(prefix)) {
      chrome.history.deleteUrl({ url });
      return;
    }
  }
});
