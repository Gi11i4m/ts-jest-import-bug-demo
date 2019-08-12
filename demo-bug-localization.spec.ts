import { Localization } from "./localization";

describe("Localization bug demo", () => {
  it("should display an import error when testing a file importing expo localization", () =>
    expect(new Localization().getCurrentLocale).toBeDefined());
});
