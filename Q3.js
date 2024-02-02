//Shopping Cart Object
let shoppingCart = [ 
   { name: "Lenovo Thinkpad",
     Year: 2022,
     PriceUsd: 450
   },
   { name: "Hp Pavillion",
     Year: 2023,
     PriceUsd: 490
   },
   { name: "Macbook M2",
     Year: 2023,
     PriceUsd: 2000
   }
]

let exchangeRate = 80;

let changeToInr = (Priceusd) => Priceusd * exchangeRate

let newCart = shoppingCart.map((shopping)=>({
   ...shopping ,
    priceind: changeToInr(shopping.PriceUsd)
    
})
)

console.log(newCart);
//Output=>>
// [
//     {
//       name: 'Lenovo Thinkpad',
//       Year: 2022,
//       PriceUsd: 450,
//       priceind: 36000
//     },
//     { name: 'Hp Pavillion', Year: 2023, PriceUsd: 490, priceind: 39200 },
//     { name: 'Macbook M2', Year: 2023, PriceUsd: 2000, priceind: 160000 }
//   ]
