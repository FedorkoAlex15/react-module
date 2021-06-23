import Comments from "./comments/Comments";
import './comments/Comments.css'
import Title from "./title/Title";

function App() {
  return (
      <div className={'wrapper'}>
          <Title/>
        <Comments/>
      </div>

  );
}

export default App;


