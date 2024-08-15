import React, {useState, useEffect} from 'react';
import axios from "axios";

import s from '../styles/Main.module.css'


function Home() {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/API/categories/").then(res => {
            setCategories(res.data);
        });
    }, []);

    return (
        <>
            <div className={s.title}>Choose category:</div>
            <div className={s.categories}>
                {categories?.map((name) => (
                    <a className={s.category} key={name.categoryType}
                       href={`/category/${name.categoryType}`}>{name.categoryType}</a>
                ))}
            </div>
        </>
    );
}


export default Home