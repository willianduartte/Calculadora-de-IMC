import { useState } from "react"
import styles from "./App.module.css"
import PoweredImage from "./assets/powered.png"
import { levels, calculateImc, Level} from './helpers/imc'
import { GridItem } from "./components/GridItem"
import leftArrow from './assets/leftarrow.png'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const calculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Digite todos os campos!') 
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredImage} alt='' width={200}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.7 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite a seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={calculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow &&
           <div className={styles.rightBig}>
             <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt='' width={25}/>
             </div>
             <GridItem item={toShow}/>
           </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App