"use client"
import React from 'react'
import Image from 'next/image'
import { Facebook, Mail, MapPin, Calendar, TrendingUp, Briefcase, Award, ExternalLink, Download, ArrowLeft, Users, Heart, Eye, BarChart3, Video } from 'lucide-react'
import Link from 'next/link'
import Avatar_vong from '../../../public/images/avatar_vong.jpg'

export default function ProfilePage() {
  const skills = [
    { name: "Social Media Marketing", level: 98, color: "bg-pink-500" },
    { name: "Content Creation", level: 95, color: "bg-purple-500" },
    { name: "Video Production", level: 92, color: "bg-blue-500" },
    { name: "Brand Strategy", level: 88, color: "bg-amber-500" },
    { name: "Analytics & Insights", level: 85, color: "bg-green-500" },
    { name: "Community Management", level: 90, color: "bg-red-500" },
  ]

  const experiences = [
    {
      role: "Marketing Specialist",
      company: "SKV Group",
      period: "2022 - Present",
      description: "ສ້າງແລະບໍລິຫານ Content Marketing Strategy ໃຫ້ກັບລູກຄ້າຫຼາຍກວ່າ 30+ ບໍລິສັດ",
      achievements: [
        "ສ້າງຊຸມຊົນ TikTok ຫຼາຍກວ່າ 200,000+ ຜູ້ຕິດຕາມ",
        "ສ້າງ Facebook Fanpage ທີ່ມີຜູ້ຕິດຕາມຫຼາຍກວ່າ 150,000+ ຄົນ",
        "ເພີ່ມ Engagement Rate ໃຫ້ລູກຄ້າສະເລ່ຍ 300%"
      ]
    },
    {
      role: "Content Creator",
      company: "Digital Marketing Agency",
      period: "2020 - 2022",
      description: "ສ້າງ Content ສຳລັບ Social Media ແລະ Video Marketing Campaign",
      achievements: [
        "ຜະລິດວິດີໂອທີ່ມີການເບິ່ງຫຼາຍກວ່າ 5M+ ຄັ້ງ",
        "ຮັບລາງວັນ Best Content Creator 2021"
      ]
    }
  ]

  const socialChannels = [
    {
      platform: "TikTok",
      name: "@vongtv",
      followers: "200K+",
      engagement: "8.5%",
      icon: Video,
      color: "from-black to-[#00f2ea]",
      stats: "ວິດີໂອທີ່ມີຄົນເບິ່ງ 10M+ ຄັ້ງ"
    },
    {
      platform: "Facebook",
      name: "ສະໝອງເສດຖີ",
      followers: "150K+",
      engagement: "12.3%",
      icon: Facebook,
      color: "from-blue-600 to-blue-400",
      stats: "Reach ສະເລ່ຍ 500K+ ຕໍ່ອາທິດ"
    }
  ]

  const achievements = [
    {
      title: "Viral Campaign Success",
      description: "ສ້າງ Campaign ທີ່ມີການແຊ່ໃນໂຊຊຽວກວ່າ 10M+ ຄັ້ງ",
      metric: "10M+",
      label: "Total Reach"
    },
    {
      title: "Community Growth",
      description: "ສ້າງຊຸມຊົນທີ່ມີຄວາມຜູກພັນສູງໃນ Social Media",
      metric: "350K+",
      label: "Total Followers"
    },
    {
      title: "Brand Partnerships",
      description: "ຮ່ວມງານກັບແບຣນດ໌ຊັ້ນນຳຫຼາຍກວ່າ 50+ ແບຣນດ໌",
      metric: "50+",
      label: "Brands"
    }
  ]

  const contentShowcase = [
    {
      title: "E-commerce Campaign",
      platform: "TikTok",
      views: "2.5M",
      engagement: "15%",
      description: "Campaign ສົ່ງເສີມຮ້ານຄ້າອອນໄລນ໌ ເພີ່ມຍອດຂາຍ 500%"
    },
    {
      title: "Brand Awareness",
      platform: "Facebook",
      views: "1.8M",
      engagement: "18%",
      description: "ສ້າງຄວາມຮູ້ຈັກແບຣນດ໌ໃໝ່ໃນລະຍະເວລາ 30 ວັນ"
    },
    {
      title: "Product Launch",
      platform: "Multi-Platform",
      views: "3.2M",
      engagement: "20%",
      description: "ເປີດຕົວຜະລິດຕະພັນໃໝ່ດ້ວຍ Content Strategy ທີ່ສົມບູນແບບ"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-blue-500/20">
                <Image
                  src={Avatar_vong}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Social Stats */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-500">350K+</div>
                    <div className="text-sm text-slate-400">Followers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-500">10M+</div>
                    <div className="text-sm text-slate-400">Views</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-500 text-sm font-bold">🔥 Top Marketing Influencer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold">
                ວົງວິໄລ <span className="text-blue-500">ຈູນລະນີ</span>
              </h1>
              
              <p className="text-2xl text-slate-300">Marketing Specialist & Content Creator</p>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                ນັກການຕະຫຼາດທີ່ມີປະສົບການຫຼາຍກວ່າ 4 ປີ ໃນການສ້າງ Content Marketing Strategy 
                ແລະ Social Media Management ມີຄວາມຊ່ຽວຊານໃນການສ້າງ Viral Content ແລະ Community Building
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={18} className="text-blue-500" />
                  <span>Vientiane, Laos</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Briefcase size={18} className="text-blue-500" />
                  <span>SKV Group</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={18} className="text-blue-500" />
                  <span>4+ Years Experience</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://www.tiktok.com/@vongtv" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-black flex items-center justify-center transition-colors group">
                  <Video size={20} className="text-slate-400 group-hover:text-[#00f2ea]" />
                </a>
                <a href="https://www.facebook.com/somsongsedthi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors group">
                  <Facebook size={20} className="text-slate-400 group-hover:text-white" />
                </a>
                <a href="mailto:info@skvgroup.la" className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-green-500 flex items-center justify-center transition-colors group">
                  <Mail size={20} className="text-slate-400 group-hover:text-white" />
                </a>
                <button className="ml-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  <Download size={18} />
                  Download Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Channels */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">My Social Channels</h2>
              <p className="text-slate-400 text-lg">ຊ່ອງທາງໂຊຊຽວທີ່ກຳລັງເຮັດວຽກຢູ່</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialChannels.map((channel, index) => (
                <div key={index} className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${channel.color} rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                          <channel.icon size={28} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{channel.platform}</h3>
                          <p className="text-slate-400">{channel.name}</p>
                        </div>
                      </div>
                      <ExternalLink className="text-slate-500 group-hover:text-blue-500 transition-colors" size={24} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-800 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white mb-1">{channel.followers}</div>
                        <div className="text-sm text-slate-400">Followers</div>
                      </div>
                      <div className="bg-slate-800 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-500 mb-1">{channel.engagement}</div>
                        <div className="text-sm text-slate-400">Engagement</div>
                      </div>
                    </div>

                    <p className="text-slate-400">{channel.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold">Marketing Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold">Key Achievements</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-black text-blue-500">{achievement.metric}</div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <p className="text-slate-400 text-sm">{achievement.description}</p>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-500 font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300">{exp.period}</span>
                  </div>

                  <p className="text-slate-400 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Award size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BarChart3 className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold">Campaign Showcase</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentShowcase.map((content, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video relative bg-gradient-to-br from-blue-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-black text-white">{content.views}</div>
                      <div className="text-sm text-slate-300">Views</div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{content.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-xs rounded-full">{content.engagement}</span>
                    </div>
                    
                    <p className="text-slate-400 text-sm">{content.description}</p>
                    
                    <div className="pt-2">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {content.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Create <span className="text-blue-500">Together</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  ສົນໃຈຮ່ວມງານສ້າງ Content ຫຼື Campaign? ຕິດຕໍ່ມາໄດ້ທຸກເວລາ
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="mailto:info@skvgroup.la" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold flex items-center gap-2 transition-colors">
                    <Mail size={20} />
                    Get in Touch
                  </a>
                  <a href="#" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold flex items-center gap-2 transition-colors">
                    <Download size={20} />
                    Download Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}