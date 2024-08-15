import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import s from '../styles/Main.module.css'

function Category() {

    const category = useParams().category;
    const [dishes, setDishes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/API/Dishes/?category=${category}`).then(res => {
            setDishes(res.data);
        });
    }, []);

    return (
        <div>
            <div className={s.title}>{category}:</div>
            <div className={s.categories}>
                {dishes?.map((name) => (
                    <div key={name.id}><a className={s.category} href={`/recipe/${name.id}`}>{name.name}</a></div>
                ))}
            </div>
        </div>
    );
};

export default Category;