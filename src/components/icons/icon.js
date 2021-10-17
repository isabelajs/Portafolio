import React from "react";
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
} from "@components/icons";

const Icon = ({ name }) => {
  switch (name) {
    case "AppStore":
      return <IconAppStore />;
    case "Bookmark":
      return <IconBookmark />;
    case "Codepen":
      return <IconCodepen />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Fork":
      return <IconFork />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Loader":
      return <IconLoader />;
    case "Logo":
      return <IconLogo />;
    case "PlayStore":
      return <IconPlayStore />;
    case "Star":
      return <IconStar />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
