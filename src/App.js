import './App.css';
import Article from './components/Article';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <Card>
        <h2 className="title">Titulo do card</h2>
        <p className="description">descricao do card</p>
      </Card>
      <Article 
        title={<h2 className="article__title">Titulo do artigo</h2>}
        description={<p className="article__description">description do artigo...</p>}
      />
    </div>
  );
}

export default App;
