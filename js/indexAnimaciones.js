window.sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {
    sr.reveal(clase, {
        duration: duracion,
        origin: origen,
        distance: distancia
    });
}

animar('.principal',3000,'top','100px');
animar('.animarMenu',3000,'bottom','-100px');
animar('.animarLogo',3000,'bottom','-100px');
