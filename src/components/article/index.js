import React from 'react';

//css
import './article.css';

const Article = ({title, img, date}) => {
    return (
        <div className="gpt3__article">
            <div className="gpt3__article-image">
                <img src={img} alt="blog"/>
            </div>
            <div className="gpt3__article-content">
                <div>
                    <p>{date}</p>
                    <h1>{title}</h1>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;
