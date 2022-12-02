import * as React from 'react';
import { createRoot } from 'react-dom/client';

const Hello = () => <h1> YO TO YO this is the functional component </h1>;

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <Hello />
);