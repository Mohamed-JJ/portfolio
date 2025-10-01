import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { certifications } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const certification = certifications.find((p) => p.slug === slug) as Product | undefined;
  if (certification) {
    return {
      title: certification.title,
      description: certification.description,
    };
  } else {
    return {
      title: "Certifications | Mohamed J.",
      description:
        "Mohamed J. is a developer, writer. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleCertificationPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const certification = certifications.find((p) => p.slug === slug);

  if (!certification) {
    redirect("/certifications");
  }
  return (
    <Container>
      <SingleProduct product={certification} />
    </Container>
  );
}
