import './styles.css';
import data from './data';
import { useState } from 'react';

const Accordion2 = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelected = (id) => {
    setSelected(id);
  };

  return (
    <div className="container">
      <h2 className="header">Accordion 2 -- Single selection</h2>
      {data?.map((item, index) => {
        return (
          <ul className="accordion_2" key={index}>
            <li onClick={() => handleSingleSelected(item.id)}>
              <input
                type="checkbox"
                name="accordion_2"
                id={item.id}
                checked={selected === item.id}
              />
              <label htmlFor={item.id}>{item.label}</label>
              <div className="content">
                {item.id === selected && <p>{item.answer}</p>}
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Accordion2;
