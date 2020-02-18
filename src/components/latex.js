import React from 'react';
const Latex = require('react-latex');

class LatexViewer extends React.Component {
  render() {
    return (
      <div>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
        <Latex displayMode={true}>
          The $1 \times 2$ box is most similar to the $3 \times 6$ since the bigger box is 3 times the length-width of the smaller box.
        </Latex>
      </div>
    )
  }
}

export default LatexViewer;