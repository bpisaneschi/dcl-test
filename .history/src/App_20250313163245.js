// App.js
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import ExamplePage from './ExamplePage.mdx';
import './App.css';

function App() {
  return (
    <div className="App">
      <MDXProvider>
        <ExamplePage />
      </MDXProvider>
    </div>
  );
}

export default App;