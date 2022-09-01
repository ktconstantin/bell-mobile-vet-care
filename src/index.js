import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Calendly personal access token
// eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjYxOTgxMDI2LCJqdGkiOiI3ZTQ0YzZmZC03N2RhLTQzN2MtYWYwYy1kNDIwYWEyYTAzNzIiLCJ1c2VyX3V1aWQiOiI4OTY0ZWQyMS1iOWJlLTQ3ZTctOGQ3OS01ZDk1ZGI5MGY3OGIifQ.3fMxJOhQ5NIfZ26ZSUsIitwuvht8RUacsekWmV3a1-bNX92ebH_e2hsBttvDi2mhrrKOizwi5opo5MQnD8F8yw


