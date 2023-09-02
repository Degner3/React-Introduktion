import { ShowName } from "./Hilsen"




function HilsenPage() {

    // Hilsen
    const nameArray = [
      {name: "Bobby"},
      {name: "Niklas"},
      {name: "Bobby"}
    ]
  
    return (
      <>
      {/* <ShowName name={"Niklas"}/> */}
      {nameArray.map((item, index) => {
          return (
            <ShowName key={index} name={item.name}/>
          )
        })}
      </>
    )
  }
  
  export default HilsenPage
  