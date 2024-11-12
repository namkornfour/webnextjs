import Supplier from '@/models/Supplier';

interface SupplierProps {
    name:string;
    location:string;    
}

export async function addSupplier(supplier:SupplierProps):Promise<void> {
    const newSupplier = {
        name : supplier.name,
        location: supplier.location,        
    }

    try {
        await Supplier.create(newSupplier);        
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error creating product:', error);
            throw new Error(`Error creating product: ${error.message}`);
        }
        throw error; // Rethrow if not an instance of Error
    }
}
