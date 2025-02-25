import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
// 리엑트 개발에서는 App 컴포넌트를 root 컴포넌트로 쓰는게 국룰