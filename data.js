const data = `---
basic express server | express server get http
import express from 'express';

const app = express();

app.listen(3000, server => console.log(\`Listening on \$\{server.port\}\`));
---
debounce html event handler | debounce html input event handler
const debounce = (func, delay) => {
  let timeoutId;

  return function () {
    const context = this;
    const args    = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => { func.apply(context, args); }, delay);
  };
}

element.addEventListener('event', debounce(() => {}, 500))
---
`
