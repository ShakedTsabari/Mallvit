// import sigma from 'sigma';
// const Graph = require('graphology');
// const graph = new Graph();

// const storesAyalon1 = {
//     "Victory": { name: "Victory", id: 1, floor: 1 },
//     "Zara": { name: "Zara", id: 2, floor: 1 },
//     "Naaman": { name: "Naaman", id: 3, floor: 1 },
//     "Dinamika": { name: "Dinamika", id: 4, floor: 1 },
//     "Happy Lemmon": { name: "Happy Lemmon", id: 5, floor: 1 },
//     "Avishag Arbel": { name: "Avishag Arbel", id: 6, floor: 1 },
//     "Sweet Time": { name: "Sweet Time", id: 7, floor: 1 },
//     "Pasta Basta": { name: "Pasta Basta", id: 8, floor: 1 },
//     "Held": { name: "Held", id: 9, floor: 1 },
//     "Fly Foot": { name: "Fly Foot", id: 10, floor: 1 },
//     "Roladin": { name: "Roladin", id: 11, floor: 1 },
//     "Vanilia": { name: "Vanilia", id: 12, floor: 1 },
//     "Gras": { name: "Gras", id: 13, floor: 1 },
//     "Erroca": { name: "Erroca", id: 14, floor: 1 },
//     "Nautica": { name: "Nautica", id: 15, floor: 1 },
//     "Bug": { name: "Bug", id: 16, floor: 1 },
//     "Skechers": { name: "Skechers", id: 17, floor: 1 },
//     "Havaianas": { name: "Havaianas", id: 18, floor: 1 },
//     "Smart": { name: "Smart", id: 19, floor: 1 },
//     "Reuma": { name: "Reuma", id: 20, floor: 1 },
//     "Be Unique": { name: "Be Unique", id: 21, floor: 1 },
//     "Nimrod": { name: "Nimrod", id: 22, floor: 1 },
//     "Royalty": { name: "Royalty", id: 23, floor: 1 },
//     "Super Pharm": { name: "Super Pharm", id: 24, floor: 1 },
//     "Studio Pasha": { name: "Studio Pasha", id: 25, floor: 1 },
//     "Lafait": { name: "Lafait", id: 26, floor: 1 },
//     "Aristo Shemesh": { name: "Aristo Shemesh", id: 27, floor: 1 },
//     "Mania": { name: "Mania", id: 28, floor: 1 },
//     "Zip": { name: "Zip", id: 29, floor: 1 },
//     "Estee Lauder": { name: "Estee Lauder", id: 30, floor: 1 },
//     "Carters": { name: "Carters", id: 31, floor: 1 },
//     "Il Makiage": { name: "Il Makiage", id: 32, floor: 1 },
//     "Yanga": { name: "Yanga", id: 33, floor: 1 },
//     "Steve Maden": { name: "Steve Maden", id: 34, floor: 1 },
//     "Corn": { name: "Corn", id: 35, floor: 1 },
//     "Laline": { name: "Laline", id: 36, floor: 1 },
//     "Electrical Warehouses": { name: "Electrical Warehouses", id: 37, floor: 1 },
//     "Mia Inspiration": { name: "Mia Inspiration", id: 38, floor: 1 },
//     "Mac": { name: "Mac", id: 39, floor: 1 },
//     "S Wear": { name: "S Wear", id: 40, floor: 1 },
//     "Timberland": { name: "Timberland", id: 41, floor: 1 },
//     "Honigman": { name: "Honigman", id: 42, floor: 1 },
//     "Macdonalds": { name: "Macdonalds", id: 43, floor: 1 },
//     "Kiko": { name: "Kiko", id: 44, floor: 1 },
//     "Happy Time": { name: "Happy Time", id: 45, floor: 1 },
//     "Impress": { name: "Impress", id: 46, floor: 1 },
//     "Swetch": { name: "Swetch", id: 47, floor: 1 },
//     "Vardinon": { name: "Vardinon", id: 48, floor: 1 },
//     "Nine West": { name: "Nine West", id: 49, floor: 1 },
//     "Lia London": { name: "Lia London", id: 50, floor: 1 },
//     "Sabon": { name: "Sabon", id: 51, floor: 1 },
//     "Itel Optic": { name: "Itel Optic", id: 52, floor: 1 },
//     "Japanika": { name: "Japanika", id: 53, floor: 1 },
//     "Emanuel Wallets": { name: "Emanuel Wallets", id: 54, floor: 1 },
//     "Steimatzky": { name: "Steimatzky", id: 55, floor: 1 },
//     "Golf": { name: "Golf", id: 56, floor: 1 },
//     "Republic": { name: "Republic", id: 57, floor: 1 },
//     "Vans": { name: "Vans", id: 58, floor: 1 },
//     "Top Ten": { name: "Top Ten", id: 59, floor: 1 },
//     "Profile": { name: "Profile", id: 60, floor: 1 },
//     "Gentleman": { name: "Gentleman", id: 61, floor: 1 },
//     "Intima": { name: "Intima", id: 62, floor: 1 },
//     "I Optic": { name: "I Optic", id: 63, floor: 1 },
//     "Miniso": { name: "Miniso", id: 64, floor: 1 },
//     "We Shoes": { name: "We Shoes", id: 65, floor: 1 },
//     "Tzomet Sfarim": { name: "Tzomet Sfarim", id: 66, floor: 1 },
//     "Hamashbir": { name: "Hamashbir", id: 67, floor: 1 },
//     "Reserved": { name: "Reserved", id: 68, floor: 1 },
//     "Mega Toys": { name: "Mega Toys", id: 69, floor: 1 },
//     "ALM": { name: "ALM", id: 70, floor: 1 },
//     "Mango": { name: "Mango", id: 71, floor: 1 },
//     "Aroma": { name: "Aroma", id: 72, floor: 1 },
//     "Opticana": { name: "Opticana", id: 73, floor: 1 },
//     "Partner": { name: "Partner", id: 74, floor: 1 },
//     "Lee Cooper": { name: "Lee Cooper", id: 75, floor: 1 },
//     "Jump": { name: "Jump", id: 76, floor: 1 },
//     "H&M": { name: "H&M", id: 77, floor: 1 },
//     "Rikooshet": { name: "Rikooshet", id: 78, floor: 1 },
//     "Popsi": { name: "Popsi", id: 79, floor: 1 },
//     "Ronen Chen": { name: "Ronen Chen", id: 80, floor: 1 },
//     "Teva Naot": { name: "Teva Naot", id: 81, floor: 1 },
//     "Polgat": { name: "Polgat", id: 82, floor: 1 },
//     "Crazy Line": { name: "Crazy Line", id: 83, floor: 1 },
//     "Pandora": { name: "Pandora", id: 84, floor: 1 },
//     "Tfs": { name: "Tfs", id: 85, floor: 1 },
//     "Golbari": { name: "Golbari", id: 86, floor: 1 },
//     "April": { name: "April", id: 87, floor: 1 },
//     "Hagara": { name: "Hagara", id: 88, floor: 1 },
//     "Kiwi": { name: "Kiwi", id: 89, floor: 1 },
//     "Papaya": { name: "Papaya", id: 90, floor: 1 },
//     "Kravitz": { name: "Kravitz", id: 91, floor: 1 },
//     "Afrodita": { name: "Afrodita", id: 92, floor: 1 },
//     "Cafe Greg": { name: "Cafe Greg", id: 93, floor: 1 },
//     "Delta": { name: "Delta", id: 94, floor: 1 },
//     "Samsung": { name: "Samsung", id: 95, floor: 1 },
//     "Fix": { name: "Fix", id: 96, floor: 1 },
//     "Eve Roshe": { name: "Eve Roshe", id: 97, floor: 1 },
//     "Castro": { name: "Castro", id: 98, floor: 1 },
//     "Samsonate": { name: "Samsonate", id: 99, floor: 1 },
//     "Isteria": { name: "Isteria", id: 100, floor: 1 },
//     "Billabong": { name: "Billabong", id: 101, floor: 1 },
//     "Hoodies": { name: "Hoodies", id: 102, floor: 1 },
//     "Svarovsky": { name: "Svarovsky", id: 103, floor: 1 },
//     "Pull&Bear": { name: "Pull&Bear", id: 104, floor: 1 },
//     "Best Mobile": { name: "Best Mobile", id: 105, floor: 1 },
//     "Carolina Lemke": { name: "Carolina Lemke", id: 106, floor: 1 },
//     "Magnolia": { name: "Magnolia", id: 107, floor: 1 },
//     "Golda": { name: "Golda", id: 108, floor: 1 },
//     "Roni Khan": { name: "Roni Khan", id: 109, floor: 1 },
//     "Dinamica": { name: "Dinamica", id: 110, floor: 1 },
//     "Hot": { name: "Hot", id: 111, floor: 1 },
//     "Sweet Land": { name: "Sweet Land", id: 112, floor: 1 },
//     "Rebar": { name: "Rebar", id: 113, floor: 1 },
//     "Be Digitali": { name: "Be Digitali", id: 114, floor: 1 },
//     "Pelephon": { name: "Pelephon", id: 115, floor: 1 },
//     "Moya": { name: "Moya", id: 116, floor: 1 },
//     "Mifaal Hapais": { name: "Mifaal Hapais", id: 117, floor: 1 },
//     "Elevator": { name: "Elevator", id: 118, floor: 1 },
//     // "Elevator": { name: "Elevator", id: 119, floor: 1 },
//     "Escalator": { name: "Escalator", id: 120, floor: 1 },
// };

