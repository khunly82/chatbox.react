import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useRoutes } from "react-router-dom";

const ProductForm = () => {

    const file = useRef(null);
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm({ name: '', description: '' })

    const submit = (values) => {
        const fd = new FormData();
        fd.append('name', values.name);
        fd.append('description', values.description);
        fd.append('imageFile', file.current);
        fd.append('categoryId', 1);
        axios.post('https://localhost:7245/api/product', fd).then(() => {
            navigate('/')
        })
    }

    const fileChange = event => {
        if(event.target.files.length) {
            file.current = event.target.files[0];
        }
    }

    return <>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Nom</label>
                <input id="name" type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <textarea id="desc" type="text" {...register('description')}>
                </textarea>
            </div>
            <div>
                <input type="file" onChange={fileChange} />
            </div>
            <button>Sauver</button>
        </form>
    </>
}

export default ProductForm;