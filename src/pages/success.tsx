import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  customerName: string;
  products: {
    quantity: number;
    imageUrl: [];
  };
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  return (
    <>
      <Head>
        <title>Compra Efetuad | Ignite Shop </title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer onLoad={clearCart}>
        <h1>Compra Efetuada!</h1>
        <div>
          {products.imageUrl.map((image) => {
            return (
              <ImageContainer key={new Date().getDate()}>
                <Image src={image} width={150} height={110} alt="" />
              </ImageContainer>
            );
          })}
        </div>
        <p>
          Uhuul <strong> {customerName} </strong>, sua compra de{" "}
          <strong>{products.quantity}</strong> camisetas já está a caminho da
          sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data;

  const images = products?.map((item) => {
    const productDetails = item.price?.product as Stripe.Product;
    return productDetails.images[0];
  });

  return {
    props: {
      customerName,
      products: {
        quantity: products?.length,
        imageUrl: images,
      },
    },
  };
};
