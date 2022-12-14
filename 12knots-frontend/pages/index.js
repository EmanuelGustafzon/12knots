import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import product from '../../12knots-sanity/schemas/product';
import Layout from '../components/Layout';
import ProductItem from '../components/productItem';
import client from '../utils/client';

export default function Home() {
    const [state, setState] = useState({
        products: [],
        error: '',
        loading: true,
      });
      const { loading, error, products } = state;
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const products = await client.fetch(`*[_type == "product"]`);
            setState({ products, loading: false });
            console.log(products)
          } catch (err) {
            setState({ loading: false, error: err.message });
          }
        };
        fetchData();
      }, []);

    return (
        <div>
        <Layout>
            {loading ? (
            <CircularProgress />
             ) : error ? (
            <Alert variant="danger">{error}</Alert>
            ) : (
            <Grid container spacing={3}>
            {products.map((product) => (
            <Grid item md={4} key={product.slug}>
            <ProductItem product={product}></ProductItem>
            </Grid>
            ))}
            </Grid>
        )}
        </Layout>
        </div>
    )
}
    