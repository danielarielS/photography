import Image from "next/image";

export const Stage = () => {
  return (
    <header className="">
      <figure>
        <Image
          src="/images/innsbruck_11"
          layout="responsive"
          width="100"
          height="100"
          alt="Desert spring"
        />
      </figure>
    </header>
  );
};
