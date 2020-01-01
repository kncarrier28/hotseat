import React from "react";
import { create } from "react-test-renderer";

import { Notification } from "../../../components/Notification/Notification";

describe("Notification Component", () => {
  it("displays a notification", async () => {
    const notification = create(<Notification />);

    expect(notification.toJSON()).toMatchSnapshot();
  });
});