// const storesAyalon2 = {

//     "Zara": { name: "Escalator", id: 121, floor: 2 },
//     "Bershka": { name: "Bershka", id: 122, floor: 2 },
//     "Landwer": { name: "Landwer", id: 123, floor: 2 },
//     "Story": { name: "Story", id: 124, floor: 2 },
//     "Super Dry": { name: "Super Dry", id: 125, floor: 2 },
//     "The Childrens Place": { name: "The Childrens Place", id: 126, floor: 2 },
//     "Foot Locker": { name: "Foot Locker", id: 127, floor: 2 },
//     "Aldo": { name: "Aldo", id: 128, floor: 2 },
//     "Renuar": { name: "Renuar", id: 129, floor: 2 },
//     "Celio": { name: "Celio", id: 130, floor: 2 },
//     "Nike": { name: "Nike", id: 131, floor: 2 },
//     "Inter Jeans": { name: "Inter Jeans", id: 132, floor: 2 },
//     "Biga": { name: "Biga", id: 133, floor: 2 },
//     "Minana": { name: "Minana", id: 134, floor: 2 },
//     "Flying Tiger": { name: "Flying Tiger", id: 135, floor: 2 },
//     "Black": { name: "Black", id: 136, floor: 2 },
//     "Yes Planet": { name: "Yes Planet", id: 137, floor: 2 },
//     "Babylon": { name: "Babylon", id: 138, floor: 2 },
//     "H&M": { name: "H&M", id: 139, floor: 2 },
//     "Tous": { name: "Tous", id: 140, floor: 2 },
//     "Desigual": { name: "Desigual", id: 141, floor: 2 },
//     "American Eagle": { name: "American Eagle", id: 142, floor: 2 },
//     "Adidas": { name: "Adidas", id: 143, floor: 2 },
//     "Castro": { name: "Castro", id: 144, floor: 2 },
//     "Fox": { name: "Fox", id: 145, floor: 2 },
//     "Starvarius": {name: "Starvarius", id: 146, floor: 2},
//     "Elevator": { name: "Elevator", id: 147, floor: 2 },
//     // "Elevator": { name: "Elevator", id: 148, floor: 2 },
//     "Escalator": { name: "Escalator", id: 149, floor: 2 },

