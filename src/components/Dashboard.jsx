import React, { useMemo } from 'react';
import './../styles/dashboard.css';
import Column from './Column';

function Dashboard({ gridData, grouping, userIdToData }) {
    const keys= useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => <Column key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
        </div>
    );
}

export default Dashboard;