import React from "react";
import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import HomePage from "../../src/pages/Homepage/HomePage";

describe("<App />", () => {
  describe("render()", () => {
    it("renders the component without crashing", () => {
      shallow(<HomePage />);
    });

    it("renders a <div />", () => {
      const wrapper = shallow(<HomePage />);
      expect(wrapper.find("div").length).toEqual(1);
    });

    // it("Opens and closes the accordion", () => {
    //   const wrapper = shallow(<HomePage />);
    // });
  });
});
