import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CreateShop',
        href: '/CreateShop',
    },
];

export default function CreateShop() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
        image: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('shop-store'));
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CreateShop" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <div className="mx-auto mt-5 max-w-md rounded p-6 shadow">
                        <h1 className="mb-4 text-xl font-bold">Create Shop</h1>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* Shop Name */}
                            <div className="mb-4">
                                <label className="mb-1 block font-medium">Shop Name</label>
                                <input
                                    type="text"
                                    className="w-full rounded border px-3 py-2"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <label className="mb-1 block font-medium">Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full rounded border px-3 py-2"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                />
                                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="mb-1 block font-medium">Description</label>
                                <textarea
                                    className="w-full rounded border px-3 py-2"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                            </div>

                            {/* Image */}
                            <div className="mb-4">
                                <label className="mb-1 block font-medium">Image URL</label>
                                <input
                                    type="file"
                                    accept="image/*" // ✅ บังคับให้เลือกรูปภาพเท่านั้น
                                    className="w-full rounded border px-3 py-2"
                                    onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                                />

                                {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
                            </div>

                            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white" disabled={processing}>
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
