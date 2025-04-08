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
} from "react-icons/si";

import { DiPython } from "react-icons/di";
import { FaGitAlt, FaVideo, FaUserShield, FaShapes } from "react-icons/fa";

// Updated techLogos based on your main skills
export const techLogos: Record<string, IconType> = {
  // Languages
  Java: SiOracle,
  Python: DiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,

  // Tools & Technologies
  Figma: SiFigma,
  "Git & GitHub": FaGitAlt,
  "Google Colab": SiGooglecolab,
  MySQL: SiMysql,
  Firebase: SiFirebase,

  // Libraries & Frameworks
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Radix UI": FaShapes,

  // Databases & Backend
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Prisma: SiPrisma,
  "GraphQL API": SiGraphql,
  "Express.js": SiExpress,

  // Other Technologies
  "tRPC": SiTrpc,
  "React Query": SiReactquery,
  "Redux Toolkit": SiRedux,
  Docker: SiDocker,
  Kafka: SiApachekafka,
  Rust: SiRust,
  Clerk: FaUserShield,

  // Real-time & Streaming
  "ZEGOCLOUD": FaVideo, 
  "Socket.io": SiSocketdotio,
};
