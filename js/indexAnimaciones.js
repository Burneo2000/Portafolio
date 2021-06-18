window.sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {
    sr.reveal(clase, {
        duration: duracion,
        origin: origen,
        distance: distancia
    });
}

animar('.animarMenu',3000,'bottom','-100px');
animar('.container__presentacion',3000,'top','100px');
animar('.container__presentacion-texto',4000,'top','100px');
animar('.container__redes',4000,'right','80px');
animar('.container__imagen',6000,'right','80px');
animar('.animarLogo',3000,'bottom','-100px');
animar('.sobreMi',3000,'right','80px');

// Mis habilidades
animar('.misHabilidades',3000, 'top','100px');