//   };

//   const connections2 = {
//     "Zara": ["Bershka", "Starvarius"],
//     "Starvarius": ["Elevator", "Landwer", "Zara"],
//     "Bershka":["Zara", "Fox", "Landwer","Elevator"],
//     "Landwer":["Story","Bershka", "Elevator", "Escalator"],
//     "Story":["Landwer", "Super Dry"],
//     "Super Dry":["Foot Locker", "Story","Escalator"],
//     "The Childrens Place":["Foot Locker", "Super Dry", "Escalator"],
//     "Foot Locker":["The Childrens Place", "Aldo"],
//     "Aldo":["Foot Locker", "Renuar"],
//     "Renuar":["Aldo", "Celio"],
//     "Celio":["Nike", "Renuar"],
//     "Nike":["Celio", "Inter Jeans"],
//     "Inter Jeans":["Nike", "Biga", "Tous"],
//     "Biga":["Inter Jeans", "Minana", "Tous"],
//     "Minana":["Biga", "Flying Tiger","Black"],
//     "Flying Tiger":["Minana", "Black"],
//     "Black":["Flying Tiger"],
//     "Yes Planet":["Escalator","Elevator"],
//     "Babylon":["Escalator","Elevator", "Yes Planet"],
//     "H&M":["Black", "Tous", "Babylon"],
//     "Tous":["H&M", "Desigual", "Inter Jeans"],
//     "Desigual":["American Eagle", "Tous"],
//     "American Eagle":["Adidas", "Desigual"],
//     "Adidas":["Castro", "American Eagle"],
//     "Castro":["Adidas", "Fox"],
//     "Fox":["Bershka", "Castro", "Escalator"]
//   };




