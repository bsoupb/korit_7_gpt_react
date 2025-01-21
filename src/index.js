import ReactDOM from 'react-dom/client';
// import App from './study/App';
// import App2 from './study/App2';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouterDom from './components/RouterDom/RouterDom';
// import App3 from './study/App3';
// import App4 from './study/App4';
// import App4 from './study/App4';
// import App5 from './study/App5';
// import App6 from './study/App6';
// import App7 from './study/App7';
// import App7_new from './study/App7_new';
// import App8 from './study/App8';
// import App9 from './study/App9';
// import App10 from './study/App10';
// import App11 from './study/App11';
// import App12 from './study/App12';
// import App13 from './study/App13';
// import App14 from './study/App14';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <RouterDom>
    //     <Route path={"/a"} element={ <h1>A페이지</h1> } ></Route> 
    //     <Route path={"/b"} element={ <h1>B페이지</h1> } ></Route>
    //     <Route path={"/c"} element={ <h1>C페이지</h1> } ></Route>
    //     <Route path={"/d"} element={ <h1>D페이지</h1> } ></Route>
    // </RouterDom>
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// root.render(<App />);
// root.render(<App2 />);
// root.render(<App3 />);
// root.render(<App4 />);
// root.render(<App5 />);
// root.render(<App6 />);
// root.render(<App7 />);
// root.render(<App7_new />);
// root.render(<App8 />);
// root.render(<App9 />);
// root.render(<App10 />);
// root.render(<App11 />);
// root.render(<App12 />);
// root.render(<App13 />);
// root.render(<App14 />);

