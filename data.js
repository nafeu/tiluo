
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
bash remove everything in directory | bash remove rm all wildcard
rm /path/to/dir/*
---
bash script capture or handle arguments | bash script capture handle arguments command-line terminal
#!/bin/bash

# Print the script name and args 1 & 2
echo "Script name: $0"
echo "Arg 1: $1"
echo "Arg 2: $2"

# Print the number of arguments
echo "Number of arguments: $#"

# Print all arguments
echo "All arguments: $@"

# Loop through all arguments and print them
for arg in "$@"
do
  echo "Argument: $arg"
done

# > chmod +x script.sh
# > ./script.sh arg1 arg2 arg3
---
bash exit script if arg does not exist | bash exit arg not exist missing
if [ -z "$1" ]; then
  echo "Error: Argument \$1 is required."
  exit 1
fi
---
bash check if directory exists | bash directory exists check conditional
if [ -d "[DIRECTORY_PATH]" ]; then
  # If it exists, do this...
else
  # If it doesn't exist, do this...
fi
---
bash copy and rename file | bash copy rename same
cp original-file.txt copy-with-new-name.txt
---
git create empty commit | git create empty commit
git commit --allow-empty -m "Empty Commit"
---
docker delete volume | docker delete remove volume rm
docker volume rm [VOLUME_NAME]
---
docker list volumes | docker list volumes show ls
docker volume ls
---
setup eslint and prettier | eslint prettier node javascript
npm install eslint --save-dev
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npm install husky lint-staged --save-dev
npx eslint --init
touch .prettierrc
# .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "tabWidth": 2,
  "printWidth": 80
}
# .eslintrc
{
  "extends": [
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
# package.json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ]
}
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
`
