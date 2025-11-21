import { createElement, useState } from "react";
// import { Button } from "@/components/button";

// import pour compiler

interface Quote {
  quote: string;
  author: string;
  id: number;
}

const [quotes, setQuotes] = useState<Quote[]>([]);
// quotes contient le tableau de toutes les citations
// setQuotes est la fonction pour ajouter et modifier les citations
// TypeScript sait que c'est un tableau de Quote

function addQuote(quote: string, author: string) {
  // Fonction qui prépare l'ajout de citation
  const NewQuote = {
    quote: quote, // on utilise le paramètre reçu
    author: author, //
    id: Date.now(), // produit un nombre unique basé sur l'heure actuelle
  };
}

// function App() {
//   return (
//     <div className="p-6 bg-blue-100 rounded-xl">
//       <h1 className="text-2xl font-bold text-blue-800">Hello Tailwind !</h1>
//       <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//         Soumettre
//       </button>
//     </div>
//   );
// }

export default App;
