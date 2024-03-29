# ReactPianoRoll

This is a component library for pianoroll in React. Functionalities included:

- Note creation, dragging and deletion
- Multiple notes selection
- Copying, cutting, pasting
- Undo, redo
- Zooming
- Scrolling

## Examples

`import Pianoroll, { PianorollProvider } from 'react-piano-roll';`

Wrap your component with `<PianorollProvider />` and then use `<Pianoroll />` inside it.

Inside main.js:

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PianoRollProvider } from "react-piano-roll";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PianorollProvider>
      <App />
    </PianorollProvider>
  </React.StrictMode>
  ,
)
```

Inside App.tsx:

```
import { PianoRoll } from "react-piano-roll";

function App() {
  return (
    <>
      <PianoRoll />
    <>
  )
}

export default App
```

Multiple hooks are provided to access the state of the pianoroll. A breif description of each hook is provided below. For more details, please refer to the source code.

`useNotes()` returns the notes in the pianoroll.
