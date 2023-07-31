import * as React from "react";

export const FavoriteIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 13 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 2.089v21.912l6.546-6.26 6.545 6.26V2.089A2.11 2.11 0 0010.982 0l-.077.001h.004-8.726L2.11 0A2.109 2.109 0 00.001 2.088v.001z"
      />
    </svg>
  );
};
