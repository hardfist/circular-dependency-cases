# circular-dependency-cases
show how bundlers deal with circular dependencies

```sh
$ pnpm install && pnpm build:all
$ pnpm start:node // throw tdz error
$ pnpm start:webpack  // runs successfully
```
