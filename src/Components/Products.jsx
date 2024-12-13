import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      image: '/assets/products/pc/produit1.png',
      title: 'MSI MAG Infinite S3 13NUD-1017FR PC Gaming',
      description: "Processeur Intel Core i7-13700F, RTX 4060 Ti, 16Go RAM DDR5, 1To SSD PCIe 3.0 NVMe, Bloc d'Alimentation 80 PLUS Bronze, Wi-Fi 6E - Windows 11 Famille",
      price: '3099DT',
      delivery: 'Free delivery on this item.',
      stock: 'In stock: 3 items.',
    },
    {
      id: 2,
      image: '/assets/products/pc/produit2.png',
      title: 'Dell G15 5530 Ordinateur Portable Gaming 15.6" FHD 120Hz',
      description: "Processeur Intel Core i5-13450HX, NVIDIA GeForce RTX 3050 6Go, RAM 16Go, SSD 512Go, Windows 11 Home, Clavier rétroéclairé AZERTY Français.",
      price: '2259DT',
      delivery: 'Delivery: 20DT',
      stock: 'In stock: 4 items.',
    },
    {
      id: 3,
      image: '/assets/products/pc/produit3.png',
      title: 'Asus TUF Gaming A15-TUF506NF-HN019 15.6 Pouces FHD 144Hz PC Portable',
      description: '(AMD Ryzen 5 7535HS Processor, 16GB DDR5 RAM, 1TB PCIe 4.0 NVMe SSD, NVIDIA GeForce RTX 2050, SANS OS ) Clavier AZERTY..',
      price: '1890DT',
      delivery: 'Free delivery on this item.',
      stock: 'In stock: 15 items.',
    },
    {
        id: 4,
        image: '/assets/products/pc/produit4.png',
        title: 'ASUS ROG STRIX-G16-G614JI-N3082W PC Portable Gamer 16" FHD+ 165Hz',
        description: 'Intel Core i7-13650HX RTX 4070 8 GB TGP 140W 32Go RAM DDR5 1TO SSD MVMe M.2 PCIe4, Windows 11Home Clavier AZERTY Rétroéclaire RGB.',
        price: '3199DT',
        delivery: 'Free delivery on this item.',
        stock: 'In stock: 10 items.',
      },
      {
        id: 5,
        image: '/assets/products/pc/produit5.png',
        title: 'Lenovo LOQ 15IRH8 - Ordinateur Portable 15.6 FHD 144Hz',
        description: "(Intel Core i7-13620H, RAM 16Go, SSD 512Go, NVIDIA RTX 4060 8Go, Sans Système d'Exploitation) Clavier rétroéclairé AZERTY - Gris.",
        price: '3180DT',
        delivery: 'Free delivery on this item.',
        stock: 'In stock: 6 items.',
      },
      {
        id: 6,
        image: '/assets/products/flash/1.png',
        title: 'Philips Moon Édition Ultra Speed',
        description: "clé USB 3.1 128 Go pour PC, Ordinateur Portable, Stockage de données informatiques, Vitesse de Lecture jusqu'à 180 Mo/s, Aluminium, Porte-clé",
        price: '50DT',
        delivery: 'Delivery: 20DT',
        stock: 'In stock: 30 items.',
      },
      {
        id: 7,
        image: '/assets/products/flash/2.png',
        title: 'HP x911w',
        description: "1 To Clé USB SSD 3.2, Vitesse de Lecture de 500 Mo/s, Vitesse d'écriture de 450 Mo/s, Design Push and Pull.",
        price: '250DT',
        delivery: 'Delivery: 20DT',
        stock: 'In stock: 12 items.',
      },
      {
        id: 8,
        image: '/assets/products/flash/3.png',
        title: 'SanDisk Ultra Dual Drive Go',
        description: "128 Go Flash Drive, Clé USB 3.2, jusqu'à 400 Mo/s, Connecteurs USB Type-C et USB Type-A réversibles, Android smartphone stockage, Tablettes, Mac et PC, Noir.",
        price: '70DT',
        delivery: 'Delivery: 20DT',
        stock: 'In stock: 15 items.',
      },
      {
          id: 9,
          image: '/assets/products/flash/4.png',
          title: 'Mémoire USB 2 Go de mémoire flash',
          description: 'USB Bracelet rotatif Clé USB 2.0 Conception pratique.',
          price: '10DT',
          delivery: 'Delivery: 20DT',
          stock: 'In stock: 45 items.',
        },
        {
          id: 10,
          image: '/assets/products/flash/5.png',
          title: 'SanDisk Ultra',
          description: "32 GB USB Flash Drive USB 3.0 Up to 130 MB/s Read - Twin Pack, Red/Blue.",
          price: '35DT',
          delivery: 'Delivery: 20DT',
          stock: 'In stock: 16 items.',
        },
