import React, { useState } from 'react';
import { Leaf, Shield, Award, Sparkles, Package, UtensilsCrossed, Apple, X } from 'lucide-react';
import momosImg from '../../assets/Homeimg/momos.png';
import parathaImg from '../../assets/Homeimg/Paratha.png';
import frozenVegetableImg from '../../assets/Homeimg/FrozenFood.png';

// Data Structure for the Product Categories
const productCategories = [
  {
    id: 1,
    name: "Momos",
    subtitle: "Veg & Non-Veg Varieties",
    icon: Package,
    image: momosImg,
    badge: "READY IN 15 MIN",
    description: "Authentic steamed dumplings filled with fresh vegetables and premium meats",
    gradient: "from-[#8B1B1F] to-[#A52A2A]",
    detailedContent: {
      title: "Frozen Momos (Veg & Chicken)",
      content: `Frozen momos, both vegetarian and chicken, are a flagship product for Shinde Foods, representing the company's commitment to quality, flavor, and convenience. These delightful dumplings are a popular snack and appetizer, and Shinde Foods has perfected the art of creating authentic, restaurant-quality momos that are ready to cook and enjoy.`,
      keyHighlights: [
        {
          icon: "🥟",
          title: "Vegetarian Momos",
          description: "Fresh vegetables with aromatic spices blend"
        },
        {
          icon: "🍗",
          title: "Chicken Momos",
          description: "Tender chicken with savory spice mix"
        },
        {
          icon: "🌶️",
          title: "Multiple Variants",
          description: "Steamed, fried, and Schezwan flavors"
        },
        {
          icon: "❄️",
          title: "IQF Technology",
          description: "Individually quick-frozen for freshness"
        },
        {
          icon: "🏭",
          title: "State-of-Art Facilities",
          description: "Strict hygiene and quality standards"
        },
        {
          icon: "⚡",
          title: "Ready to Cook",
          description: "Convenient for retailers and restaurants"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Parathas",
    subtitle: "All Authentic Variants",
    icon: UtensilsCrossed,
    image: parathaImg,
    badge: "AUTHENTIC TASTE",
    description: "Traditional Indian flatbreads with delicious fillings - aloo, gobhi, mix veg and more",
    gradient: "from-[#6B1519] to-[#8B1B1F]",
    detailedContent: {
      title: "Parathas (All Variants)",
      content: `Parathas are a cornerstone of Indian cuisine, and Shinde Foods offers a wide and enticing range of these flaky, stuffed flatbreads. Each paratha is meticulously prepared using high-quality ingredients and traditional recipes, ensuring an authentic taste and texture that is reminiscent of home-cooked food. Pre-cooked and flash-frozen for convenience, they can be easily heated on a tawa or in a microwave.`,
      keyHighlights: [
        {
          icon: "🥔",
          title: "Aloo Paratha",
          description: "Classic spiced potato filling"
        },
        {
          icon: "🥦",
          title: "Gobi Paratha",
          description: "Nutritious seasoned cauliflower"
        },
        {
          icon: "🥕",
          title: "Mix Veg & Mooli",
          description: "Diverse vegetable options including radish"
        },
        {
          icon: "🍄",
          title: "Innovative Variants",
          description: "Mushroom and other creative options"
        },
        {
          icon: "🔥",
          title: "Easy Preparation",
          description: "Heat on tawa or microwave"
        },
        {
          icon: "🏠",
          title: "Home-Cooked Taste",
          description: "Traditional authentic recipe"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Frozen Vegetables",
    subtitle: "Premium Quality",
    icon: Apple,
    image: frozenVegetableImg,
    badge: "FARM FRESH",
    description: "Flash-frozen vegetables retaining peak freshness, nutrients and natural flavors",
    gradient: "from-[#A52A2A] to-[#6B1519]",
    detailedContent: {
      title: "Frozen Vegetables",
      content: `The frozen vegetables category is a key offering from Shinde Foods, providing a range of essential, high-quality ingredients that are a staple in kitchens worldwide. All vegetables are processed using the latest IQF technology, preserving their natural color, flavor, and nutritional value. Sourced from trusted farms with rigorous quality checks, they are packaged in convenient, food-grade bags for both home cooks and professional chefs.`,
      keyHighlights: [
        {
          icon: "🌽",
          title: "Sweet Corn",
          description: "Frozen at peak sweetness for crisp texture"
        },
        {
          icon: "🥗",
          title: "Mixed Vegetables",
          description: "Nutritious blend of carrots, peas, corn, beans"
        },
        {
          icon: "🫛",
          title: "Green Peas",
          description: "Versatile ingredient for various cuisines"
        },
        {
          icon: "❄️",
          title: "IQF Technology",
          description: "Preserves color, flavor, and nutrition"
        },
        {
          icon: "🚜",
          title: "Trusted Farms",
          description: "Sourced with rigorous quality checks"
        },
        {
          icon: "📦",
          title: "Long Shelf Life",
          description: "Food-grade packaging for convenience"
        }
      ]
    }
  },
];

// Feature icons
const features = [
  { icon: Leaf, label: "100% Vegetarian Options", color: "text-green-600" },
  { icon: Shield, label: "Export Grade Quality", color: "text-[#A52A2A]" },
  { icon: Award, label: "Premium Standards", color: "text-[#8B1B1F]" },
  { icon: Sparkles, label: "Hygienically Processed", color: "text-[#B83B3F]" },
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleExploreClick = (product) => {
    if (product.detailedContent) {
      setSelectedProduct(product);
    }
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-18">
          <h2 className="text-4xl md:text-4xl font-black mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
              Product Category
            </span>
            
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
            <div className="w-3 h-3 bg-[#8B1B1F] rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
            <div className="w-3 h-3 bg-[#A52A2A] rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-18">
          {productCategories.map((product, index) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-[#FDF2F2] p-1 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                
                {/* Inner Card */}
                <div className="bg-white rounded-3xl overflow-hidden">
                  
                  {/* Icon Container */}
                  <div className="relative h-72 flex items-center justify-center bg-gradient-to-br from-[#FDF2F2] to-white overflow-hidden">
                    
                    {/* Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-[#8B1B1F] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#A52A2A]/20 to-transparent rounded-br-full"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#6B1519]/20 to-transparent rounded-tl-full"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-black mb-1 text-gray-900 group-hover:text-[#8B1B1F] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[#A52A2A] text-sm font-bold uppercase tracking-wide mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div 
                      onClick={() => handleExploreClick(product)}
                      className="mt-4 flex items-center justify-center text-[#8B1B1F] font-bold group-hover:text-[#A52A2A] transition-colors cursor-pointer"
                    >
                      <span className="text-sm">Explore More</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="bg-gradient-to-r from-[#FDF2F2] via-[#FBE5E5] to-[#FDF2F2] rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-white rounded-full p-4 shadow-md">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={2.5} />
                </div>
                <p className="text-gray-800 font-bold text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Detailed Product Info */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
              {/* Left Side - Image */}
              <div className="md:w-1/2 bg-gradient-to-br from-[#FDF2F2] to-white p-12 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 p-10 overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block bg-[#8B1B1F] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
                    {selectedProduct.badge}
                  </span>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">
                    {selectedProduct.detailedContent.title}
                  </h2>
                  <p className="text-[#A52A2A] text-sm font-bold uppercase tracking-wide mb-6">
                    {selectedProduct.subtitle}
                  </p>
                </div>

                {/* Main Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-base leading-relaxed text-justify">
                    {selectedProduct.detailedContent.content}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#8B1B1F] to-[#A52A2A] mr-3 rounded-full"></span>
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProduct.detailedContent.keyHighlights.map((highlight, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-[#FDF2F2] to-white border border-[#FBE5E5] rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{highlight.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{highlight.title}</h4>
                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;