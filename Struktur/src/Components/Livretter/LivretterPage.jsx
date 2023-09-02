import { Header } from './Header';
import { Livretter } from './Livretter';


function LivretterPage() {


    const livretterArrey =
  [
    {Livretter: "Burger"},
    {Livretter: "Kylling"},
    {Livretter: "Pizza"},
    {Livretter: "Pandekager"},
    {Livretter: "Kage"}
  ]

  return (
    <>
        <Header header={"Mine LivRetter"} />
        
        {livretterArrey.map((item, index) => {
        return <Livretter key={index} Livretter={item.Livretter} />;
      })}
    </>
  )
}

export default LivretterPage