//   //stores [neighborsInMall [0]]
  
//     // Define malls
//     const malls = [ 
//       {
//         name: "Ayalon Mall",
//         stores: storesAyalon2,
//         numberOfFloors: 2,
//       },
//       {
//         name: "Mall 2",
//         stores: [
//          "stores[1]", // Store B
//             "stores[2]", // Store C
//         ],
//         numberOfFloors: 3,
//       },
//       {
//         name: "Mall 3",
//         stores: [
//          "stores[1]", // Store B
//             "stores[2]", // Store C
//         ],
//         numberOfFloors: 3,
//       },
//       {
//         name: "Mall 4",
//         stores: [
//          "stores[1]", // Store B
//             "stores[2]", // Store C
//         ],
//         numberOfFloors: 3,
//       },
//       {
//         name: "Mall 5",
//         stores: [
//          "stores[1]", // Store B
//             "stores[2]", // Store C
//         ],
//         numberOfFloors: 3,
//       },
//       // Add more malls as needed
//     ];
    
//     // Adding stores as nodes
// // Adjusting the node addition to include x and y coordinates
// Object.keys(storesAyalon2).forEach(storeName => {
//   graph.addNode(storeName, {
//     ...storesAyalon2[storeName],
//     x: Math.random(),
//     y: Math.random(),
//     // You might want to adjust the size and color as well
//     size: 10,
//     color: '#FF0' // Example color, customize as needed
//   });
// });


// // Adding edges based on the connections
// Object.entries(connections2).forEach(([store, neighbors]) => {
//   neighbors.forEach(neighbor => {
//     if (!graph.hasEdge(store, neighbor)) {
//       graph.addEdge(store, neighbor, { weight: 1 });
//     }
//   });
// });

//     // Calculate shortest paths between stores in malls using Dijkstra's algorithm
//     // This part would involve more complex logic and is omitted in this example
//     // Instantiate sigma:
// // const container = document.getElementById('sigma-container');
// // const renderer = new sigma(graph, container);
//     // Export the data
//     export { malls , graph};