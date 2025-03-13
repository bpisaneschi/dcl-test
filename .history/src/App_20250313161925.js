// App.js
import React from 'react';
import './App.css';
import { MDXProvider } from '@mdx-js/react';
import ExamplePage from './ExamplePage.mdx';

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