import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Text from "@/components/text";
import Skill from "@/components/skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero title="MyPortfolio" subtitle="これまでになくシンプル" isImage />
      <br />
      <Text
        title="自身について"
        name="澤田匡輝 - Sawada Masaki"
        text="2004年6月 岩手県出身、MCL盛岡情報ビジネス＆デザイン専門学校に在学中。現在、PHP・TypeScript等を学習中"
        isImage
      />
      <Skill
        title="スキル"
        name="自分にできること"
        text="HTML・CSSを使用し、デザインを正しく再現します。
        またJavascriptを使用し、サイトに動きを加えることもできるようになりたいと考えています。
        アニメーションによって世界観を演出し、よりWebデザインの魅力を引き上げられるような実装を目指しています。"
      />
      <br />
    </Layout>
  );
}
