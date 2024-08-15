import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import s from '../styles/Main.module.css'

function Recipe() {

    const id = useParams().id;
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/API/recipes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // Устанавка заголовока Content-Type для указания типа данных
            }
        }).then(res => {
            setRecipe(res.data);
        });
    }, []);

    return (
        <>
            <div className={s.title}>{recipe?.name}:</div>
            <div className={s.text}>{recipe?.recipe}</div>
        </>
    );
};

export default Recipe;