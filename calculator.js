function moyenne(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Le paramètre doit être un tableau");
  }

  if (numbers.length === 0) {
    throw new Error("Le tableau ne doit pas être vide");
  }

  const somme = numbers.reduce((acc, n) => acc + n, 0);
  return somme / numbers.length;
}

module.exports = { moyenne };
