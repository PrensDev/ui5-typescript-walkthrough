"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";const o=e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello:function e(){const o=this.getView()?.getModel()?.getProperty("/recipient/name");const n=this.getView()?.getModel("i18n")?.getResourceBundle();const i=n.getText("helloMsg",[o])||"no text defined";t.show(i)},onOpenDialog:async function e(){this.dialog??=await this.loadFragment({name:"ui5.walkthrough.view.HelloDialog"});this.dialog.open()}});return o});
//# sourceMappingURL=HelloPanel.controller.js.map