{
  "name": "<%= packageName %>",
  "description": "<%= itemNameCapitalCase %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.ts*",
    "test": "jest --coverage",
    "cypress": "cypress open",
    "clean": "rimraf .turbo node_modules dist coverage test-output"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@storybook/react": "^6.5.10",
    "@testing-library/dom": "^8.16.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.4.2",
    "@types/jest": "^28.1.6",
    "@types/node": "^18.6.4",
    "@types/react": "^18.0.16",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.0.0",
    "cypress": "^10.4.0",
    "eslint": "^8.21.0",
    "eslint-config-custom": "*",
    "jest": "^28.1.3",
    "jest-config-custom": "*",
    "jest-environment-jsdom": "^28.1.3",
    "msw": "0.44.2",
    "ts-jest": "^28.0.7",
    "typescript": "^4.7.4",
    "typescript-config-custom": "*",
    "vite": "^3.0.4"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
