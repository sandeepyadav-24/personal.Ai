import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[700px] mx-60">
      <div className="">
        <div className="profile flex flex-row">
          <div className="w-1/3">
            <Image
              src="https://media.licdn.com/dms/image/D5622AQGf0KAV3AIGHw/feedshare-shrink_1280/0/1714203074787?e=1717632000&v=beta&t=g_2gyRJ-0zKsjZTfQJzLd6CG-wOvdnnCHuifdvUzxIc"
              width={50}
              height={50}
              alt="Profile Picture"
            />
          </div>
          <div className="w-2/3">
            <h1>Sandeep Yadav </h1>
            <h1>Developer, builder, Gamer</h1>
          </div>
        </div>
        {/** Intro Section  */}
        <div className="intro">
          A creative wizard voyaging into the multiverse of Generative AI. I
          love to connect with people and I spend most of my time questioning
          reality the way it is…
        </div>
        {/** Title String  */}
        <div className="text-[#7F8898]">
          Building @Corpus-X Tinkering with AI and Web3
        </div>
        {/** Slider For Tech Stack  */}
      </div>
    </div>
  );
}
