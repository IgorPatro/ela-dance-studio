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
    about: file(name: { eq: "about" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    petal: file(name: { eq: "petal" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    service1: file(name: { eq: "service1" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    service2: file(name: { eq: "service2" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    service3: file(name: { eq: "service3" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    social_media: file(name: { eq: "social-media" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    calendar: file(name: { eq: "calendar" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: WEBP
        )
      }
    }
    footer: file(name: { eq: "footer" }) {
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
