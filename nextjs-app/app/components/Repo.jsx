import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/moh123adan/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const repo = await response.json();

  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <FaStar />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="card-stats">
        <FaCodeBranch />
        <span>{repo.forks_count}</span>
      </div>
      <div className="card-stats">
        <FaEye />
        <span>{repo.watchers_count}</span>
      </div>
    </>
  );
};
export default Repo;
