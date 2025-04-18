import React, { useState } from 'react'
import useTitel from './CustomHooks';

const Titel2 = () => {
const [record,setRecord] = useState(0);
useTitel(record);
    return (
    <div>
        <button onClick={() =>setRecord(record+1)}>
            Record : {record}
        </button>
        </div>
  )
}

export default Titel2;