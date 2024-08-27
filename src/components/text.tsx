import { FC } from "react";
import Image from "next/image";
import { text } from "stream/consumers";

type Props = {
  title: string;
  name: string;
  text: string;
  isImage?: boolean;
};

/**
 * @param {string} title タイトル
 * @param {string} name タイトル
 * @param {string} text 本文
 * @param {boolean|undefined} isImage 画像を表示するかどうか
 * @returns {JSX}
 */

const Text: FC<Props> = ({ title, name, text, isImage = false }) => {
  return (
    <div className="flex bg-slate-50">
      <div className="container">
        <h2 className="text-5xl text-slate-700 font-black">{title}</h2>
        <p className="text-2xl">{name}</p>
        <p>{text}</p>
      </div>
      {isImage && (
        <figure className="w-full lg:w-1/2">
          <Image src={"/images/free.png"} alt="" width={300} height={160} />
        </figure>
      )}
    </div>
  );
};

export default Text;
