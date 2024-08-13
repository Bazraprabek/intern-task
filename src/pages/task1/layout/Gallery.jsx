import React from "react";

const Gallery = () => {
  const image =
    "https://s3-alpha-sig.figma.com/img/faf8/9f22/428ca105aeafed2305fc75df9c7b1d54?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JaOHpLVAVA9VWbFkWoGevhI5XH6Bzq6BWq8UqUb3IvYGJ6p094Yc3OV4~L33Ca3rpLl3dYsDdH1S5Jf~vLDkzJBMyMk9CNqJgZNvgtG2nRxTJLzdcdNYK6FQGCSZ1HtM-svxnQLqRMQXe8AVNVMFitvC-rsreI0FMuXHEQ0XyA8ZG4Ylbc9f0QPkyqCjaZ9uFiqG-zQC-CVptg1jaMQfDUNKePFLlRDdBG-Wml-nsuGl7yMJlFRVI-V2JYYFygfPkR8ymrgNAhxS8fsowm3jUxiFayOh5ZvsVvWnYz6SsInc5EHNh70S2cOHVgOb6P1QrbdVmJJf9EvqTLODd9Mj8g__";

  return (
    <div className="grid grid-cols-3 gap-5">
      <img src={image} alt="" className="w-full h-80 object-cover" />
      <img src={image} alt="" className="w-full h-80 object-cover" />
      <img src={image} alt="" className="w-full h-80 object-cover" />
    </div>
  );
};

export default Gallery;
