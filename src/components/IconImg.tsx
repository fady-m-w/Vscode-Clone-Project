interface Iprops {
  src: string;
}

const IconImg = ({ src }: Iprops) => {
  return <img src={src} className="w-5 h-5" />;
};

export default IconImg;