////////////////////////////////////////////////////////////////////////////////////////

        {
            id: 11,
            image: '/assets/products/disc/d1.png',
            title: 'Samsung SSD Externe T7',
            description: "1 To, Rouge, MU-PC1T0R/WW, Vitesse de lecture/écriture jusqu'à 1050 Mo/s, Sécurisation par mot de passe.",
            price: '450DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 12,
            image: '/assets/products/disc/d2.png',
            title: 'Crucial X9',
            description: "1To Disque SSD Externe Portable, Jusqu’à 1050Mo/s, Compatible avec PC, Mac, PlayStation et Xbox, USB-C 3.2 - CT1000X9SSD902.",
            price: '287DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 13,
            image: '/assets/products/disc/d3.png',
            title: 'Storite Disque Dur Externe Portable',
            description: "100 Go avec USB 2.0, Transfert de données Ultra Rapide, Disque Dur Compact Compatible avec PC, Mac, Windows, Ordinateur de Bureau (Noir).",
            price: '95DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 16 items.',
          },
          {
            id: 14,
            image: '/assets/products/disc/d4.png',
            title: 'Transcend 2 To StoreJet 25 M3C - 2.5',
            description: "Disque dur externe Anti-choc - Double connectique Type A et Type C - TS2TSJ25M3C.",
            price: '250DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 15,
            image: '/assets/products/disc/d5.png',
            title: 'Ezekers Disque dur externe portable',
            description: "1 To avec sac  USB C & USB 3.0 pour PC, Mac, Playstation, Samsung et iPhone 15/16 Series, TV, Xbox et Wii U  Double connecteur  Ultra rapide.",
            price: '135DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 8 items.',
          },

          {
            id: 16,
            image: '/assets/products/kit/k1.png',
            title: 'JBL Live 770NC',
            description: "Casque circum-auriculaire, Réduction de Bruit Adaptative, Smart Ambient, jusqu'à 65 heures d'autonomie, bleu.",
            price: '450DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 5 items.',
          },
          {
            id: 17,
            image: '/assets/products/kit/k2.png',
            title: 'iDIGMALL',
            description: "Casque Bluetooth avec microphone amovible, casque sans fil multi-points avec microphone antibruit DSP pour téléphone, PC, ordinateur portable, casque à oreilles ouvertes confortable et léger.",
            price: '110dt',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 18,
            image: '/assets/products/kit/k3.png',
            title: 'Sony WH-CH720N',
            description: "Casque Bluetooth sans Fil à réduction de Bruit - Micro intégré - jusqu'à 35 Heures d'autonomie et Charge Rapide - Noir.",
            price: '79DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 19,
            image: '/assets/products/kit/k4.png',
            title: 'Marshall Minor III',
            description: "Bluetooth Ecouteurs intra-auriculaires véritablement sans fil, Casque d'écoute - Noir.",
            price: '80DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 20,
            image: '/assets/products/kit/k5.png',
            title: 'Jabra Elite 4',
            description: " Écouteurs sans Fil Bluetooth à réduction de Bruit Active - Discrets et Confortables, Lecture Tap Spotify, Google Fast Pair, Microsoft Swift Pair et Bluetooth Multipoint - Gris foncé.",
            price: '50DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 8 items.',
          },

          {
            id: 21,
            image: '/assets/products/souris/s1.png',
            title: 'Basics Souris',
            description: "Souris Optique USB à 3 Boutons pour Windows et Mac OS X Noir.",
            price: '8DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 50 items.',
          },
          {
            id: 22,
            image: '/assets/products/souris/s2.png',
            title: 'Glorious Gaming Model',
            description: "Souris de jeu filaire - 67 g, design super léger en nid d’abeille, RGB, Capteur Pixart 3360, Switches Omron, Ambidextre - Noir brillant.",
            price: '150DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 10 items.',
          },
          {
            id: 23,
            image: '/assets/products/souris/s3.png',
            title: 'SteelSeries Rival 3',
            description: "USB Souris gaming - Capteur Optique TrueMove Core de 8500 CPI - 6 Boutons Programmables - Boutons en Gâchettes Scindées, Noir.",
            price: '70DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 15 items.',
          },
          {
            id: 24,
            image: '/assets/products/souris/s4.png',
            title: 'Ewent EW3300',
            description: "Souris Optique Filaire USB 3 Boutons, 1000 DPI, Design Ergonomique, Ambidextre, PC/Mac/Laptop/Chromebook - Noir.",
            price: '15DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 20 items.',
          },
          {
            id: 25,
            image: '/assets/products/souris/s5.png',
            title: 'Trust Gaming GXT 110 Felox',
            description: "Souris Gamer sans Fil Rechargeable, 80 Heures d'autonomie, 800-4800 PPP, Éclairage LED Multicolore, 6 Boutons, Souris Gaming pour PC, Ordinateur, Windows – Noir.",
            price: '60DT',
            delivery: 'Delivery: 20DT',
            stock: 'In stock: 18 items.',
          },
    // Add more products up to 25
  ];

  // Generate 25 product cards
  while (products.length < 25) {
    const id = products.length + 1;
    products.push({
      id,
      image: `/assets/product${id}.jpg`,
      title: `Product ${id}`,
      description: 'Placeholder description for this product.',
      price: `€${(Math.random() * 900 + 100).toFixed(2)}`,
      delivery: 'Free delivery on this item.',
      stock: `In stock: ${Math.floor(Math.random() * 20) + 1} items.`,
    });
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-delivery">{product.delivery}</p>
            <p className="product-stock">{product.stock}</p>
            <button className="add-to-cart-btn">Ajouter au panier</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
