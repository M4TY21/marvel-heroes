export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PUBLIC_KEY: string;
      REACT_APP_PRIVATE_KEY: string;
    }
  }
}
