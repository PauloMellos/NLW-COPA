function createCard() {
  return `
  <div class="card">
   <h2>24/11 <span>quinta</span></h2>
    <ul>
      <li>
         <img src="./assets/icon-Brazil.svg" alt="Bandeira do Brasil"/>
         <strong>16:00</strong>
         <img src="./assets/icon-Servia.svg.svg" alt="Bandeira da Servia"/>
      </li>
    </lu>
  </div>  
`
}

document.querySelector(#app).innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="logo nlw">
  </header>
  <main>
   ${createCard()} 
   ${createCard()}
   ${createCard()}
  </main>  
`
