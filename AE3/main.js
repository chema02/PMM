function mayus(e) {
  e.value = e.value.toUpperCase();
}
document.addEventListener('DOMContentLoaded', () => {
  const paso1Container = document.getElementById('paso1');
  const paso2Container = document.getElementById('paso2');
  const paso3Container = document.getElementById('paso3');
  const paso4Container = document.getElementById('paso4');
  const boton1Container = document.getElementById('1');
  const boton2Container = document.getElementById('2');
  const parrafoContainer = document.getElementsByTagName('p');
  const input = document.querySelector('input');

  boton1Container.style.display = 'none';
  boton2Container.style.display = 'none';
  paso2Container.style.display = 'none';
  paso3Container.style.display = 'none';
  paso4Container.style.display = 'none';
  function paso1() {
    boton2Container.style.display = 'none';
    paso2Container.style.display = 'none';
    paso1Container.style.display = 'block';
  }
  function paso2() {
    boton2Container.style.display = 'block';
    paso2Container.style.display = 'block';
    paso1Container.style.display = 'none';

  }
  function paso3() {
    paso3Container.style.display = 'block';
    paso2Container.style.display = 'none';

  }
  function habilitar() {
    boton1Container.style.display = 'block';
  }
  input.onkeydown = habilitar;
  document.getElementById('1').addEventListener('click', paso2);
  document.getElementById('2').addEventListener('click', paso1);
  //document.getElementById('1').addEventListener('click',paso3);
  //document.getElementById('1').onclick=paso3;
});


