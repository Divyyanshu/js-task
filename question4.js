// Task 4: Search and Update Based on Condition
// 1. Create an array of products, including duplicates.
// 2. If a specific product (e.g., "phone") is found, remove it from the array using splice.
// 3. If not found, add it to the beginning using unshift.

let products = ["ac ", "tv", "phone", "washingmachine", "trimmer", "phone" , "mobile"];
const updateProductList = (product) => {
    const index = products.indexOf(product);
    if (index !== -1) {
        products.splice(index, 1)
        console.log(`"${product}" is found and remove from the list`)
    } else {
        products.unshift(product)
        console.log(`"${product}" is not found and added the products in the list`)
    }
}

console.log(products);
updateProductList("phone")
console.log(products)

updateProductList("earphone")
console.log(products)