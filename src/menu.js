const content = document.getElementById('content')
const table = document.createElement('table')
table.id = 'tablee'

function menu(){
    table.innerHTML =""
    const heading = document.createElement('h1')
    heading.innerHTML="Menu List"
    content.appendChild(heading)   
    const hh1 = document.createElement('th')
    const hh2 = document.createElement('th')
    const hh3 = document.createElement('th')
    hh1.innerHTML ='Recipe'
    hh2.innerHTML ='Quantity'
    hh3.innerHTML ='Price'
    table.appendChild(hh1)
    table.appendChild(hh2)
    table.appendChild(hh3)
    content.appendChild(table)
    
    const recipe1 =new Recipe('Biriyani','1KG', '150');
    const recipe2 =new Recipe('Parotta','1', '15');
    const recipe3 =new Recipe('Mutton Chops','1KG', '300');
    const recipe4 =new Recipe('Chicken Chops','1KG', '200');
    const recipe6 =new Recipe('Chicken Gravy','1', '99');
    const recipe7 =new Recipe('Mutton Gravy','1', '150');
    const recipe8 =new Recipe('Fish Biriyani','1KG', '180');

    //recipe1.details()
}

function Recipe (recipe, quantity, price){
    
    this.recipe = recipe;
    this.quantity =quantity;
    this.price =price;

    this.details =function(){
        create(this.recipe, this.quantity, this.price)
    }
    this.details()
}

function create(recipe, quantity, price){
    
    const row = document.createElement('tr')
    row.style.textAlign ='center'
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    td1.innerHTML = recipe;
    td2.innerHTML =quantity;
    td3.innerHTML =price;
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    table.appendChild(row)
}
export{menu}