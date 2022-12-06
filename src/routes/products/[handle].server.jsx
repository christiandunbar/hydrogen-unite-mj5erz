import { useShopQuery, gql } from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';

export default function Example({ params }) {
  const { handle } = params;

  const { data } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });

  console.log(data);

  return (
    <Layout>
      <p>Hello world! This is the product page for {handle}</p>;
    </Layout>
  );
}

const QUERY = gql`
    query ProductDetails($handle: String!) {
      product(handle: $handle) {
        id
        title
      }
    }
  `;
