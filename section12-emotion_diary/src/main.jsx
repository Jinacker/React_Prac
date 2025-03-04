
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // 라우터 임포트 해야함.

// 브라우저 라우터가 앱 컴포넌트 감싸도록 해야함 => 앱의 부모 컴포넌트가 되게 해야함
// 이 브라우저 라우터는 현재 주소 저장 및 감지.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
