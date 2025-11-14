"use client";

import React, { useState } from 'react';
import { TripData, TripDataProp } from "./page";
import styles from './marauder.module.css'

export default function DriverInformationSection({tripData, setTripData}: TripDataProp) {

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTripData?.((prevData: TripData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div>
			<p>Enter Driver info</p>
			<form>
				<label htmlFor="firstName" className="block text-sm font-medium text-gray-100">First Name:</label>
				<input
				type="text"
				id="firstName"
				name="firstName"
				value={tripData.firstName}
				onChange={handleChange}
				className="w-full mt-2 p-2 border border-gray-300 rounded-md text-gray-100"
				required
				/>

				<label htmlFor="lastName" className="block text-sm font-medium text-gray-100 mt-4">Last Name:</label>
				<input
				type="lastName"
				id="lastName"
				name="lastName"
				value={tripData.lastName}
				onChange={handleChange}
				className="w-full mt-2 p-2 border border-gray-300 rounded-md text-gray-100"
				required
				/>

				<label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-100 mt-4">Phone Number:</label>
				<input
				type="phoneNumber"
				id="phoneNumber"
				name="phoneNumber"
				value={tripData.phoneNumber}
				onChange={handleChange}
				className="w-full mt-2 p-2 border border-gray-300 rounded-md text-gray-100"
				required
				/>
			</form>
		</div>
	);
}
