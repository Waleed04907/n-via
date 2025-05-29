// src/app/product/[slug]/page.tsx

type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
