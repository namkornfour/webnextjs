import Product from '@/models/Product'
import mongodbConnect from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST (request: Request) {
    try {
        const {productSKU, productName, price} = await request.json();
        
        await mongodbConnect();

        const product = await Product.create({
            productSKU: productSKU.trim(),
            productName,
            price
        });

        const productMap = {            
            _id: product._id,
            productSKU: product.productSKU,
            productName: product.productName,
            price : product.price
        }
    
        return NextResponse.json(productMap);

    } catch (error:unknown) {
        let errorMessage = 'Unknown'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        if (error instanceof Error) {
            errorMessage = error.message;
          }

        return NextResponse.json({error: errorMessage});
    }
}