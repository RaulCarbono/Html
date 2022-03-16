const fila =  document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda'); 
const flechaDerecha = document.getElementById('flecha-derecha'); 

// ? ------- -------- Event Listener para la flecha derecha. -------- --------

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadoresActivos = document.querySelector('.indicadores .activo');
   
    if(indicadoresActivos.nextSibling){
        indicadoresActivos.nextSibling.classList.add('activo');
        indicadoresActivos.classList.remove('activo');
    }
});
// ? ------- -------- Event Listener para la flecha izquierda. -------- --------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadoresActivos = document.querySelector('.indicadores .activo');
    if(indicadoresActivos.previousSibling){
        indicadoresActivos.previousSibling.classList.add('activo');
        indicadoresActivos.classList.remove('activo');
    }
})

// ?--------- ---------- paginacion -------- --------- 
const numeroPaginas = Math.ceil(peliculas.length /5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if( i === 0 ){
        indicador.classList.add('activo')
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;


        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

// ? ---- ------- Hover ---- --------- 

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));

});