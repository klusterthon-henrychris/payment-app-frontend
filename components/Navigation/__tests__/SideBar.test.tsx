import { render, screen } from "@testing-library/react";
import { SideBar } from "@/components/Navigation";
import { sideBarItems } from "@/constants";

describe("SideBar Component", () => {
  it("renders correctly", () => {
    render(<SideBar mobileSideBarOpen={true} />);

    expect(screen.getByText("Product name")).toBeInTheDocument();

    sideBarItems.forEach((item) => {
      const { displayName } = item;
      expect(screen.getByText(displayName)).toBeInTheDocument();
    });
  });

  //   it("handles navigation correctly", () => {
  //     const { container } = render(<SideBar mobileSideBarOpen={true} />);
  //     const firstNavItem = screen.getByText(sideBarItems[0].displayName);
  //     const navItems = container.getElementsByTagName("nav");

  //     userEvent.click(firstNavItem);

  //     expect(navItems[0].classList).toContain("active-nav");
  //   });
});
