import React from "react";
import TopFooter from "./TopFooter";
import BotFooter from "./BotFooter";

function FooterContainer() {
  return (
    <div className="fixed inset-x-0 bottom-0">
      <TopFooter />
      <BotFooter />
    </div>
  );
}

export default FooterContainer