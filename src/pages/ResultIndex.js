import React from "react";
import { Link } from "react-router-dom";

export default function ResultIndex({ data }) {
  return (
    <div>
      <ul>
        {Object.entries(data).map(
          ([slug, { name, apartment, street, city, state, zip }], i) => {
            return (
              <li key={i}>
                <Link
                  to={`/result/${slug}/${street}/${city}/${state}/${zip}/${apartment}`}
                >
                  {name}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
