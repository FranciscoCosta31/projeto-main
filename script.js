function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    //se tiver sem light mod, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}

// Nova função para trocar entre o Menu Principal e o Menu de Produtos
function toggleMenu() {
  const mainMenu = document.querySelector("#main-menu")
  const productsMenu = document.querySelector("#products-menu")

  // Se o menu principal estiver visível, ele esconde e mostra o de produtos
  if (mainMenu.style.display !== "none") {
    mainMenu.style.display = "none"
    productsMenu.style.display = "block"
  } else {
    // Caso contrário, faz o inverso (volta para o início)
    mainMenu.style.display = "block"
    productsMenu.style.display = "none"
  }
}
