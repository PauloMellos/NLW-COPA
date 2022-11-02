function createCard(date, day){
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        <li>
         <img src="./assets/icon-Brazil.svg" alt="Bandeira do Brasil"/>
         <strong>16:00</strong>
         <img src="./assets/icon-Servia.svg" alt="Bandeira da Servia"/>                        
        </li>
      </ul>
    </div>
`
}
document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="logo nlw">
  </header>
  <main id="cards">
   ${createCard('24/11', 'quinta')} 
   ${createCard('28/11', 'segunda' )}
   ${createCard('02/12', 'sexta')}
  </main>  
`
