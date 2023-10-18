import { useState } from 'react';
import './Portfolio.css';
import Toolbar from '../Toolbar/Toolbar.jsx';
import ProjectList from '../ProjectList/ProjectList';

function Portfolio(props) {
    const { data } = props;
    const [state, setImage] = useState(data);
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

    let newArr = [];
    let activeCategory;

    const filterImage = (evt) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((item) => item.classList.remove('active'));

        evt.target.classList.add('active');

        activeCategory = evt.target.textContent;
        activeCategory === 'All'
            ? (newArr = data)
            : (newArr = data.filter(
                  (item) => item['category'] === activeCategory
              ));

        setImage(newArr);
    };

    return (
        <div className='container'>
            <div className='toolbar'>
                <Toolbar
                    filters={filters}
                    selected={activeCategory}
                    onSelectFilter={filterImage}
                />
            </div>

            <div className='gallery'>
                <ProjectList projects={state} />
            </div>
        </div>
    );
}

export default Portfolio;
