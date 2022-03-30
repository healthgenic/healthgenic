import React, { useState } from 'react'
import LabReportCard from './LabReportCard';

export default function MyTestLabs(){
    const [testLabs, setTestLabs] = useState([
        
    ]);
    return (
        <div>
            <h1>My Test Lab Reports</h1>
            {
                testLabs.length > 0 
                ? testLabs.map((testLab)=> <LabReportCard testLab={testLab}/>)
                :"No Lab Records"
            }
        </div>
    )
}