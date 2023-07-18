import Icon from "./common/components/Icon/index.component";

const App: React.FC = () => {
  return (
    <div>
      Hello
      <Icon name="react" />
      <Icon name="react" color="red" size={87}/>
      <Icon name="react" color="red" size={200}/>
      <Icon name="presence"/>
      <Icon name="busy"/>
      <Icon name="focus"/>
    </div>
  );
};

export default App;
