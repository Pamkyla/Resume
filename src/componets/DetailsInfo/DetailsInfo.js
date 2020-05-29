import React from 'react';

import './DetailsInfo.css'

const DetailsInfo = () => {
    return(
        <div className="DetailsInfo">
            <h3>Person Name</h3>
            <div className="d-flex info_block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS_BbCxewtEv4fPrQexAkbtvhgHKuSpE6U_hC1KeEQy7x67q0K&usqp=CAU" alt="man"/>
                <ul className="detail_info_block">
                    <li>
                        <span>mass</span>
                        <span>200</span>
                    </li>
                    <li>
                        <span>homeworld</span>
                        <span>Venera</span>
                    </li>
                    <li>
                        <span>gender</span>
                        <span>male</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsInfo;