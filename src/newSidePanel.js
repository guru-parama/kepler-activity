import { SidePanelFactory } from "kepler.gl/components";
import { Icons } from "kepler.gl/dist/components";

function CustomSidePanelFactory(...args) {
  const CustomSidePanel = SidePanelFactory(...args);

  CustomSidePanel.defaultProps = {
    ...CustomSidePanel.defaultProps,
    panels: CustomSidePanel.defaultProps.panels.concat([
        {
          id: "test",
          label: "Hello Word",
          iconComponent: Icons.Polygon,
        },
      ])
  };

  return CustomSidePanel;
}

CustomSidePanelFactory.deps = SidePanelFactory.deps;

export default CustomSidePanelFactory;
