function calidad(width, height) {
  if (height >= 7680 && width >= 4320) {
    return "8k";
  } else if (height >= 3840 && width >= 2160) {
    return "4k";
  } else if (height >= 2560 && width >= 1440) {
    return "WQHD";
  } else if (height >= 1920 && width >= 1080) {
    return "FHD";
  } else if (height >= 1280 && width >= 720) {
    return "HD";
  } else {
    return "No es una pantalla con resolucion comun";
  }
}

let resolucion = calidad(720, 1280);
console.log(resolucion);
