"use client";

import React, { useState } from 'react';
import { TripData, TripDataProp } from "./page";
import { ConfirmButton } from './page';
import styles from './marauder.module.css'

interface VoitureProps {
	id: string;
	name: string;
	price: string;
	statusComment: string;
	selected: boolean;
	onSelect: (id: string) => void;
}

export function Voiture({
	id,
	name,
	price,
	statusComment,
	selected,
	onSelect,
}: VoitureProps) {
	return (
		<div>
		<input
			id={id}
			type="radio"
			name="plan"
			checked={selected}
			onChange={() => onSelect(id)}
			className={`hidden ${styles.radioInput}`}
		/>
		<label
			htmlFor={id}
			className={`grid grid-cols-3 p-4 border-2 border-gray-400 rounded-md cursor-pointer transition ${styles.radioLabel}`}
		>
			<div className='col-span-1 flex flex-col'>
			<span className="text-xl font-bold mt-2">{name}</span>
			<span className="text-xs font-semibold uppercase">{price}</span>
			</div>
			<div className='col-span-2 flex items-center justify-center'>
			<span className="text-sm">{statusComment}</span>
			</div>
		</label>
		</div>
	);
}

interface PlanOption {
	id: string;
	name: string;
	status: string;
	statusComment: string;
}

const plans: PlanOption[] = [
	{ id: "Rifter", name: "Rifter", status: "Available", statusComment: "Fonctionnel" },
	{ id: "Kangoo-894", name: "Kangoo 894", status: "Booked", statusComment: "Reserve pour Festival" },
	{ id: "Kangoo-691", name: "Kangoo 691", status: "Damaged", statusComment: "Fenetre cassee" },
];

export default function CarSelectionSection({tripData, setTripData}: TripDataProp) {
	const [selected, setSelected] = useState<string>(tripData.carId);
	const handleSelectCar = (id: string) => {
		setSelected(id);
		setTripData?.((prevData: TripData) => ({
			...prevData,
			carId: id,
		}));
	};


	return (
	<div className='flex flex-col items-center justify-center'>
		<legend className='justify-self-center self-center text-xl font-semibold underline mb-4'>Choisissez une Voiture</legend>
		<form className="grid gap-4 max-w-screen-sm max-h-80 overflow-auto">
		{plans.map((plan) => (
			<Voiture
			key={plan.id}
			id={plan.id}
			name={plan.name}
			price={plan.status}
			statusComment={plan.statusComment}
			selected={selected === plan.id}
			onSelect={handleSelectCar}
			/>
		))}
		</form>
	</div>
	);
}
