function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'))
    let item = ''
    basket.forEach(x => {
        var pricesl = x.Price.slice(1, 3);

        let total = parseFloat(pricesl) * parseFloat(x.Count);
        item += `
        <tr id='${x.Id}'>
          <th scope="row">${x.Id}</th>
           <td>
            <img src="${x.Image}" alt="">
            </td>
            <td>${x.Name}</td>
            <td><input class="input" min='1'  id="input" type="number" Value=${x.Count}> </td>
            <td>${x.Price}</td>
            <td>${total}</td>
            <td><i class="fa-solid fa-trash trash"></i></td>
      </tr>
        `;
    })
    document.getElementById('tbody').innerHTML = item
}
GetProducts();


let inputs = document.querySelectorAll('.input');
let basket = JSON.parse(localStorage.getItem('basket'))
inputs.forEach(inp => {
    this.addEventListener('change', function (e) {
        let value = e.target.value
        var price = e.target.parentElement.parentElement.children[4].innerHTML
        let pricesl = price.slice(1, 3);



        e.target.parentElement.parentElement.children[5].innerHTML = pricesl * value;

    })

})
function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('basketcount').innerHTML = basket.length;
}
CountProduct();
let trashs = document.querySelectorAll('.trash')

trashs.forEach(trash => {
    trash.onclick=function(){
        let prId = this.parentElement.parentElement.id
            let prparent=this.parentElement.parentElement
            console.log(prId);
    
        let basket=JSON.parse(localStorage.getItem('basket'));
        
        let arr=[]
    for(let i=0;i<basket.length;i++){
        if(basket[i].Id!=prId){
            arr.push(basket[i])
          
        }
    
    }
    prparent.style.display='none'
        
    localStorage.setItem('basket', JSON.stringify(arr))
    
    CountProduct()


}
});