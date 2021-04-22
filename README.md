### Getting Started

Create a `.netrc` file

```bash
$ GITHUB_TOKEN="your github access token"
$ printf "machine github.com \n  login $GITHUB_TOKEN\n" > ~/.netrc
```
