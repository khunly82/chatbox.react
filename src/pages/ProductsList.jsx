import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // ngOnInit
        axios.get('https://localhost:7245/api/product')
            .then(({data}) => setProducts(data))
            .catch(error => console.error(error));
    }, [])

    const play = (file) => {
        const audio = new Audio('https://localhost:7245/Audios/' + file);
        audio.play();
    }

    return <>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Categorie</th>
                    <th>Description audio</th>
                </tr>
            </thead>
            <tbody>
                { products.map(p => <tr key={p.id}>
                    <td><img height={70}
                        src={'https://localhost:7245/Images/' + p.image}
                        /></td>
                    <td>{p.name}</td>
                    <td>{p.categoryName}</td>
                    <td><button onClick={() => play(p.audioDesc)}>▷</button></td>
                </tr>) }
            </tbody>
        </table>
    </>
}

export default ProductList;