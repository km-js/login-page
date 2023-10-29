import Form from './components/Form';
import Image from './components/Image';
import { GlobalStyles } from './GlobalStyles.style';
import { AppContainer } from './components/Container.style';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppContainer>
        <Image />
      <Form/>
      </AppContainer>
     
    </div>
  );
}

export default App;
