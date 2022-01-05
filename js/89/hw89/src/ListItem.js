import React from "react"

export default function ListItem(props) {
    const { items } = props;
    return (
        <>
            <h3>Zipcodes</h3>
            <div>
                <ul>
                    {items.map(zip => 
                
                <li key={zip}>
                    {zip}
                </li>
            )}
            </ul>
            </div>
        </>
    )
}

