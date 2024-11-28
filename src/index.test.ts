import path from 'path';
import { readFile } from 'fs/promises';
import test from 'ava';
import * as sinon from 'sinon';
import globalJsdom from 'global-jsdom';

// Suppress React "act" warning
// See: https://github.com/testing-library/react-testing-library/issues/1051
global.IS_REACT_ACT_ENVIRONMENT = false;

test.afterEach.always(() => {
  sinon.restore();
});

test('should render app', async (t) => {
  const indexHtml = await readFile(path.join(__dirname, 'index.html'), {
    encoding: 'utf8',
  });
  const cleanup = globalJsdom(indexHtml);
  t.teardown(cleanup);

  await import('./index');
  // wait for first React render
  await new Promise((resolve) => setImmediate(resolve));

  const rootElement = document.getElementById('root');
  if (rootElement === null) {
    throw new Error('Root element not found');
  }
  t.not(rootElement.innerHTML, '');
});

test('should throw error if root node does not exist', async (t) => {
  const cleanup = globalJsdom();
  t.teardown(cleanup);

  await t.throwsAsync(import('./index'), {
    instanceOf: Error,
    message: 'Missing root element',
  });
});
