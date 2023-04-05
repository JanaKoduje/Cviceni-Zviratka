import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import AnimalList from './Components/AnimalList';
import AnimalDetail from './Components/AnimalDetail';
import './style.css';

const App = () => {

  const [seznamZvirat, setSeznamZvirat] = useState([]);
  const [detail, setDetail] = useState();

  useEffect(
		() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      .then(data => {setSeznamZvirat(data.zvirata)
      } )
		},[]);

    const handleDetail = (id) => {
      setDetail(id)
    }

return (
  <>
  <h1>Zvířátka v ZOO</h1>
    <div className="container">
    <AnimalList animalData={seznamZvirat} onChangeDetail={handleDetail} />
      {seznamZvirat !== [] && detail ? <AnimalDetail details={seznamZvirat[detail-1]} /> : null}
  </div>
  
  </>
)


;
}

render(<App />, document.querySelector('#app'));
