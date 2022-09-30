import Card from '../../Card';
import './styles.scss';

function Fiches() {
  return (
    <main className="Fiches">
      <div className="SearchBar">
        <div className="CardInner">
          <label>Chercher vos fiches (Fruits, légumes, autres)</label>
          <div className="container">
            <div className="Icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div className="InputContainer">
              <input placeholder="Planter des carottes..." />
            </div>
          </div>
        </div>
      </div>
      <ul className="Fiches__list">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </main>
  );
}

export default Fiches;
