import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Hello from './components/Hello';
// import Name from './components/Name';
// import Message from './components/Message';
// import Parent from './components/ContainerSample';
// import Page from './components/ContextSample';
// import Counter from './components/Counter';
// import Counter from './components/CounterWithReducer';
// import { Parent } from './components/MemorizedComponent';
// import { Parent } from './components/MemorizedComponent2';
// import { UseMemoSample } from './components/MemorizedComponent3';
// import {Clock} from './components/Clock';
// import {Parent} from './components/UseContextSample';
// import {ImageUploader} from './components/ImageUploader';
// import {Parent} from './components/UseImperativeSample';
import {Input} from "./components/CustomHookSample";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
