import Product from '@/models/Product';

interface ProductProps {
    productSKU:string;
    productName:string;
    price: number;
}

export async function addProduct(product:ProductProps):Promise<void> {
    const newProduct = {
        productSKU : product.productSKU,
        productName: product.productName,
        price: product.price
    }

    try {
        await Product.create(newProduct);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error creating product:', error);
            throw new Error(`Error creating product: ${error.message}`);
        }
        throw error; // Rethrow if not an instance of Error
    }
}
