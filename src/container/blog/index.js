import React from 'react';
import { Article } from '../../components';

//css
import './blog.css';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';


const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="library">
            <div className="gpt3_blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-content">
                <div className="gpt3__blog-content_groupA">
                    <Article
                        img={blog01}
                        title="GPT-3 and Open AI is the future. Let us exlore how it is?"
                        date = "Sep 26, 2021"
                    />
                </div>
                <div className="gpt3__blog-content_groupB">
                    <Article
                         img={blog02}
                         title="GPT-3 and Open AI is the future. Let us exlore how it is?"
                         date = "Sep 26, 2021"
                    />
                    <Article
                         img={blog03}
                         title="GPT-3 and Open AI is the future. Let us exlore how it is?"
                         date = "Sep 26, 2021"
                    />
                    <Article
                         img={blog03}
                         title="GPT-3 and Open AI is the future. Let us exlore how it is?"
                         date = "Sep 26, 2021"
                    />
                    <Article
                         img={blog04}
                         title="GPT-3 and Open AI is the future. Let us exlore how it is?"
                         date = "Sep 26, 2021"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog;
