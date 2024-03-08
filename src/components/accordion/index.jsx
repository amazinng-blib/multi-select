import React, { useState } from 'react';
import data from './data';
import './styles.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
    if (enableMultiSelection === false) {
      setMultiSelect([]);
    }
  };

  const handleMultiSelection = (id) => {
    let cpyMultiSelect = [...multiSelect];
    const findIndexOfCurrentId = cpyMultiSelect.indexOf(id);

    if (findIndexOfCurrentId === -1) cpyMultiSelect.push(id);
    else cpyMultiSelect.splice(findIndexOfCurrentId, 1);
    setMultiSelect(cpyMultiSelect);
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setSelected(null);
        }}
      >
        Enable multi Selection
      </button>
      <div className="accordion">
        {data?.map((dataItem, index) => {
          return (
            <div key={index} className="item">
              <div
                className={`title ${selected === dataItem.id && 'animate'}`}
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem?.id)
                    : handleSingleSelection(dataItem?.id)
                }
              >
                <h3>{dataItem?.question}</h3>
                <span>+</span>
              </div>

              <div
                className={`content ${selected === dataItem.id && 'animate'}`}
              >
                {selected === dataItem.id && <p>{dataItem?.answer}</p>}
              </div>
              {multiSelect && (
                <div
                  className={`content ${
                    multiSelect.indexOf(dataItem?.id) !== -1 && 'animate'
                  }`}
                >
                  {multiSelect.indexOf(dataItem?.id) !== -1 && (
                    <p>{dataItem?.answer}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
