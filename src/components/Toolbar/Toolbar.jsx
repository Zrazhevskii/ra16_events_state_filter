import './Toolbar.css';

const Toolbar = ({ filters, selected='All', onSelectFilter }) => {
    let index = 0;

    return (
        <div className='toolbar'>
            {filters.map((item) => (
                <button
                    onClick={onSelectFilter}
                    key={index++}
                    className={item === selected ? 'active' : ''}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Toolbar;
