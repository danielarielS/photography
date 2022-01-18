import Image from "next/image";
import innsbruck_11 from "../../public/images/innsbruck_2021/innsbruck_11.jpeg";
export const Stage = () => {
  return (
    <header className="">
      <figure className="w-80 h-80">
        <Image
          src={innsbruck_11}
          layout="responsive"
          width={1000}
          height={1000}
          alt="Desert spring"
          placeholder="blur"
        />
      </figure>
    </header>
  );
};
