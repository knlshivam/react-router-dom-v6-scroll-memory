import { Link } from "react-router-dom";
import { useMatch,
        useResolvedPath
        } from "react-router-dom";

export function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
          style={{ textDecoration: "none", "color": match ? "#C5C565" : "unset", "fontWeight" : match ? "bold" : "normal"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
  }