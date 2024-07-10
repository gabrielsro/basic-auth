import { db } from "@/server/db";
import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/00b92662-c100-4764-9b2c-3460a804c912-sxafjp.jpg",
  "https://utfs.io/f/300f10db-fce1-4e8c-ba4e-8603a2bf851a-3nyhi.jpg",
  "https://utfs.io/f/843c43db-8e88-4e17-ae58-a93495133e50-619qdy.jpg",
  "https://utfs.io/f/87fd8dce-cb09-453d-a857-1f874bbb9290-spyikp.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function Home() {
  const images = await db.query.images.findMany();
  console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id}>{image.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div className="w-48" key={i + "-" + image.id}>
            <img src={image.url} alt="Placeholder" />
          </div>
        ))}
        <p>{typeof process.env.POSTGRES_URL}</p>
      </div>
    </main>
  );
}
