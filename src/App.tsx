import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { marked } from 'marked';
import Tabe from './pages/page.tsx';
import { Octokit } from '@octokit/core';

// const octokit = new Octokit({
//   auth: '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',
// });

// await octokit.request('POST /gists', {
//   description: 'Example of a gist',
//   public: false,
//   files: {
//     'README.md': {
//       content: 'Hello World',
//     },
//   },
// });

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>New Site</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tabe />
    </div>
  );
}

export default App;
