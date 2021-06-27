function isLeap(year) {
  return (
    (!isDivibleBy(year, 100) || isDivibleBy(year, 400)) && isDivibleBy(year, 4)
  );
}

function isDivibleBy(n, d) {
  return n % d === 0;
}

export { isLeap };
