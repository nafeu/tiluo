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

const d = document; const loaded = 'DOMContentLoaded'; const $ = selector => d.querySelector(selector);

const snippets = data
.split('---\n')
.filter(snippet => snippet !== '')
.map(snippet => {
  const snippetSplitByNewline = snippet.split('\n');
  const [description, tags] = snippetSplitByNewline[0].split('|');
  const code = snippetSplitByNewline.slice(1, snippetSplitByNewline.length).join('\n');

  return {
    description: description.trim(),
    tags: tags.trim().split(' ').filter(x => x.length > 0),
    code
  }
});

d.addEventListener(loaded, () => {
  snippets.forEach(snippet => {
    const container     = d.createElement('div');
    container.className = [
      'snippet',
      'border-2 rounded-md',
      'p-4'
    ].join(' ');

    const description       = d.createElement('div')
    description.className   = [
      'description'
    ].join(' ');
    description.textContent = snippet.description;

    const tags       = d.createElement('div')
    tags.className   = [
      'tags',
      'flex gap-4'
    ].join(' ');

    snippet.tags.forEach(tagString => {
      const tag       = d.createElement('div');
      tag.className   = [
        'tag'
      ].join(' ');
      tag.textContent = tagString

      tags.appendChild(tag);
    });

    const code       = d.createElement('pre')
    code.className   = [
      'code'
    ].join(' ');
    code.textContent = snippet.code;

    container.appendChild(description);
    container.appendChild(tags);
    container.appendChild(code);

    $('#snippets').appendChild(container);
  });
});
