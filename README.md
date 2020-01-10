TS Jest import bug demo
Demo bug occuring when using expo-localization and @expo/vector-icon libraries in React-Native projects with TypeScript

## Howto
To view the errors, run `yarn` to install dependencies and then run `yarn test`. 
These tests will fail since they operate on files that use the following imports:
```typescript
import { locale } from "expo-localization";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
```

## Note
When creating this repository I noticed that you don't even need ts-jest to reproduce this bug. 
`jest.config.js` can be removed and the errors will still occur.
