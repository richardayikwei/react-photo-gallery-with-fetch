

const Footer = () => {
  return (
    <footer className=" flex text-[18px] flex-col items-center mt-9 h-[200px]">
      <div className="flex md:justify-around items-center md:w-[700px] md:h-[150px] h-[100px] md:py-6 py-20 md:flex-row flex-col bg">
        <p className="text-[white] ">
          <em>Email</em>: richardayikweibee@gmail.com
        </p>
        <p className="text-[white] ">
          <em>Contact</em>: +233557500645
        </p>
      </div>

      <div className="md:py-6 flex">
        <p className="text-[white]">
          &copy;<em>2024 Richard Ayikwei, All Rights Reserved.</em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
