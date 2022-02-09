
//Ajustando conteúdo dinâmico da seção conhecimentos
const divCardsImg = document.querySelectorAll('.background--cards img')
const infoCards = document.querySelector('#conhecimentos--container p')

divCardsImg.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    console.log(element)
    switch (element.alt) {
      case 'HTML': infoCards.textContent = `
        HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. 
        Define o significado e a estrutura do conteúdo da web.
      `
        break;
      case 'CSS': infoCards.textContent = `
      Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, 
      e representa diversas possibilidades para a formatação. O CSS ajuda a editar, alinhar, 
      remover e trabalhar no espaço entre elementos de uma página.
      `
        break;
      case 'Javascript': infoCards.textContent = `
      JavaScript é uma linguagem de programação que permite a você implementar itens complexos 
      em páginas web. Toda vez que uma página da web faz mais do que simplesmente mostrar a você 
      informação estática. Mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos 
      ou gráficos 2D/3D animados, etc.
      `
        break;
      case 'ReactJs': infoCards.textContent = `
      O ReactJs é uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, 
      nomeadas para aplicações de página única. 
      `
        break;
      case 'Java': infoCards.textContent = `
      Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez 
      pela Sun Microsystems em 1995. Existem muitas aplicações e sites que não funcionarão, a 
      menos que você tenha o Java instalado, e mais desses são criados todos os dias.
      `
        break;
      case 'NodeJS': infoCards.textContent = `
      O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário 
      pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, 
      boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.
      `
        break;
    }
  })

  element.addEventListener('mouseout', () => {
    infoCards.textContent = '*Coloque o cursor do mouse dentro de algum card*'
  })
})

