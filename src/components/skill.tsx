import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  name: string;
  text: string;
};

/**
 * ヒーローのコンポーネント
 * @param {string} title タイトル
 * @param {string} name サブタイトル
 * @param {string} text サブタイトル
 * @returns {JSX}
 */

const Skill: FC<Props> = ({ title, name, text }) => {
  return (
    <div className="flex bg-white">
      <div className="container flex flex-col lg:flex-row justify-between items-center ">
        {/* ↑↑修正↑↑ */}
        <div>
          <h1 className="text-5xl font-black">{title}</h1>
          <p className="text-2xl">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
