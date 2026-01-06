import * as React from "react";
import { Figma, Github } from "lucide-react";

const Footer = () => (
  <div className="px-4 py-4 px bg-accent-foreground text-accent">
    <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
      <ul className="flex gap-4">
        <li>
          <a>
            <Figma className="w-6 h-6" strokeWidth={1} />
          </a>
        </li>
        <li>
          <a>
            <Github className="w-6 h-6" strokeWidth={1} />
          </a>
        </li>
      </ul>
      <p className="body-text-xs">© 2026 reread</p>
    </div>
  </div>
);

export default Footer;
