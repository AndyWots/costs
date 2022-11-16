import Costs from "./components/Costs/Costs";
import NewCost from "./components/newCost/newCost";
import React, {useState} from "react";

const INITIAL_COSTS  = [
  {
    id: 'C1',
    date: new Date(2020, 2, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: 'C2',
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    id: 'C3',
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    amount: 49.99
  },
];




const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
      setCosts(prevCosts => {
        return [cost, ...prevCosts] //корректный способ обновления состояния, основываясь на предыдущей версии состоянии
      });
    };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
