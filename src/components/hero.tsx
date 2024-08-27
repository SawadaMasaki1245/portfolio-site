import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  isImage?: boolean;
};

/**
 * ヒーローのコンポーネント
 * @param {string} title タイトル
 * @param {string} subtitle サブタイトル
 * @param {boolean|undefined} isImage 画像を表示するかどうか
 * @returns {JSX}
 */

const Hero: FC<Props> = ({ title, subtitle, isImage = false }) => {
  return (
    <div className="flex justify-center items-center bg-white ">
      <div className="container flex flex-col lg:flex-row justify-between items-center max-w-2xl">
        {/* ↑↑修正↑↑ */}
        <div className="flex flex-col justify-center items-center pt-16 pb-24">
          <h1 className="text-7xl font-black">{title}</h1>
          <p className="text-3xl">{subtitle}</p>
        </div>
        {isImage && (
          <figure className="w-full lg:w-1/2">
            {/* ↑↑追加↑↑ */}
            <Image
              src={"/images/myimg.png"}
              alt=""
              width={288}
              height={144}
              className=""
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Hero;
