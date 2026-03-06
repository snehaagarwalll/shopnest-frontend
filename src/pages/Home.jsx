import { useRef } from "react";
import ProductCard from "../components/ProductCard";
import { createOrder } from "../api/orderApi";

export default function Home() {

  const electronicsRef = useRef(null);
  const fashionRef = useRef(null);
  const homeRef = useRef(null);

  const scroll = (ref, direction) => {
    const scrollAmount = 320;
    if (direction === "left") {
      ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleBuyNow = async (product) => {
    try {
      await createOrder({
        items: [
          {
            productId: product.id,
            quantity: 1,
            price: product.price,
            productName: product.name,
            productImage: product.image,
          },
        ],
      });

      alert("Order created successfully");
    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Failed to create order");
    }
  };

  const electronics = [
    {
      id: 1,
      name: "Smart Watch Series X",
      price: 4999,
      description: "AMOLED display with advanced health tracking.",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26"
    },
    {
      id: 2,
      name: "Wireless Earbuds Pro",
      price: 2999,
      description: "Crystal clear audio with active noise cancellation.",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
    },
    {
      id: 3,
      name: "Gaming Monitor 24\"",
      price: 12999,
      description: "144Hz refresh rate for smooth gaming.",
      image: "https://images.unsplash.com/photo-1696710257827-75e2e5954059"
    },
    {
      id: 4,
      name: "Noise Cancelling Headphones",
      price: 5999,
      description: "Premium over-ear headphones with deep bass.",
      image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 2499,
      description: "Portable speaker with powerful stereo sound.",
      image: "https://plus.unsplash.com/premium_photo-1677093905921-617951e10e90"
    },
    {
      id: 6,
      name: "Latest Smartphone",
      price: 15999,
      description: "High performance smartphone with stunning camera.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 7,
      name: "Tablet Pro 10\"",
      price: 11999,
      description: "Perfect tablet for work and entertainment.",
      image: "https://images.unsplash.com/photo-1628591459313-a64214c5bfac"
    }
  ];

  const fashion = [
    {
      id: 8,
      name: "Red Party Dress",
      price: 3999,
      description: "Elegant evening dress for special occasions.",
      image: "https://images.unsplash.com/photo-1768696082354-b87c9e91b54d"
    },
    {
      id: 9,
      name: "Leather Handbag",
      price: 2999,
      description: "Premium leather handbag with stylish design.",
      image: "https://images.unsplash.com/photo-1691480250099-a63081ecfcb8"
    },
    {
      id: 10,
      name: "Stylish Heels",
      price: 1999,
      description: "Comfortable heels with modern look.",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
    },
    {
      id: 11,
      name: "Classic Denim Jacket",
      price: 4499,
      description: "Trendy denim jacket for all seasons.",
      image: "https://images.unsplash.com/photo-1555583743-991174c11425"
    },
    {
      id: 12,
      name: "Trendy Sunglasses",
      price: 999,
      description: "UV protected stylish sunglasses.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    },
    {
      id: 13,
      name: "Women’s Tote Bag",
      price: 2499,
      description: "Spacious tote bag for daily use.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },
    {
      id: 14,
      name: "Casual Sneakers",
      price: 2799,
      description: "Comfortable sneakers for everyday wear.",
      image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    }
  ];

  const homeLiving = [
    {
      id: 15,
      name: "Modern Table Lamp",
      price: 1499,
      description: "Minimalist lamp for modern interiors.",
      image: "https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5"
    },
    {
      id: 16,
      name: "Wooden Wall Shelf",
      price: 2999,
      description: "Elegant wooden shelf for home decor.",
      image: "https://plus.unsplash.com/premium_photo-1726869746318-017138da49b7"
    },
    {
      id: 17,
      name: "Luxury Sofa Chair",
      price: 18999,
      description: "Premium lounge chair with superior comfort.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    },
    {
      id: 18,
      name: "Indoor Plant Set",
      price: 999,
      description: "Beautiful indoor plants for decoration.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 19,
      name: "Designer Wall Clock",
      price: 1999,
      description: "Modern wall clock to enhance your living room.",
      image: "https://images.unsplash.com/photo-1558603655-491ecfa8324f"
    },
    {
      id: 20,
      name: "Dining Table Set",
      price: 25999,
      description: "Stylish dining set for family gatherings.",
      image: "https://plus.unsplash.com/premium_photo-1673214881759-4bd60b76acae"
    },
    {
      id: 21,
      name: "Soft Bed Comforter",
      price: 3499,
      description: "Ultra-soft comforter for cozy sleep.",
      image: "https://images.unsplash.com/photo-1712940806345-ea8ce290956e"
    }
  ];

  const CategorySection = ({ title, products, reference }) => (
    <div className="relative mb-14">

      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <button
        onClick={() => scroll(reference, "left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10
                   w-10 h-10 bg-white rounded-full shadow-md
                   flex items-center justify-center
                   hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => scroll(reference, "right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10
                   w-10 h-10 bg-white rounded-full shadow-md
                   flex items-center justify-center
                   hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        ref={reference}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[260px] flex-shrink-0">
            <ProductCard
              product={product}
              onBuyNow={() => handleBuyNow(product)}
            />
          </div>
        ))}
      </div>

    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen px-12 py-8 space-y-14">

      <CategorySection
        title="Electronics"
        products={electronics}
        reference={electronicsRef}
      />

      <CategorySection
        title="Fashion"
        products={fashion}
        reference={fashionRef}
      />

      <CategorySection
        title="Home & Living"
        products={homeLiving}
        reference={homeRef}
      />

    </div>
  );
}