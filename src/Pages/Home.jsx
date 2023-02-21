import React from "react";
import Baner from "../components/baner/Baner";
import Cases from "../components/cases/Cases";
import Headphones from "../components/headphones/Headphones";
import Container from "../components/layout/Container";
import Wireless from "../components/wireless/Wireless";
import Line from "../ui/Line/Line";

function Home() {
  return (
    <>
      <Container>
        <Baner />
        <Cases />
        <Headphones />
        <Wireless />
      </Container>
    </>
  );
}

export default Home;
