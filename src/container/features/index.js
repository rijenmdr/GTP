import React from 'react';
import Feature from '../../components/feature';

//css
import './features.css';

const features = [
    {
        title:"Improving end distrusts instantly",
        description:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        title:"Become the tended active",
        description:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        title:"Message or am nothing",
        description:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        title:"Really boy law county",
        description:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="openai">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {
                    features.map((feature,index)=>(
                        <Feature title={feature.title} text={feature.description} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Features;
