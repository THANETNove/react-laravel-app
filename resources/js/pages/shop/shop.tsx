import { Head, Link } from '@inertiajs/react';

type Shop = {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
};

type Props = {
    products: Shop[];
};

export default function Shop({ products }: Props) {
    return (
        <>
            <Head title="Shop" />
            <div className="mx-auto max-w-7xl p-6">
                <Link className="mb-6 text-2xl font-bold" href={route('home')}>
                    Shop List TEST{' '}
                </Link>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {products &&
                        products.map((shop) => (
                            <div key={shop.id} className="rounded-lg border bg-white p-4 shadow">
                                <img src={`/storage/${shop.image}`} alt={shop.name} className="mb-4 h-48 w-full rounded object-cover" />
                                <h2 className="text-lg font-semibold">{shop.name}</h2>
                                <p className="mb-2 text-sm text-gray-600">฿ {parseFloat(shop.price).toFixed(2)}</p>
                                {shop.description && <p className="text-sm text-gray-700">{shop.description}</p>}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
