import * as React from "react";
import { Figma, Github } from "lucide-react";

const Footer = () => (
  <footer className="px-4 py-4 bg-accent-foreground text-accent">
    <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
      <nav aria-label="Social links">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.figma.com/@lateensail"
              target="_blank"
              rel="noreferrer"
              aria-label="Figma profile"
              className="group inline-flex relative"
            >
              <Figma
                className="w-6 h-6"
                strokeWidth={1}
                aria-hidden="true"
                focusable="false"
              />
              <span className="absolute -inset-1 z-0 rounded-full bg-accent opacity-20 scale-0 group-hover:scale-100 duration-200"></span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lateen-sail"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="group inline-flex relative"
            >
              <Github
                className="w-6 h-6"
                strokeWidth={1}
                aria-hidden="true"
                focusable="false"
              />
              <span className="absolute -inset-1 z-0 rounded-full bg-accent opacity-20 scale-0 group-hover:scale-100 duration-200"></span>
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-body-xs">© 2026 reread</p>
    </div>
  </footer>
);

export default Footer;
