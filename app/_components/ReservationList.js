'use client';

import { useOptimistic } from 'react';
import { deleteBooking } from '@/app/_lib/actions';
import ReservationCard from '@/app/_components/ReservationCard';

export default function ReservationList({ bookings }) {
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		(currentBookings, bookingId) => {
			return currentBookings.filter((booking) => booking.id !== bookingId);
		}
	);

	async function handleDelete(bookingId) {
		optimisticDelete(bookingId);
		deleteBooking(bookingId);
	}

	return (
		<ul className="space-y-6">
			{optimisticBookings.map((booking) => (
				<ReservationCard booking={booking} key={booking.id} onDelete={handleDelete} />
			))}
		</ul>
	);
}
