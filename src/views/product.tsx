const ProductCategoryRow = ({category}) => {
    return (
        <div>
            <tr>
                <th colSpan={2}>
                    {category}
                </th>
            </tr>
        </div>
    )
}

type Product = {
    category: string
    price: string
    stocked: boolean
    name: string
}

const ProductRow = ({product} : {product: Product})  => {
    const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>
    
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

const ProductTable = ({products}:{products: Product[]}) => {
    const rows: JSX.Element[] = []
    let lastCategory = null
    products.forEach((product) => {
        if (product.category != lastCategory) {
            rows.push(
                <ProductCategoryRow 
                category={product.category} 
                key={product.category}>
                </ProductCategoryRow>
            )
        }
        rows.push(<ProductRow product={product} key={product.name}></ProductRow>)
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="Search..."></input>
            <p>
                <input type="checkbox"></input>
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

const FilterableProductTable = ({products}:{products: Product[]}) => {
    return (
        <div>
            <SearchBar></SearchBar>
            <ProductTable products={products}></ProductTable>
        </div>
    )
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

export default  () => {
    return (
        <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
    )
}