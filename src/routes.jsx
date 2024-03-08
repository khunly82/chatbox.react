import ProductForm from "./pages/ProductForm";
import ProductList from "./pages/ProductsList";

const routes = [
    { path: '',  element: <ProductList /> },
    { path: 'product-form', element: <ProductForm /> }
]

export default routes;