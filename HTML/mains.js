document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.querySelector('.pantalla');
    const calculadora = document.querySelector('.calculadora');
    const botones = document.querySelectorAll('button[name="tecla"], button[name="operador"], button[name="igual"], button[name="borrar"], button[name="borrar1"]');
  
    let operacion = '';
    let resultado = '';
  
    botones.forEach((button) => {
      button.addEventListener('click', () => {
        const tecla = button.textContent;
  
        if(tecla === 'C') {
           limpiarPantalla();
        } else if (tecla === '=') {
          calcularResultado();
        } else if (tecla === '<') {
          eliminarUltimoCaracter();
        } else {
          agregarCaracter(tecla);
        }
      });
    });
  
    function agregarCaracter(caracter) {
      operacion += caracter;
      actualizarPantalla(operacion);
    }
  
    function eliminarUltimoCaracter() {
      operacion = operacion.slice(0, -1);
      actualizarPantalla(operacion);
    }
  
    function calcularResultado() {
      try {
        resultado = realizarCalculo(operacion);
        actualizarPantalla(resultado);
      } catch (error) {
        actualizarPantalla('Error');
      }
    }
  
    function limpiarPantalla() {
      operacion = '';
      resultado = '';
      actualizarPantalla('');
    }
  
    function actualizarPantalla(valor) {
      pantalla.textContent = valor;
    }

    function realizarCalculo(expresion){
      try {
        return new Function('return ' + expresion)();
      } catch (error){
        throw new Error('Error');
      }
    }
  });