// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function Logo() {
//   return <h1>My Travel List</h1>;
// }

// function Form() {
//   return (
//     <form className="add-form">
//       <h3>What do you need to pack?</h3>
//     </form>
//   );
// }

// function PackingList() {
//   return (
//     <div className="list">
//       <ul>
//         {initialItems.map((item) => (
//           <li>{item.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>You have X items in the list. You already packed Y (Z%).</em>
//     </footer>
//   );
// }

// function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <PackingList />
//       <Stats />
//     </div>
//   );
// }

// export default App;

// // Activity 2
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function Logo() {
//   return <h1>My Travel List</h1>;
// }

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [itemDescription, setItemDescription] = useState('');
//   const [quantity, setQuantity] = useState(1); // Default quantity set to 1

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (itemDescription) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description: itemDescription,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]);
//       setItemDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   return (
//     <div className="app">
//       <Logo />
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={itemDescription} 
//           onChange={(e) => setItemDescription(e.target.value)} 
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// function PackingList({ items }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Stats({ items }) {
//   const totalItems = items.length;
//   const packedItems = items.filter(item => item.packed).length;
//   const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//   return (
//     <footer className="stats">
//       <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//     </footer>
//   );
// }

// export default App;

// Activity 3
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [itemDescription, setItemDescription] = useState('');
//   const [quantity, setQuantity] = useState(1); // Default quantity set to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (itemDescription) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description: itemDescription,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state
//       setItemDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={itemDescription} 
//           onChange={(e) => setItemDescription(e.target.value)} 
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 4
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // Default quantity set to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 5
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 6
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Item Component
//   const Item = ({ item }) => (
//     <li>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 7
// import React, { useState } from 'react';

// // Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true }, // Example packed item
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 8a
// import React, { useState } from 'react';

// // Initial packing items (can be removed if you want to start with an empty list)
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true }, // Example packed item
// ];

// function App() {
//   // Create a new state for items and initialize it with an empty array
//   const [items, setItems] = useState([]); // Initialize with an empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       setItems([...items, newItem]); // Update items state with the new item
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 8b
// import React, { useState } from 'react';

// // Initial packing items (can be removed if you want to start with an empty list)
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true }, // Example packed item
// ];

// function App() {
//   // Create a new state for items and initialize it with an empty array
//   const [items, setItems] = useState([]); // Initialize with an empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Function to add a new item to the items state
//   const handleAddItems = (item) => {
//     setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       const newItem = {
//         id: Date.now(), // Generate a unique ID
//         description,
//         quantity,
//         packed: false,
//       };
//       handleAddItems(newItem); // Call handleAddItems to add the new item
//       setDescription(''); // Reset input field
//       setQuantity(1); // Reset quantity to default
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 8c
// import React, { useState } from 'react';

// // Initial packing items (can be removed if you want to start with an empty list)
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true }, // Example packed item
// ];

// function App() {
//   // Create a new state for items and initialize it with an empty array
//   const [items, setItems] = useState([]); // Initialize with an empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Function to add a new item to the items state
//   const handleAddItems = (item) => {
//     setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       // Create a new item based on user input
//       const newItem = {
//         id: Date.now(), // Generate a unique ID using current timestamp
//         description,    // User-entered description
//         quantity,       // User-selected quantity
//         packed: false,  // Default packed status
//       };
//       handleAddItems(newItem); // Call handleAddItems to add the new item

//       // Reset states to clear the entry on the screen
//       setDescription(''); // Reset input field for description
//       setQuantity(1);     // Reset quantity to default value of 1
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   // Stats Component
//   const Stats = ({ items }) => {
//     const totalItems = items.length;
//     const packedItems = items.filter(item => item.packed).length;
//     const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

//     return (
//       <footer className="stats">
//         <em>You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>
//       </footer>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <PackingList items={items} />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 9a
// import React, { useState } from 'react';

// // Initial packing items (optional, can be removed if you want to start with an empty list)
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true }, // Example packed item
// ];

// function App() {
//   // Move items state to App
//   const [items, setItems] = useState(initialItems); // Initialize with initial items or empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Function to add a new item to the items state
//   const handleAddItems = (item) => {
//     setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       // Create a new item based on user input
//       const newItem = {
//         id: Date.now(), // Generate a unique ID using current timestamp
//         description,    // User-entered description
//         quantity,       // User-selected quantity
//         packed: false,  // Default packed status
//       };
//       handleAddItems(newItem); // Call handleAddItems to add the new item

