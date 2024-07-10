import { db } from "@/server/db";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, i) => (
          <div className="w-48 flex flex-col" key={i + "-" + image.id}>
            <img src={image.url} alt="Placeholder" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
