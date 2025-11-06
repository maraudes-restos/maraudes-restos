"use client";

import React, { useState, ViewTransitionPseudoElement } from 'react';
import styles from './marauder.module.css'

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <CarSelectionRadio />
  </div>
  );
}

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

export function CarSelectionRadio() {
  const [selected, setSelected] = useState<string>("");

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
            onSelect={setSelected}
          />
        ))}
      </form>
      <ConfirmButton onClick={() => alert('Confirmed!')} />
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
