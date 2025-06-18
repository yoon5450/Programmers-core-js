

export const memo = (() => {
  const cache = {};

  return (key, fn) => {if (!fn) return cache[key];

  if (cache[key]) {
    console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
  }

  cache[key] = fn()}
})();

memo('hi', () => 'hello')
