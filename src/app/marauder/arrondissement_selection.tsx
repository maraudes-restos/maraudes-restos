"use client";

import React, { useState } from 'react';
import { TripData, TripDataProp } from "./page";
import styles from './marauder.module.css'

export default function ArrondissementSelectionSection({tripData, setTripData}: TripDataProp) {

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTripData?.((prevData: TripData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div>
			<p>Select an arrondissement</p>
			<form>
				<label htmlFor="arrondissement" className="block text-sm font-medium text-gray-100">Arrondissement:</label>
				<input
				type="text"
				id="arrondissement"
				name="arrondissement"
				value={tripData.arrondissement}
				onChange={handleChange}
				className="w-full mt-2 p-2 border border-gray-300 rounded-md text-gray-100"
				required
				/>
			</form>
		</div>
	);
}
