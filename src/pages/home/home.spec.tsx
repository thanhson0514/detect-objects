import { shallow } from "enzyme";
import Home from "./index";
import { Typography } from "@mui/material";

describe("Home Component", () => {
  const wrapper = shallow(<Home />);
  it("Contain camera card", () => {
    expect(
      wrapper.contains(<Typography>Quét nông sản bằng ảnh</Typography>)
    ).toEqual(true);
  });

  it("Contain document card", () => {
    expect(
      wrapper.contains(<Typography>Thông tin nông sản</Typography>)
    ).toEqual(true);
  });
});
