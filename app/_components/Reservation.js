import { auth } from '@/app//_lib/auth';
import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/app/_lib/data-service';
import LoginMessage from '@/app/_components/LoginMessage';

export default async function Reservation({ cabin }) {
	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id)
	]);

	const session = await auth();

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector bookedDates={bookedDates} cabin={cabin} settings={settings} />
			{session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
		</div>
	);
}
