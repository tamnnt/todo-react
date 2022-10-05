import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './stores/reducers/rootReducer'
//


//
//cấu hình redux, install redux  react-redux. tạo file rootReducer trong /stores/reducers để làm nơi trả về dữ liệu
//Bọc Provider bên ngoài App để redux chạy song song react khi khởi động, store trong provider là 
//nơi lưu trữ dữ liệu khởi tạo bằng createStore(), createstore nhận vào dữ liệu từ rootReducer 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() để config cho redux devstool thôi
const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <
    Provider store = { reduxStore } >
    <
    App / >
    <
    /Provider>
    //</React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();