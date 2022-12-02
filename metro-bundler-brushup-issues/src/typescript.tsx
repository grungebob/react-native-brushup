import * as React from 'react';
import * as ReactDOM from 'react-dom';
const Hello = () => <h1> YO TO YO this is the functional component </h1>;

// ReactDOM.render(
//     <Hello/>,
//     document.getElementById('root'),
// )



// function HelloWorld() {
//     return (
//         <h1>TypeScript works !!!</h1>
//     );
// }

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);