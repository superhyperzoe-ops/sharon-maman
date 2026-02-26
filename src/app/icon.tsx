import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const filePath = join(process.cwd(), "public", "images", "flavicon.png");
  const imageBuffer = await readFile(filePath);
  const base64 = imageBuffer.toString("base64");

  return new ImageResponse(
    <img
      src={`data:image/png;base64,${base64}`}
      width={size.width}
      height={size.height}
      alt="Favicon"
    />,
    size
  );
}
