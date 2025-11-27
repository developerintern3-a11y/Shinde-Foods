import React from 'react';
import { ShoppingBag, Target, Heart, Award, Shield, Factory, TrendingUp, Users, Star, Leaf, CheckCircle, Globe, Package, Truck } from 'lucide-react';
import phetaLogo from '../../assets/Homeimg/Pheta.png';
import momosImg from '../../assets/Homeimg/momos.png';
import parathaImg from '../../assets/Homeimg/Paratha.png';
import frozenVegImg from '../../assets/Homeimg/FrozenFood.png';

function AboutUs() {
  const coreValues = [
    {
      icon: Award,
      title: "Quality First",
      description: "Unwavering commitment to export-grade standards with multi-stage inspection processes",
      color: "from-[#8B1B1F] to-[#A52A2A]"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparent and ethical dealings fostering trust and mutual respect",
      color: "from-[#6B1519] to-[#8B1B1F]"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Flexible solutions and customized packaging for client success",
      color: "from-[#A52A2A] to-[#6B1519]"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously expanding product range and improving processes",
      color: "from-[#8B1B1F] to-[#B83B3F]"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality, timely deliveries, and professional service",
      color: "from-[#6B1519] to-[#A52A2A]"
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Sustainable practices and eco-friendly packaging options",
      color: "from-[#A52A2A] to-[#8B1B1F]"
    }
  ];

  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      description: "Established as Proprietorship Firm in Pune, Maharashtra on December 15, 1990"
    },
    {
      year: "2000s",
      title: "Product Expansion",
      description: "Strategic shift to diverse frozen foods including momos, parathas, and vegetables"
    },
    {
      year: "2010s",
      title: "Multi-Plant System",
      description: "Developed robust multi-plant production system for scalability and consistency"
    },
    {
      year: "Present",
      title: "Global Presence",
      description: "Recognized merchant exporter with growing international presence and private label services"
    }
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "1000+", label: "Business Partners" },
    { icon: Package, value: "100+", label: "Product Variants" },
    { icon: Star, value: "100%", label: "Quality Guaranteed" }
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }} className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-17 bg-gradient-to-br from-[#FDF2F2] via-white to-[#FBE5E5] overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="text-center mb-0">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={phetaLogo} alt="Shinde Foods Logo" className="h-20 w-auto object-contain" />
            </div>
            <h1 className="text-5xl md:text-5xl font-black text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">Shinde Foods</span>
            </h1>
            <p className=" text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A dynamic merchant exporter specializing in premium quality frozen foods, serving domestic and international markets since 1990
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl font-black text-[#8B1B1F] mb-2">{stat.value}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Company <span className="text-[#8B1B1F]">Overview</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6 mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
              <div className="w-3 h-3 bg-[#8B1B1F] rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
              <div className="w-3 h-3 bg-[#A52A2A] rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Introduction to Shinde Foods</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-justify">
                  Shinde Foods is a dynamic and forward-thinking merchant exporter specializing in premium quality frozen foods, strategically headquartered in Pune, Maharashtra. Established as a Proprietorship Firm on <span className="font-bold text-[#8B1B1F]">December 15, 1990</span>, the company has rapidly positioned itself as a reliable partner for both domestic and international markets.
                </p>
                <p className="text-justify">
                  Our core business revolves around sourcing and supplying a diverse range of <span className="font-bold">Ready-to-Eat (RTE)</span> and <span className="font-bold">Ready-to-Cook (RTC)</span> frozen products, meticulously manufactured in collaboration with our network of partner factories. This unique multi-plant production system allows us to maintain a robust supply chain and cater to a wide array of client requirements, from retail packaging to bulk orders for the HoReCa (Hotel, Restaurant, and Catering) sector.
                </p>
                <p className="text-justify">
                  As a merchant exporter, we act as a crucial link between our partner manufacturers and the global market, leveraging our expertise in international trade, logistics, and quality assurance to facilitate seamless transactions. Our dedication to export-grade hygiene and quality-focused manufacturing processes is unwavering, forming the bedrock of our brand identity and the trust our clients place in us.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src={momosImg} alt="Frozen Momos" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
              <img src={parathaImg} alt="Frozen Parathas" className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8" />
              <img src={frozenVegImg} alt="Frozen Vegetables" className="w-full h-64 object-cover rounded-2xl shadow-lg -mt-8" />
              <img src={momosImg} alt="Products" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>

          {/* Product Portfolio */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Our Product Portfolio</h3>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              Our product portfolio is a testament to our deep understanding of market trends and consumer preferences. We offer a comprehensive selection of frozen foods, including popular items like <span className="font-bold text-[#8B1B1F]">Frozen Veg Momos, Frozen Chicken Momos</span>, a variety of <span className="font-bold text-[#8B1B1F]">Parathas, Samosas, Spring Rolls, and Nuggets</span>, alongside essential frozen vegetables such as <span className="font-bold text-[#8B1B1F]">Sweet Corn, Mixed Vegetables, and Green Peas</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Quality Ingredients</h4>
                <p className="text-gray-600 text-sm">Meticulous attention from raw material selection to final packaging</p>
              </div>
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Global Standards</h4>
                <p className="text-gray-600 text-sm">Export-grade hygiene and quality-focused manufacturing</p>
              </div>
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A52A2A] to-[#6B1519] rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Reliable Partner</h4>
                <p className="text-gray-600 text-sm">Strategic partner dedicated to client business success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                To be a leading provider of premium, export-quality frozen foods that combine authentic taste with unparalleled convenience. We are dedicated to sourcing and delivering products that meet the highest international standards of food safety and hygiene, ensuring the complete satisfaction of our B2B clients and their end consumers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Build long-lasting partnerships through reliable service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Address unique needs of retail and HoReCa sectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Foster culture of culinary excellence globally</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                To establish Shinde Foods as a globally recognized and trusted brand in the frozen food export industry. We aspire to be the preferred partner for international buyers seeking a diverse and premium range of Indian frozen food products, setting new benchmarks for excellence in the sector.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuously innovate product offerings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Expand global reach with sustainable practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Drive growth of Indian culinary traditions worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our Core <span className="text-[#8B1B1F]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Values that guide our every decision and action in delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#8B1B1F]"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#8B1B1F] transition-colors">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#8B1B1F]">Story</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A journey of growth, dedication, and commitment to excellence since 1990
            </p>
          </div>

          {/* Story Introduction */}
          <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5] mb-12">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Founding and History</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-justify">
                Shinde Foods was founded in Pune, Maharashtra, on <span className="font-bold text-[#8B1B1F]">December 15, 1990</span>, as a Proprietorship Firm with a clear vision to bridge the gap between India's rich culinary heritage and the global demand for high-quality, convenient food products. The company was established with the primary activity of manufacturing and exporting a variety of food products.
              </p>
              <p className="text-justify">
                From its inception, the founders recognized the immense potential of the frozen food market and the growing need for reliable merchant exporters who could guarantee quality and consistency. The strategic location in Pune, a major industrial and logistics hub in Maharashtra, provided the ideal foundation for building a business focused on both domestic distribution and international trade.
              </p>
              <p className="text-justify">
                The company's journey has been marked by a steadfast commitment to its core principles of quality, hygiene, and customer satisfaction. By leveraging a multi-plant production system, Shinde Foods was able to offer a diverse and resilient product line, mitigating risks associated with single-source manufacturing.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FBE5E5] hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-black text-[#8B1B1F] mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-black text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-[#8B1B1F] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#8B1B1F]">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals driving excellence at every level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Leadership */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Leadership Profiles</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                The leadership at Shinde Foods is composed of experienced professionals with wealth of knowledge from food processing, export, and logistics industries. The team's expertise in merchant exporting is evident in our robust supply chain and ability to meet diverse global clientele needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic vision and operational excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Expertise in international food safety standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Customer-centric philosophy and innovation</span>
                </li>
              </ul>
            </div>

            {/* Production Teams */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center shadow-lg">
                  <Factory className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Production Teams</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                Our highly skilled production teams comprise trained food technologists, quality control inspectors, and production supervisors. They bring deep understanding of food processing techniques and safety protocols to every manufacturing stage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-stage inspection process expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">HACCP and GMP compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B1B1F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuous training on latest advancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
}

export default AboutUs;