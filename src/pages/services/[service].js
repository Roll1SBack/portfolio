import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

// Debug: Service LP content only (no header/footer).
const serviceData = {
  "ec-fulfillment": {
    title: "EC・フルフィルメント",
    slogan: "EC運営をまるごとサポート",
    img: "/ec.png",
    strengths: ["迅速な配送", "柔軟な対応", "コスト削減"],
    process: ["受注処理", "梱包", "発送"],
  },
  "assembly": {
    title: "アセンブリ・セット作業",
    slogan: "精密な組み立てを迅速に",
    img: "/assembly.png",
    strengths: ["高品質", "効率化", "カスタマイズ"],
    process: ["部品調達", "組み立て", "検品"],
  },
  "secretariat": {
    title: "事務局代行",
    slogan: "事務業務を効率化",
    img: "/secretariat.png",
    strengths: ["正確な対応", "時間節約", "専門性"],
    process: ["問い合わせ対応", "書類管理", "スケジュール調整"],
  },
  "inventory": {
    title: "在庫管理・受発注業務",
    slogan: "在庫を最適化、業務をスムーズに",
    img: "/inventory.png",
    strengths: ["リアルタイム管理", "ミス削減", "柔軟性"],
    process: ["在庫確認", "発注処理", "入出庫管理"],
  },
  "data-processing": {
    title: "データ処理・オーバープリント",
    slogan: "データを価値に変える",
    img: "/data.png",
    strengths: ["高速処理", "正確性", "カスタム対応"],
    process: ["データ入力", "加工", "出力"],
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;
  const data = serviceData[service] || {};

  if (!data.title) return <p className="text-center py-20 text-gray-900 dark:text-gray-100">サービスが見つかりません</p>;

  return (
      <main>
        <section className="py-12 px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">{data.title}</h2>
          <p className="text-xl text-center mb-8">{data.slogan}</p>
          <Image
            src={data.img}
            alt={`${data.title}のイメージ`}
            width={800}
            height={450}
            className="w-full h-auto rounded mb-8"
          />
          <section>
            <h3 className="text-2xl font-semibold mb-4">当社の強み</h3>
            <ul className="list-disc pl-6">
              {data.strengths?.map((strength) => (
                <li key={strength} className="mb-2">{strength}</li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">作業の流れ</h3>
            <ol className="list-decimal pl-6">
              {data.process?.map((step) => (
                <li key={step} className="mb-2">{step}</li>
              ))}
            </ol>
          </section>
          <div className="flex gap-6 mt-12 justify-center">
            <Link href="/quote" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              無料見積もり
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800">
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(serviceData).map((service) => ({ params: { service } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}