const spacefarm = require("../../util/spacefarm");

describe("spacefarm", () => {
  it("converts number mojo to spacefarm", () => {
    const result = spacefarm.mojo_to_spacefarm(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to spacefarm", () => {
    const result = spacefarm.mojo_to_spacefarm("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to spacefarm string", () => {
    const result = spacefarm.mojo_to_spacefarm_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to spacefarm string", () => {
    const result = spacefarm.mojo_to_spacefarm_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number spacefarm to mojo", () => {
    const result = spacefarm.spacefarm_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string spacefarm to mojo", () => {
    const result = spacefarm.spacefarm_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = spacefarm.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = spacefarm.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = spacefarm.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = spacefarm.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = spacefarm.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = spacefarm.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
