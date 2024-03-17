"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"], function (UIComponent, JSONModel, Device) {
  "use strict";

  /**
   * @namespace ui5.walkthrough
   */
  const Component = UIComponent.extend("ui5.walkthrough.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "manifest": "json"
    },
    init: function _init() {
      // call the init function of the parent
      UIComponent.prototype.init.call(this);

      // set data model
      const data = {
        recipient: {
          name: "World"
        }
      };
      const model = new JSONModel(data);
      this.setModel(model);

      // set device model
      const deviceModel = new JSONModel(Device);
      deviceModel.setDefaultBindingMode("OneWay");
      this.setModel(deviceModel, "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    }
  });
  ;
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map