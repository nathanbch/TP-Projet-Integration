const { moyenne } = require("../calculator");

describe("Fonction moyenne", () => {
  test("calcule correctement la moyenne", () => {
    expect(moyenne([2, 4, 6])).toBe(4);
  });

  test("calcule la moyenne avec des décimaux", () => {
    expect(moyenne([1, 2])).toBe(1.5);
  });

  test("erreur si tableau vide", () => {
    expect(() => moyenne([])).toThrow("Le tableau ne doit pas être vide");
  });

  test("erreur si ce n'est pas un tableau", () => {
    expect(() => moyenne("abc")).toThrow("Le paramètre doit être un tableau");
  });
});
