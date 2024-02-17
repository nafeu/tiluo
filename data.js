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
`
