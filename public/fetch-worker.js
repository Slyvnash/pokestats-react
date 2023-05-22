function batchFetch(items) {
  const promises = items.map(item => fetch(item).then(data => data.json()));
  return Promise.all(promises);
}

function splitToChunks(items) {
  const result = [];
  for (let i = 0; i < items.length; i += 50) {
    result.push(items.slice(i, i + 50));
  }
  return result;
}

onmessage = event => {
  if (!event.data.start) return;
  
  const API = 'https://pokeapi.co/api/v2/';
  const TOTAL_POKEMON_COUNT = 1010;

  const calls = [];

  for (let i = 1; i <= TOTAL_POKEMON_COUNT; i++) {
    calls.push(`${API}pokemon/${i}`);
    calls.push(`${API}pokemon-species/${i}`);
  }

  const chunks = splitToChunks(calls);

  chunks.reduce(
    (last, current, index) =>
      last.then(() =>
        batchFetch(current).then(data =>
        {
          
          postMessage({
            chunkId: index,
            chunkData: data,
            total: chunks.length - 1
          });
        })
      ),
    Promise.resolve()
  );
};