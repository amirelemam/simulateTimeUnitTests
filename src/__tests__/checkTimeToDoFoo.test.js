import lolex from "lolex";
import moment from "moment";

import checkTimeToDoFoo from "../app";

describe("manipulateTimeWIthLolex: checkTimeToDoFoo", () => {
  beforeAll(() => {
    console.log("Current epoch in milisseconds", moment().valueOf());
  });

  it("should return true when it is time to do foo", async () => {
    const epochJuly30th2019at15h20m00s = 1564500000000;

    const clock = lolex.install({
      now: epochJuly30th2019at15h20m00s
    });

    const isTimeToDoFoo = await checkTimeToDoFoo();

    clock.uninstall();

    expect(isTimeToDoFoo).toBe(true);
  });

  it("should return false when it is not time to do foo", async () => {
    const epochJuly30th2019at15h20m01s = 1564500001000;

    const clock = lolex.install({
      now: epochJuly30th2019at15h20m01s
    });

    const isTimeToDoFoo = await checkTimeToDoFoo();

    clock.uninstall();

    expect(isTimeToDoFoo).toBe(false);
  });
});
