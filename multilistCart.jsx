// Ex 2 - remove any item from navbar with less than minStock in stock
// write out both the name and the number in stock in format apple:2
function NavBar ({stockItems}) {
    const [cart, setCart] = React.useState([]);
    const [stock, setStock] = React.useState(stockItems);
    const {Button} = ReactBootstrap;
    // event apple: 2
    const moveToCart = e => {
        let [name, num] = e.target.innerHTML.split(":");
        let addThisToCart = name;
        //use newStock = stock.map to find "name" and decrease number in stock by 1
        //only if instock is >= 0 do we move item to Cart and update stock
        let newStock = stock.map((item, index) => {
            if (item.name == name && item.instock > 0){
            item.instock --;
            setCart([...cart,addThisToCart])
            }
            return item;
        })
        setStock(newStock)
    }
    
    
    const updatedList = stock.map((item, index) => {
        return(
            <Button onClick={moveToCart} key={index}>{item.name}:{item.instock}</Button>
        )
    })

    const updatedCart = cart.map((item, index) => {
        return(
            <Button key={index}>{item}</Button>
        )
    })

// note that React needs to have a single Parent
    return (
        <>
        <h1>Shelf</h1>
        <ul style={{ listStyleType: "none"}}>{updatedList}</ul>
        <h1>Your Cart</h1>
        <ul style={{ listStyleType: "none"}}>{updatedCart}</ul>
        </>
    )
}
const menuItems = [
    {name: "apple", instock: 3},
    {name: "pineapple", instock: 3},
    {name: "pear", instock: 3},
    {name: "peach", instock: 3},
    {name: "orange", instock: 3}
];
ReactDOM.render(
    <NavBar stockItems = {menuItems} minstock={2}/>,
    document.getElementById('root')
);