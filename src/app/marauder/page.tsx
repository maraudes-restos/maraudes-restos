"use client";

import React, { Component, isValidElement, useState } from 'react';
import CarSelectionSection from './car_selection';
import ArrondissementSelectionSection from './arrondissement_selection';
import DriverInformationSection from './driver_info';
import RecapSection from './recap';
import styles from './marauder.module.css'

interface StepProps {
	goBack?: () => void;
	goNext?: () => void;
	isValid?: boolean;
}

function ButtonGoNext( { goNext, isValid }: StepProps) {
	return (
		<div>
			<button
				type="button"
				onClick={goNext}
				className={`px-4 py-2 ${isValid ? 'bg-blue-500' : 'bg-zinc-400'} text-white rounded-md`}
				disabled={!isValid}
			>
				Continuer
			</button>
		</div>
	);
}

function ButtonGoBack( { goBack }: StepProps) {
	return (
		<div>
			<button
				type="button"
				onClick={goBack}
				className="px-4 py-2 bg-slate-400 border-4 border-sky-950 text-sky-900 rounded-md"
			>
				Retour
			</button>
		</div>
	);
}

export type TripData = {
	arrondissement: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	carId: string;
}

export type TripDataProp = {
	tripData: TripData;
	setTripData?: React.Dispatch<React.SetStateAction<TripData>>;
}

export default function Home() {
	
	const [currentStep, setCurrentStep] = useState(1);
	const [tripData, setTripData] = useState<TripData>({
		arrondissement: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		carId: "",
	})

	const goNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};
	
	const goBack = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const isValidStep = () => {
	switch (currentStep) {
		case 1:
			return tripData.arrondissement !== "";
		case 2:
			return tripData.carId !== "";
		case 3:
			return tripData.firstName !== "" && tripData.lastName !== "" && tripData.phoneNumber !== "";
		case 4:
			return true;
		default:
			return false;
	}
	};

	const steps = [
		{ id: 1, component: <ArrondissementSelectionSection tripData={tripData} setTripData={setTripData} /> },
		{ id: 2, component: <CarSelectionSection tripData={tripData} setTripData={setTripData} /> },
		{ id: 3, component: <DriverInformationSection tripData={tripData} setTripData={setTripData} /> },
		{ id: 4, component: <RecapSection tripData={tripData} /> }
	];

	const currentComponent = steps.find(step => step.id === currentStep)?.component;
	const isValid = isValidStep();

	return (
		<div className='h-screen flex flex-col items-center justify-center'>

			{currentComponent}

			<div className="mt-6 w-4/5 flex">
				{currentStep > 1 && 
				<span className="justify-start">
					<ButtonGoBack goBack={goBack}/> 
				</span>
				} { }

				{currentStep < steps.length && 
				<span className="ml-auto justify-end">
					<ButtonGoNext goNext={goNext} isValid={isValid}/>
				</span>
				} { }
			</div>

		</div>
	);
}

type ConfirmButtonProps = {
	onClick: () => void;
}
export function ConfirmButton({onClick} : ConfirmButtonProps) {
	return (
		<button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'>Confirmer</button>
	);
}
