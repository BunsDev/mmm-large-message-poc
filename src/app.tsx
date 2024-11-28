const App = () => {
  return (
    <div>
      <button onClick={connect}>Connect</button>
      <button onClick={makeLargeMessage}>Large Message</button>
    </div>
  );
};

function connect() {
  // @ts-expect-error Ethereum provider not defined
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  window.ethereum?.request({
    method: 'eth_requestAccounts',
  });
}

function getRandomName() {
  const prefixes = ['npm', 'bower', 'github'];
  const names = ['foo', 'bar', 'baz', 'abc'];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomName = names[Math.floor(Math.random() * names.length)];
  return `${randomPrefix}:${randomName}`;
}

function generateArrayOfObjects(numObjects: number) {
  const array = [];
  for (let i = 0; i < numObjects; i++) {
    const object: Record<string, Record<string, never>> = {};
    object[getRandomName()] = {};
    array.push(object);
  }
  return array;
}

function makeLargeMessage() {
  const arrayOfObjects = generateArrayOfObjects(999998 * 3.5);

  // @ts-expect-error Ethereum provider not defined
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  window.ethereum?.request({
    method: 'wallet_requestSnaps',
    params: arrayOfObjects,
  });
}

export default App;