//       // Reset states to clear the entry on the screen
//       setDescription(''); // Reset input field for description
//       setQuantity(1);     // Reset quantity to default value of 1
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Use Item component and pass item as prop
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       {/* Pass items as props to PackingList */}
//       <PackingList items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 9b
// import React, { useState } from 'react';

// function App() {
//   // Move items state to App
//   const [items, setItems] = useState([]); // Initialize with an empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Function to add a new item to the items state
//   const handleAddItems = (item) => {
//     setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       // Create a new item based on user input
//       const newItem = {
//         id: Date.now(), // Generate a unique ID using current timestamp
//         description,    // User-entered description
//         quantity,       // User-selected quantity
//         packed: false,  // Default packed status
//       };
//       handleAddItems(newItem); // Call handleAddItems to add the new item

//       // Reset states to clear the entry on the screen
//       setDescription(''); // Reset input field for description
//       setQuantity(1);     // Reset quantity to default value of 1
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component - now receives items as props
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Set key prop using item's id
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>What do you need to pack?</h3>
//         <select 
//           value={quantity} 
//           onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//         </select>
//         <input 
//           type="text" 
//           value={description} // Controlled input
//           onChange={(e) => setDescription(e.target.value)} // Update state on change
//           placeholder="Item..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       {/* Pass items as props to PackingList */}
//       <PackingList items={items} />
//     </div>
//   );
// }

// export default App;

// // Activity 9c
// import React, { useState } from 'react';

// function App() {
//   // Move items state to App
//   const [items, setItems] = useState([]); // Initialize with an empty array
//   const [description, setDescription] = useState(''); // State for item description
//   const [quantity, setQuantity] = useState(1); // State for quantity initialized to 1

//   // Function to add a new item to the items state
//   const handleAddItems = (item) => {
//     setItems((prevItems) => [...prevItems, item]); // Create a new array with the new item
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (description) {
//       // Create a new item based on user input
//       const newItem = {
//         id: Date.now(), // Generate a unique ID using current timestamp
//         description,    // User-entered description
//         quantity,       // User-selected quantity
//         packed: false,  // Default packed status
//       };
//       handleAddItems(newItem); // Call handleAddItems to add the new item

//       // Reset states to clear the entry on the screen
//       setDescription(''); // Reset input field for description
//       setQuantity(1);     // Reset quantity to default value of 1
//     }
//   };

//   // Item Component with conditional rendering for packed items
//   const Item = ({ item }) => (
//     <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
//       {item.quantity} x {item.description}
//     </li>
//   );

//   // Packing List Component - now receives items as props
//   const PackingList = ({ items }) => (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item key={item.id} item={item} /> // Set key prop using item's id
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       {/* Pass handleAddItems and other necessary props to Form */}
//       <Form 
//         description={description}
//         setDescription={setDescription}
//         quantity={quantity}
//         setQuantity={setQuantity}
//         handleAddItems={handleAddItems} 
//         handleSubmit={handleSubmit}
//       />
//       {/* Pass items as props to PackingList */}
//       <PackingList items={items} />
//     </div>
//   );
// }

// // New Form component definition
// const Form = ({ description, setDescription, quantity, setQuantity, handleAddItems, handleSubmit }) => (
//   <form className="add-form" onSubmit={handleSubmit}>
//     <h3>What do you need to pack?</h3>
//     <select 
//       value={quantity} 
//       onChange={(e) => setQuantity(Number(e.target.value))} // Convert string to number
//     >
//       <option value={1}>1</option>
//       <option value={2}>2</option>
//       <option value={3}>3</option>
//     </select>
//     <input 
//       type="text" 
//       value={description} // Controlled input
//       onChange={(e) => setDescription(e.target.value)} // Update state on change
//       placeholder="Item..."
//     />
//     <button type="submit">Add</button>
//   </form>
// );

// export default App;

// Activity 9d
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (description) {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setDescription('');
      setQuantity(1);
    }
  };

  const handleTogglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>My Travel List</h1>
      <Form
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onTogglePacked={handleTogglePacked}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

const Form = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  handleAddItem,
}) => (
  <form className="add-form" onSubmit={handleAddItem}>
    <h3>What do you need to pack?</h3>
    <select
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Item..."
    />
    <button type="submit">Add</button>
  </form>
);

const PackingList = ({
  items,
  onTogglePacked,
  onDeleteItem,
}) => (
  <div className="list">
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          style={{ textDecoration: item.packed ? 'line-through' : 'none' }}
        >
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onTogglePacked(item.id)}
          />
          {item.quantity} x {item.description}
          <button type="button" onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default App;