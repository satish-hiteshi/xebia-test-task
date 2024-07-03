import React, { useEffect } from 'react';
import { Grid } from 'theme-ui';
import { Layout } from '../../../components/Layout';
import { ProductType } from 'src/interface/product';
import { ProductService } from 'src/services/ProductService';
import { ProductItem } from 'src/components/Product';

const Product = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);

  useEffect(() => {
    ProductService()
      .then((resp: ProductType[]) => setProducts(resp))
      .catch(error => error);
  }, []);

  return (
    <Layout>
      <div>
        <Grid
          sx={{
            display: 'grid',
            gridGap: '16px',
            gridTemplateColumns: 'repeat(1, 1fr)',
            '@media screen and (min-width: 400px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
            '@media screen and (min-width: 600px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media screen and (min-width: 992px)': {
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            '@media screen and (min-width: 1200px)': {
              gridTemplateColumns: 'repeat(5, 1fr)',
            },
          }}
        >
          {products &&
            products.map((product: ProductType) => (
              <div key={product.id} data-testid="products">
                <ProductItem product={product} />
              </div>
            ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Product;
