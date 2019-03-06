import React from "react";
import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";

import App from "../../src/pages/app/App";

describe("<App />", () => {
  describe("render()", () => {
    it("renders the component without crashing", () => {
      shallow(<App />);
    });

    it("renders a <div />", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("div").length).toEqual(1);
    });
  });
});
