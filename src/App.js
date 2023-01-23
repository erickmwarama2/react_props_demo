// import logo from './logo.svg';
import './App.css';
import { GoalItem, GoalItemChild, GoalItemDestruct } from './props1';

function App() {
  return (
    <div>
      <ul>
        <GoalItem title="complete writing jest tests" id="1" />
        <GoalItem title="prepare the flask application" id="2" />
        <GoalItem title="read on deeper React concepts" id="3" />
        <hr/>
        <GoalItemChild id="4"> complete the aptitude psychometric test </GoalItemChild>
        <GoalItemChild id="5"> prepare for Node.js / express material </GoalItemChild>
        <hr/>
        <GoalItemDestruct title="Cover some ground in Vue.js" id="6"/>
        <GoalItemDestruct title="Cancel the scheduled Java interview" id="7" />
      </ul>
    </div>
  );
}

export default App;
