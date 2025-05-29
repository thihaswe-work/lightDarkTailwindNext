import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      Milestone Test Page
      <div className="relative w-36 h-32 mt-36">
        <Image src="/image.jpg" fill alt="image" className="animated-image" />
      </div>
    </div>
  );
}
