
import './App.css';
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from './components/Button.jsx';

function App() { // js 가 html 태그를 반환하도록 설정 => APP 컴포넌트
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }; // 요런식으로 객체로 만들고 밑에 스프레드 연산자로 깔끔하게 값을 넘겨줄수있음.

  return (
    <>
    <Button {...buttonProps} />
    <Button text = {"카페"}/>
    <Button text = {"블로그"}>
      <div>자식요소</div> 
    </Button>
    </>
  ); // 이런식으로 Header는 자식 컴포넌트 / App은 부모 컴포넌트 
  // => App 에서 불러와서 나타내는식으로 작동 => Header Main Footer 자식 컴포넌트  
}

export default App;
