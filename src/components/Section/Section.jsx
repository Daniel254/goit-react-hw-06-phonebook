import { SectionStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h2>{title}</h2>}
      {children}
    </SectionStyled>
  );
};

export default Section;
