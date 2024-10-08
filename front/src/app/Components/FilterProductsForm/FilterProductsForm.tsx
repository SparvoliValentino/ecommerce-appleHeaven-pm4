"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useScreen } from "@/app/context/MobileContext";
// Importa Flowbite solo en el cliente

const filterCategories: { name: string; categoryId: number }[] = [
    { name: 'Smartphones', categoryId: 1 },
    { name: 'Laptops', categoryId: 2 },
    { name: 'Tablets', categoryId: 3 },
    { name: 'Headphones', categoryId: 4 },
    { name: 'Cameras', categoryId: 5 },
    { name: 'Monitors', categoryId: 6 },
    { name: 'Storage', categoryId: 7 },
    { name: 'Accessories', categoryId: 8 },
    { name: 'Printers', categoryId: 9 }
];

export const FilterProductsForm = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const { isMobile } = useScreen();

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(Number(event.target.value));
    };

    const handleClearFilter = () => {
        setSelectedCategory(null);
        router.push('/product');
    };

    useEffect(() => {
        // Importar Flowbite de forma dinámica cuando se renderice en el navegador
        import('flowbite');
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="w-full flex justify-start px-4 mb-4 relative">
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faBars} className="mr-2" />
                        Categories
                    </button>

                    <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            {filterCategories.map((category) => (
                                <li key={category.categoryId}>
                                    <a
                                        href={`/product/Categories/${category.categoryId}`}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={handleClearFilter}
                            className="bg-blue-500 p-1 border-1 border-gray-500 text-white w-full rounded-md mt-2"
                        >
                            Clear filter
                        </button>
                    </div>
                </div>
            ) : (
                <form action="" className="w-[200px]">
                    <legend className="sr-only">Categories</legend>
                    <div className="flex flex-col">
                        {filterCategories.map((category) => (
                            <div key={category.categoryId} className="flex items-center mb-4">
                                <input
                                    id={`category-${category.categoryId}`}
                                    type="radio"
                                    name="categories"
                                    value={category.categoryId}
                                    onChange={handleCategoryChange}
                                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor={`category-${category.categoryId}`}
                                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    {category.name}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={handleClearFilter}
                        className="bg-blue-500 p-1 border-1 border-gray-500 text-white w-full rounded-md mt-2"
                    >
                        Clear filter
                    </button>
                </form>
            )}
        </div>
    );
};

export default FilterProductsForm;
