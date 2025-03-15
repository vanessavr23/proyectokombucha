import React, { useEffect, useState } from "react";
import "./checkbox.css";

const CheckboxComponent = ({ text, value, handlerState, productsSelected }) => {
    const [stateCheckBox, setStateCheckBox] = useState(false);
    useEffect(() => {
        setStateCheckBox(!!productsSelected && productsSelected.includes(value));
    }, [productsSelected, value]);

    const handleClick = () => {
        const newState = !stateCheckBox;
        setStateCheckBox(newState);
        handlerState(value, newState);
    };

    return (
        <div className="flex gap-2">
            <input
                className="w-5 accent-secondary-purple-100 rounded-full cursor-pointer"
                type="checkbox"
                onClick={handleClick}
                checked={stateCheckBox}
            />
            <label className="Paragraph-16-S">{text}</label>
        </div>
    );
};

export default CheckboxComponent;
