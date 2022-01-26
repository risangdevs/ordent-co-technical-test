const fs = require(`fs`);

let product = JSON.parse(fs.readFileSync("./product.json", "utf-8"));
let filteredProduct = product.map((e) => {
  return {
    name: e.title,
    image: e.image,
    description: e.description,
    price: e.price * 10000,
  };
});
console.log(filteredProduct);
let toFilter = fs.writeFileSync(
  "./productFiltered.json",
  JSON.stringify(filteredProduct),
  "utf-8"
);
