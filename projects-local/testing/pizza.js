let pizza = [
  {
    sauce: "marinara",
    meat: "ham"
  },
  {
    sauce: "ranch",
    meat: "chicken"
  },
  {
    sauce: "bbq",
    meat: "bacon"
  }
]


for (let i = 0; i < pizza.length; i++) {
  let pizzas = pizza[i]
  console.log("sauce: ", pizzas.sauce, "\nmeat: ", pizzas.meat)
}
/*for (let number = 0; number <= 25; number++) {
  let numbers = number + 1
  if (numbers % 2 == 0) {
    console.log("even numbers: ", numbers)
  }
}*/
