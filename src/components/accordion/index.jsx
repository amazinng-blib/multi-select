import React, { useState } from 'react';
import data from './data';
import './styles.css';

// single selection
// multiple selection

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyMultiSelect = [...multiSelect];
    const findIndexOfCurrentId = cpyMultiSelect.indexOf(id);

    // todo: if the index is not there, add it else remove it
    if (findIndexOfCurrentId === -1) cpyMultiSelect.push(id);
    else cpyMultiSelect.splice(findIndexOfCurrentId, 1);
    setMultiSelect(cpyMultiSelect);
    console.log({ findIndexOfCurrentId, id, cpyMultiSelect });
  };
  return (
    <div className="wrapper">
      <button
        type="button"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable multi Selection
      </button>
      <div className="accordion">
        {data?.map((dataItem, index) => {
          return (
            <div key={index} className="item">
              <div
                className="title"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem?.id)
                    : handleSingleSelection(dataItem?.id)
                }
              >
                <h3>{dataItem?.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiSelect.indexOf(dataItem?.id) !== -1 && (
                    <div className="content">{dataItem?.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem?.answer}</div>
                  )}

              {/* {selected === dataItem?.id ||
              multiSelect.indexOf(dataItem?.id) !== -1 ? (
                <div className="content">{dataItem?.answer}</div>
              ) : null} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
