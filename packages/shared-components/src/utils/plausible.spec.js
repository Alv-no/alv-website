import { trackCustomEvent } from "./plausible";
import { generatePlausibleClass } from "./plausible";

describe("generatePlausibleClass", () => {
  it("should generate event-classes correctly", () => {
    expect(generatePlausibleClass("test")).toBe(" plausible-event-name=test ");
  });

  it("should add properties as classes", () => {
    expect(
      generatePlausibleClass("test", { key: "testKey", value: "testValue" })
    ).toBe(" plausible-event-name=test plausible-event-testKey=testValue ");
  });

  it("should replace event-name white-spaces with plus symbols", () => {
    expect(generatePlausibleClass("test name")).toBe(
      " plausible-event-name=test+name "
    );
  });
});

describe("trackCustomEvent", () => {
  global.plausible = () => {};
  let plausibleSpy = jest.spyOn(window, "plausible");
  beforeEach(() => {
    plausibleSpy.mockReset();
  });

  it("should call plausible function with correct properties", () => {
    trackCustomEvent("testEvent", { testKey: "testValue" });

    expect(plausibleSpy).toHaveBeenCalledWith("testEvent", {
      props: { testKey: "testValue" },
    });
  });
});
