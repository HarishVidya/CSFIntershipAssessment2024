/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/i5utYxiZvgN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const Landing = () => {
  const[pokemon, setPokemon] = useState('');
  const[pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setPokemon(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not Found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    }
    catch (err) {
      setError(err.message);
      setPokemonData(null);
    }
  };

  return (
    <div>
    <main
      className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Find your Pokemon</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter the name of a Pokemon to get its details.</p>
        </div>
        
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="pokemon">
              Pokemon Name
            </label>
            <div className="mt-1">
              <Input
                autoComplete="pokemon"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                placeholder="Enter name of Pokemon"
                id="pokemon"
                name="pokemon"
                value={pokemon}
                onChange={handleInputChange}
                required
                type="text" />
            </div>
          </div>
          <div>
            <Button
              onClick={handleSearch}
              className="flex w-full justify-center rounded-md border border-gray-200 border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800"
              type="submit"
              >
              Find Pokemon
            </Button>
          </div>
          {pokemonData && (
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{pokemonData.name}</h2>
          <img className="items-center justify-center" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h3 className="mt-2 text-center text-sm text-gray-600">Height: {pokemonData.height}</h3>
          <h3 className="mt-2 text-center text-sm text-gray-600">Weight: {pokemonData.weight}</h3>
          <h3>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</h3>
        </div>
      )}
        
      </div>
    </main>
  </div>);
  
}

export default Landing;


