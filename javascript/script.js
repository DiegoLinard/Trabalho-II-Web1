function mudar() {
    var armario = event.target; 
    var texto = armario.querySelector('.letra'); 
  
    if (armario.classList.contains("ocupado")) {
      armario.classList.remove("ocupado");
      armario.classList.add("desocupado");
      texto.textContent = "Desocupado";
    } else if (armario.classList.contains("desocupado")) {
      armario.classList.remove("desocupado");
      armario.classList.add("manutencao");
      texto.textContent = "Manutenção";
    } else if (armario.classList.contains("manutencao")) {
      armario.classList.remove("manutencao");
      armario.classList.add("ocupado");
      texto.textContent = "Ocupado";
    }
  }
  