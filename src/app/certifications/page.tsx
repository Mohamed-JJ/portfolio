import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Mohamed J.",
  description:
    "Mohamed J. is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Certifications() {
  return (
    <Container>
      <span className="text-4xl">📑</span>
      <Heading className="font-black mb-10">
        {" "}
        Certifications I have
      </Heading>

      <Products />
    </Container>
  );
}
