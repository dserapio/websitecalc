import React, { useState } from 'react';
import '../../App.css';

/**the corresponding conversion from a weight to kg */
export const convertTable = {
    'kg': 1,
    'lbs': 2.20462
};

/**
 * @param {string} unit
 */
export const convertObj = (unit) => ({
    name: unit,
    convert: convertTable[unit]
});

export default function SelectUnit(props) {
    const [unit, setUnit] = useState(props.unit);

    const handleChange = ({target}) => {
        setUnit(target.value);
    };

    return <>
        <span>{props.value*convertTable[unit]} {unit}</span>
        <select value={unit} onChange={handleChange}>
            <option value="kg">kg</option>
            <option value="lbs">lbs.</option>
        </select>
    </>;
}