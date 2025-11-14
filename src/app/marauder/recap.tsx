"use client";

import React, { useState } from 'react';
import { TripData, TripDataProp } from "./page";
import styles from './marauder.module.css'

export default function RecapSection({tripData}: TripDataProp) {

	return (
		<div>
			<h3>Recap</h3>
			<p className="text-gray-100">Arrondissement: {tripData.arrondissement}</p>
			<p className="text-gray-100">First Name: {tripData.firstName}</p>
			<p className="text-gray-100">Last Name: {tripData.lastName}</p>
			<p className="text-gray-100">Phone Number: {tripData.phoneNumber}</p>
			<p className="text-gray-100">Car: {tripData.carId}</p>
		</div>
	);
}
