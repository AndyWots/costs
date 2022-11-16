import CostItem from "./CostItem.js";
import './Costs.css';
import Card from "../UI/Card.js";
import CostsFilter from "./CostsFilter.js";
import React, {useState} from "react";
import CostsDiagram from "./CostsDiagram.js";

function Costs(props) {   

    const [selectedYear, setSelectedYear] = useState('2021');

    const choseYearFilter = (year) => {
      setSelectedYear(year);
      console.log('Costs Component');
    }

    const filteredCosts = props.costs.filter(cost => {
      return cost.date.getFullYear().toString() === selectedYear; //фильтр по году и отображение
    })

    return (
      <div>
        <Card className="costs">
            <CostsFilter year={selectedYear} onYearChange={choseYearFilter}/>
            <CostsDiagram costs={filteredCosts}/> 
            {filteredCosts.length === 0 ? (<p>В этом году расходов нет</p>) : 
            (filteredCosts.map((cost) => (     //было {props.costs.map((cost) =>, фильтр по году и отображение на страницу
            <CostItem 
              key={cost.id} //прописываем id в map методе, чтобы реакт правильно записывал данные сверху вниз и пропала ошибка
                date={cost.date} 
                description={cost.description} 
                amount={cost.amount} 
              />
            ))
          )}
        </Card>
      </div>
      )
}

export default Costs;