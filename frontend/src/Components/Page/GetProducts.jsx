import React, { useState } from 'react';
import { 
  Package, Utensils, Leaf, ChefHat, ShoppingBag, Star, 
  Sparkles, Clock, Users, Award, Shield, TrendingUp,
  CheckCircle, Settings, Zap, Globe, Heart, Factory
} from 'lucide-react';
import phetaLogo from '../../assets/Homeimg/Pheta.png';
import momosImg from '../../assets/Homeimg/momos.png';
import parathaImg from '../../assets/Homeimg/Paratha.png';
import frozenVegImg from '../../assets/Homeimg/FrozenFood.png';

export default function GetProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productCategories = [
    {
      id: 'snacks',
      name: 'Frozen Snacks',
      icon: Package,
      description: 'Convenient ready-to-cook options with authentic flavors',
      color: 'from-[#8B1B1F] to-[#A52A2A]',
      image: momosImg,
      products: [
        {
          name: 'Frozen Veg Momos',
          variants: ['Classic Veg', 'Mushroom', 'Peas & Corn', 'Paneer'],
          description: 'Delicate thin wrapper with fresh vegetable filling, seasoned with proprietary spice mix',
          features: ['No preservatives', 'Partly steamed & blast frozen', '12 months shelf life', 'Free from harmful additives'],
          icon: '🥟'
        },
        {
          name: 'Frozen Chicken Momos',
          variants: ['Classic Chicken', 'Chicken Tikka', 'Chicken Reshmi'],
          description: 'Premium minced chicken with fresh vegetables and aromatic spices',
          features: ['Machine-made consistency', 'High-quality ingredients', 'Natural taste', '25 pieces per pack'],
          icon: '🍗'
        },
        {
          name: 'Schezwan Momos',
          variants: ['Veg Schezwan', 'Chicken Schezwan'],
          description: 'Bold fusion of traditional dumplings with fiery Schezwan flavors',
          features: ['Tangy & spicy', 'Special Schezwan sauce', 'Trendy product', 'Perfect balance of textures'],
          icon: '🌶️'
        },
        {
          name: 'Samosas',
          variants: ['Punjabi', 'Regular'],
          description: 'Iconic Indian snack with crispy golden shell and spiced potato-peas filling',
          features: ['Large size option', 'Robust flavor', 'Quick preparation', 'Traditional recipe'],
          icon: '🥙'
        },
        {
          name: 'French Fries',
          variants: ['Regular Cut', 'Crinkle Cut', 'Wedges'],
          description: 'Premium quality potato fries with perfect golden crisp texture',
          features: ['Grade-A potatoes', 'Pre-blanched', 'Multiple cuts', 'Restaurant quality'],
          icon: '🍟'
        },
        {
          name: 'Patties',
          variants: ['Aloo Tikki', 'Veg Cutlet', 'Chicken Cutlet'],
          description: 'Crispy breaded patties with flavorful vegetable or chicken filling',
          features: ['Crispy coating', 'Fresh ingredients', 'Ready to fry', 'Perfect for burgers'],
          icon: '🍔'
        },
        {
          name: 'Spring Rolls',
          variants: ['Vegetable'],
          description: 'Crispy exterior with flavorful vegetable filling of cabbage, carrots, and beansprouts',
          features: ['Thin delicate pastry', 'Fresh vegetables', 'Golden crispy texture', 'Various sizes available'],
          icon: '🌯'
        },
        {
          name: 'Nuggets',
          variants: ['Chicken'],
          description: 'Tender chicken with crispy golden breadcrumb coating',
          features: ['Good protein source', 'No artificial colors', 'Pre-cooked', 'Multiple cooking methods'],
          icon: '🍗'
        }
      ]
    },
    {
      id: 'breads',
      name: 'Frozen Breads',
      icon: ChefHat,
      description: 'Authentic traditional Indian flatbreads, ready in minutes',
      color: 'from-[#6B1519] to-[#8B1B1F]',
      image: parathaImg,
      products: [
        {
          name: 'Parathas (All Variants)',
          variants: ['Aloo (Potato)', 'Gobi (Cauliflower)', 'Mooli (Radish)', 'Mix Veg', 'Mushroom'],
          description: 'Flaky layered texture with generous flavorful filling, made using traditional recipes',
          features: ['IQF technology', 'Cook in minutes', 'Authentic taste', 'Multiple variants'],
          icon: '🫓'
        }
      ]
    },
    {
      id: 'vegetables',
      name: 'Frozen Vegetables',
      icon: Leaf,
      description: 'Nutritious vegetables frozen at peak freshness',
      color: 'from-[#A52A2A] to-[#6B1519]',
      image: frozenVegImg,
      products: [
        {
          name: 'Frozen Sweet Corn',
          variants: ['Premium'],
          description: 'Sweet and juicy corn kernels frozen at peak ripeness',
          features: ['No additives', 'Year-round availability', 'Crisp texture', 'Versatile ingredient'],
          icon: '🌽'
        },
        {
          name: 'Frozen Mix Veg',
          variants: ['Premium Blend'],
          description: 'Balanced blend of carrots, peas, beans, and cauliflower',
          features: ['Peak freshness', 'Multiple uses', 'Time-saving', 'Nutritious'],
          icon: '🥗'
        },
        {
          name: 'Frozen Green Peas',
          variants: ['Premium'],
          description: 'Sweet and tender peas with vibrant green color',
          features: ['Optimal ripeness', 'Natural taste', 'Versatile', 'Year-round supply'],
          icon: '🫛'
        }
      ]
    }
  ];

  const b2bFeatures = [
    {
      icon: Award,
      title: 'High-Quality Ingredients',
      description: 'Finest ingredients from trusted suppliers with rigorous quality control',
      color: 'from-[#8B1B1F] to-[#A52A2A]'
    },
    {
      icon: Zap,
      title: 'RTE / RTC Convenience',
      description: 'Ready-to-eat and ready-to-cook options for maximum efficiency',
      color: 'from-[#6B1519] to-[#8B1B1F]'
    },
    {
      icon: Globe,
      title: 'Retail & HoReCa',
      description: 'Versatile packaging for both retail and bulk commercial needs',
      color: 'from-[#A52A2A] to-[#6B1519]'
    },
    {
      icon: Settings,
      title: 'Customization Options',
      description: 'Custom formulations, private labels, and bespoke packaging',
      color: 'from-[#8B1B1F] to-[#B83B3F]'
    }
  ];

  const stats = [
    { icon: Package, value: '100+', label: 'Product Variants' },
    { icon: Users, value: '1000+', label: 'B2B Clients' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '100%', label: 'Quality Assured' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }} className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-26 lg:py-50 bg-gradient-to-br from-orange-500 via-red-600 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="inline-block bg-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg shadow-lg">
                <span className="text-orange-600 font-black text-xs sm:text-sm uppercase tracking-wider">🍽️ Premium Food Products</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                <span className="text-white drop-shadow-lg">Our </span>
                <span className="text-yellow-300 drop-shadow-lg">Product Range</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed drop-shadow-md px-2 sm:px-0">
                Strategically diversified portfolio of premium frozen foods for retail and HoReCa sectors
              </p>
            </div>

            {/* Right Image */}
            <div className="relative hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={momosImg} 
                  alt="Delicious Food Products" 
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-black px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl transform rotate-12 text-xs sm:text-sm md:text-base">
                Premium Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-orange-600 font-black px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl text-xs sm:text-sm md:text-base">
                Fresh & Frozen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#8B1B1F] mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Product <span className="text-[#8B1B1F]">Categories</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive range designed to meet the needs of both retail consumers and HoReCa sector, offering convenience, quality, and authentic flavors
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#8B1B1F]'
              }`}
            >
              All Categories
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#8B1B1F]'
                }`}
              >
                <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Cards */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {filteredCategories.map((category, catIndex) => (
              <div key={category.id} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
                {/* Category Header */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-7 md:mb-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1 sm:mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">{category.description}</p>
                  </div>
                  {/* Animated Floating Icons */}
                  <div className="hidden md:block relative w-24 h-16 sm:w-28 sm:h-18 md:w-32 md:h-20 flex-shrink-0">
                    {/* Badge 1 - Award */}
                    <div className={`absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 md:border-4 border-white`}>
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={3} />
                    </div>
                    {/* Badge 2 - Star (Smaller) */}
                    <div className={`absolute bottom-0 right-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 md:border-4 border-white animate-pulse`} style={{ animationDuration: '2s' }}>
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {category.products.map((product, prodIndex) => (
                    <div 
                      key={prodIndex}
                      className="bg-gradient-to-br from-[#FDF2F2] to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-[#FBE5E5] hover:shadow-lg hover:border-[#8B1B1F] transition-all"
                    >
                      {/* Product Icon */}
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4">{product.icon}</div>
                      
                      {/* Product Name */}
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 sm:mb-3 text-gray-900">{product.name}</h3>
                      
                      {/* Variants */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {product.variants.map((variant, vIndex) => (
                            <span 
                              key={vIndex}
                              className="text-[10px] sm:text-xs bg-[#8B1B1F] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold"
                            >
                              {variant}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{product.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-1.5 sm:space-y-2">
                        {product.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-1.5 sm:gap-2">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B1B1F] mt-0.5 flex-shrink-0" />
                            <span className="text-[10px] sm:text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Features Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              B2B <span className="text-[#8B1B1F]">Solutions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Tailored solutions emphasizing quality, convenience, and reliability for business clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {b2bFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#8B1B1F]"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-full mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-[#8B1B1F] transition-colors">{feature.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed B2B Info Box */}
          <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-[#FBE5E5]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6">Why Choose Shinde Foods for Your Business</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div>
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Multi-Plant Production System</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">Robust supply chain with partner factories ensuring consistent quality and supply</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Export-Grade Standards</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">Stringent quality control with FSSAI compliance and international food safety protocols</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Flexible & Scalable</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">From retail packaging to bulk orders, we adapt to your business requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">Customer-Centric Approach</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">Dedicated support with customization options and private label services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

    </div>
  );
}
