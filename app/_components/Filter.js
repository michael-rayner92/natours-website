'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const activeFilter = searchParams.get('capacity') ?? 'all';

	function handleFilter(filter) {
		const params = new URLSearchParams();

		params.set('capacity', filter);
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="border border-primary-800 flex">
			<Button activeFilter={activeFilter} filter="all" handleFilter={handleFilter}>
				All cabins
			</Button>
			<Button activeFilter={activeFilter} filter="small" handleFilter={handleFilter}>
				1&mdash;3 guests
			</Button>
			<Button activeFilter={activeFilter} filter="medium" handleFilter={handleFilter}>
				4&mdash;7 guests
			</Button>
			<Button activeFilter={activeFilter} filter="large" handleFilter={handleFilter}>
				8&mdash;12 guests
			</Button>
		</div>
	);
}

function Button({ children, filter, handleFilter, activeFilter }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${
				filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}

export default Filter;
