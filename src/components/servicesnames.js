
import React from 'react'
import Nasa from './nasa'
import Spacex from './spacex'
import Ist from './ist'

export default function servicesnames() {

    const name1 = "NASA"
    const desc1 = "The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics."
    const name2 = "SpaceX"
    const desc2 = "Space Exploration Technologies Corp. is an American aerospace manufacturer, a provider of space transportation services, and a communications corporation headquartered in Hawthorne, California."
    const name3 = "ESA"
    const desc3 = "The European Space Agency is an intergovernmental organisation of 22 member states dedicated to the exploration of space. Established in 1975 and headquartered in Paris, ESA has a worldwide staff of about 2,200 in 2018 and an annual budget of about €7.2 billion in 2022."
  return (
    <div>
      
      <div style={{height:"400px", width: "300px", borderStyle:"solid", display:"inline-block", marginRight:"50px", marginTop:"47px"}}>
          <img src='nasalogo.png' style={{width:"100%"}}/>
      <Nasa nasaname={name1} nasadesc={desc1}  />
      </div>
      <div style={{height:"400px", width: "300px", borderStyle:"solid", display:"inline-block", marginRight:"50px"}}>
      <img src='spacex.png' style={{width:"100%"}}/>
      <Spacex spacexname={name2} spacexdesc={desc2}/>
      </div>
      <div style={{height:"400px", width: "300px", borderStyle:"solid", display:"inline-block", marginRight:"50px"}}>
      <img src='esalogo.png' style={{width:"100%", height:"45%"}}/>
      <Ist istname={name3} istdesc={desc3} />
      
      </div>
    </div>
  )
}


