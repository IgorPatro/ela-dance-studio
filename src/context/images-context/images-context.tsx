import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type ImagesState = Record<string, IGatsbyImageData>;

interface Props {
  children: React.ReactNode;
}

const ImagesContext = React.createContext<ImagesState>({} as ImagesState);

export const ImagesContextProvider = (props: Props) => {
  const data = useStaticQuery(imagesQuery);

  return (
    <ImagesContext.Provider value={data}>
      {props.children}
    </ImagesContext.Provider>
  );
};

// ------------------------ HOOK ------------------------
export const useImagesContext = () => React.useContext(ImagesContext);

export const imagesQuery = graphql`
  query ImagesQuery {
    hero: file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
  }
`;
