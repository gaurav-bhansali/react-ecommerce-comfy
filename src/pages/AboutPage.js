import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nostrum quam veritatis dolore architecto sed tenetur magni atque,
            veniam officiis ipsum! Fugiat voluptate neque vero natus cum
            consequuntur soluta maxime deserunt consequatur similique possimus
            illum sint, corporis reiciendis atque et tempore incidunt ad.
            Delectus praesentium natus facilis inventore minus! Adipisci nam
            voluptatum vel veniam dicta sapiente vitae! Numquam autem voluptates
            facere possimus incidunt voluptate consequatur veniam tempora porro
            hic expedita ab maiores harum, deleniti esse eum libero aliquid
            fugiat assumenda. Cum, quos expedita, hic ratione suscipit, deleniti
            voluptatibus voluptate et incidunt nam eveniet? Dolorum ipsam,
            quibusdam possimus tempora ad voluptatem!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
