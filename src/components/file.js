import { useState } from "react";

export const File = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded?.[node.name] ? "- " : "+ "}
            </span>
          )}
          <span className="list-item">{node.name}</span>
          {isExpanded?.[node.name] && node?.children && (
            <File list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};
