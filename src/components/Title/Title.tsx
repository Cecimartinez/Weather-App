interface TitleProps {
  text: string;
  className: string
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

export default Title;
