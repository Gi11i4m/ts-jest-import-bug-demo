import { VectorIcons } from "./vector-icons";

describe("Vector icon bug demo", () => {
  it("should display an error when testing a file importing expo localization", () =>
    expect(new VectorIcons().createIconSet).toBeDefined());
});
