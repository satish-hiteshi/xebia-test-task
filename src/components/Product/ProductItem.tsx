import { Box, Card, Image, Text, Button } from 'theme-ui';
import { ProductType } from 'src/interface/product';

export const ProductItem = ({ product }: { product: ProductType }) => (
  <Box>
    <Card
      data-testid="card"
      sx={{
        background: 'white',
        textAlign: 'center',
        padding: '0 16px',
        borderRadius: 8,
      }}
    >
      <Image
        data-testid="img"
        sx={{ height: 160, marginBottom: 10, marginTop: 40, minHeight: 160 }}
        alt="Image not found"
        src={product.image}
      />
      <Box
        sx={{
          height: '60px',
          color: '#333333',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <Text
          data-testid="name"
          sx={{
            fontSize: '22px',
            display: 'block',
          }}
        >
          {product.name}
        </Text>
      </Box>
      <Box
        sx={{
          height: '85px',
          color: '#333',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 200,
        }}
      >
        <Text
          data-testid="description"
          sx={{
            fontSize: '16px',
            display: 'block',
            marginTop: '6px',
          }}
        >
          {product.description}
        </Text>
      </Box>
      <Box
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          color: '#333333',
        }}
      >
        <Text
          data-testid="amount"
          sx={{
            display: 'block',
            marginBottom: 25,
          }}
        >
          ${' '}
          {`${product.price.amount.slice(0, -2)}.${product.price.amount.slice(
            -2,
          )}`}
        </Text>
      </Box>
      <div>
        <Button
          data-testid="button"
          onClick={() => {}}
          sx={{
            marginBottom: 25,
            background: '#31A3E9',
            paddingLeft: 35,
            paddingRight: 35,
            paddingTop: 16,
            paddingBlock: 16,
          }}
        >
          Buy Now
        </Button>
      </div>
    </Card>
  </Box>
);
