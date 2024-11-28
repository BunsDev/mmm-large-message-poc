declare module 'global-jsdom' {
  import { JSDOM } from 'jsdom';

  export default function globalJsdom(
    html?: string,
    options?: ConstructorParameters<typeof JSDOM>[1],
  ): () => void;
}
