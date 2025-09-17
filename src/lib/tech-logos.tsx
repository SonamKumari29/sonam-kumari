import type { IconType } from "react-icons";
import {
    SiApachekafka,
    SiDocker,
    SiExpress,
    SiGraphql,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiOracle,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiReactquery,
    SiRedis,
    SiRedux,
    SiRust,
    SiTailwindcss,
    SiTrpc,
    SiTypescript,
    SiFigma,
    SiFirebase,
    SiMysql,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiGooglecolab,
    SiSocketdotio,
    SiPostman,
} from "react-icons/si";

import { DiPython } from "react-icons/di";
import { FaGitAlt, FaVideo, FaUserShield, FaShapes, FaRobot } from "react-icons/fa";

// Updated techLogos based on your main skills
export const techLogos: Record<string, IconType> = {
  // Languages
  Java: SiOracle,
  Python: DiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,

  // Libraries & Frameworks
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,

  // Databases
  MySQL: SiMysql,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,

  // Tools & Technologies
  Git: FaGitAlt,
  GitHub: FaGitAlt,
  Figma: SiFigma,
  Postman: SiPostman,
  Copado: FaRobot,
  "Kore.ai": FaRobot,
};
