"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import {
  ArrowDown,
  Sun,
  Moon,
  Award,
  Users,
  Calendar,
  MapPin,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Rocket,
  Leaf,
  FileText,
  Network,
  Briefcase,
  MessageSquare,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  Star,
  Globe,
  Zap,
  Trophy,
  Gift,
  Clock,
  Heart,
  Bookmark,
  Mic,
  PenTool,
  Target,
  TrendingUp,
  User,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

const RotatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-amber-500/20 opacity-30 blur-[120px]"></div>
    </div>
  )
}

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-500"
          initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
          animate={{
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            transition: { duration: 10 + Math.random() * 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />
      ))}
    </div>
  )
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-purple-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"
      style={{ y }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-amber-900/30 mix-blend-overlay z-20" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl mx-auto"
      >
        <Badge className="mb-4 text-lg py-2 px-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700">
          2025 Edition
        </Badge>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Golden</span>{" "}
          Conference Awards
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Honoring Excellence in Innovation and Research
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-none"
          >
            <Star className="mr-2 h-4 w-4" /> Register Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Trophy className="mr-2 h-4 w-4" /> Submit Nomination
          </Button>
        </motion.div>
        <motion.div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="h-5 w-5 text-amber-400" />
            <span>October 27-28, 2025</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-amber-400"></div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span>Prague, Czech Republic</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="h-8 w-8 text-amber-400" />
      </motion.div>
    </motion.section>
  )
}

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300">
            About
          </Badge>
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
            About the Golden Conference Awards
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            The Golden Conference Awards bring together pioneers, thought leaders, and young innovators from around the
            globe. It serves as a platform to acknowledge outstanding achievements and to provide an opportunity for
            collaboration, learning, and networking with industry experts.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            With categories spanning a wide array of disciplines, these awards are a testament to excellence,
            creativity, and leadership in pushing scientific and technological boundaries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4 mb-4 dark:from-purple-900/30 dark:to-purple-800/30">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">100+ Distinguished Speakers</h3>
                <p className="text-muted-foreground text-center">
                  Learn from the brightest minds in innovation and research
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4 mb-4 dark:from-purple-900/30 dark:to-purple-800/30">
                  <Rocket className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">20 Innovative Start-Ups</h3>
                <p className="text-muted-foreground text-center">Discover groundbreaking technologies and solutions</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4 mb-4 dark:from-purple-900/30 dark:to-purple-800/30">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">15+ Workshops & Training</h3>
                <p className="text-muted-foreground text-center">
                  Enhance your skills with hands-on professional development
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface AwardCardProps {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

const AwardCard = ({ title, description, icon: Icon, color }: AwardCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
      <div
        className={`absolute inset-0 ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
      <CardHeader>
        <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:from-amber-900/30 dark:to-amber-800/30">
          <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

const AwardsSection = () => {
  const awards = [
    {
      title: "Innovator of the Year Award",
      description:
        "Recognizing an individual or team that has demonstrated excellence in technological innovation and development.",
      icon: Lightbulb,
      color: "bg-amber-500",
    },
    {
      title: "Young Researcher Award",
      description: "Awarded to early-career researchers who have made significant contributions to their fields.",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
    {
      title: "Lifetime Achievement Award",
      description:
        "Celebrating a lifetime of dedication, groundbreaking research, and contributions to the scientific community.",
      icon: Award,
      color: "bg-blue-500",
    },
    {
      title: "Best Startup Award",
      description: "Honoring a startup company that has shown immense potential, innovation, and growth.",
      icon: Rocket,
      color: "bg-green-500",
    },
    {
      title: "Sustainability Award",
      description: "For groundbreaking work that promotes sustainability and environmentally-conscious innovation.",
      icon: Leaf,
      color: "bg-emerald-500",
    },
    {
      title: "Best Paper Award",
      description: "Presented to the author(s) of the best scientific paper published in the last year.",
      icon: FileText,
      color: "bg-indigo-500",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 hover:from-amber-200 hover:to-amber-300 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-300">
            Categories
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
            Award Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Golden Conference Awards 2025 will present honors in the following categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AwardCard {...award} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SpeakersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-purple-500/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-amber-300/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300">
            Speakers
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
            Keynote Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by keynote sessions delivered by world-renowned experts who have made exceptional contributions
            to technology, research, and entrepreneurship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg">
                    <Image
                      src="/p1.png"
                      alt="Pradeep Hatgaonkar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                      Featured Speaker
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      HR Expert
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">Pradeep Hatgaonkar</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium text-lg mb-2">
                    Country Head - HR, Country Compliance Manager, CSR Coordinator - Asia
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Hitachi Astemo India</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">B.Com, M.Com, MBA-HR, PGDBM, PGDPM & IR</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Senior Management Program on Strategic Human Resource Management from IIM-Ahmedabad
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Expert in HR strategy, compliance management, and corporate social responsibility
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                    >
                      <Calendar className="mr-2 h-4 w-4" /> View Schedule
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/20"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" /> Contact
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
              <Users className="mr-2 h-4 w-4" /> View All Speakers
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const WhyAttendSection = () => {
  const reasons = [
    {
      number: "1",
      title: "Presentation",
      description:
        "Present your paper to experts and influencers. It gives you a platform to exchange your interest-related thoughts, paving the way for possible future collaborations.",
      icon: PenTool,
      color: "from-amber-500 to-amber-600",
    },
    {
      number: "2",
      title: "Connect",
      description:
        "Use this platform to build connections with an elite group of visionaries who will challenge your intellect. It's a great platform to connect with your peers.",
      icon: Network,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "3",
      title: "Excel",
      description:
        "Knowledge is Power. Knowledge teaches skills. Skills define excellence. Use this platform to become cognizant of your interest area to achieve excellence in your domain.",
      icon: Target,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "4",
      title: "Publication",
      description:
        "Attending the conference gives you opportunity to get your abstract or paper published in prestigious journals and proceedings.",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      number: "5",
      title: "Collaboration and Friendship",
      description:
        "Meet and greet a myriad of industry professionals and academia experts with common interest. Every meal will be an opportunity to meet and interact with fellow researchers, attendees and experts.",
      icon: Heart,
      color: "from-red-500 to-red-600",
    },
    {
      number: "6",
      title: "Professional Development",
      description:
        "Expand your professional competency and learn useful tips and tricks of your industry in our skill-building workshops.",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      number: "7",
      title: "Latest Developments",
      description:
        "Explore insights on recent advancements, new equipment, new techniques, and unpublished data, learn from thought-leaders and get to network with a great line up of speakers.",
      icon: Zap,
      color: "from-amber-500 to-amber-600",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 hover:from-amber-200 hover:to-amber-300 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-300">
            Benefits
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
            Why Should You Attend?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the numerous benefits of attending the Golden Conference Awards 2025
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-purple-200 to-amber-200 dark:from-amber-800/30 dark:via-purple-800/30 dark:to-amber-800/30 z-0"></div>

          <div className="space-y-16 relative z-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:order-1" : "md:order-3"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center text-3xl font-bold text-white md:order-1`}
                    >
                      {reason.number}
                    </div>
                    <h3 className="text-2xl font-bold md:hidden">{reason.title}</h3>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hidden md:block">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>

                <div className="md:order-2 bg-white dark:bg-gray-800 rounded-full p-4 z-10 hidden md:block shadow-lg border border-amber-200 dark:border-amber-800">
                  <reason.icon className="h-6 w-6 text-amber-500" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-3" : "md:order-1"}`}>
                  <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`rounded-full bg-gradient-to-r ${reason.color} p-3 text-white`}>
                          <reason.icon className="h-5 w-5" />
                        </div>
                        <CardTitle>{reason.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">
                          {reason.number}
                        </div>
                        <p className="text-muted-foreground">{reason.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const KeyFactsSection = () => {
  const facts = [
    {
      number: "1",
      fact: "20 Innovative Start-Ups And Top Enterprises",
      icon: Rocket,
      color: "from-amber-500 to-amber-600",
    },
    {
      number: "2",
      fact: "100+ Distinguished Speakers",
      icon: Mic,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "3",
      fact: "15+ Keynote Speakers",
      icon: Star,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "4",
      fact: "15+ Workshops & Training Courses",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      number: "5",
      fact: "Representation From Industries",
      icon: Briefcase,
      color: "from-red-500 to-red-600",
    },
    {
      number: "6",
      fact: "Representation From 100+ World's Premier Universities",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      number: "7",
      fact: "B2B Meetings",
      icon: Users,
      color: "from-amber-500 to-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300">
            Statistics
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
            Key Facts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Golden Conference Awards 2025 by the numbers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-purple-300 to-amber-300 dark:from-amber-800/30 dark:via-purple-800/30 dark:to-amber-800/30"></div>

            <div className="space-y-8">
              {facts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8"
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl font-bold text-white z-10 shadow-lg`}
                  >
                    {item.number}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-none flex-1 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-purple-500" />
                      <p className="text-lg font-medium">{item.fact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const EventSummarySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-purple-500/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 hover:from-amber-200 hover:to-amber-300 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-300">
              Overview
            </Badge>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
              Event Summary
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border-none bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/10">
            <p className="text-lg mb-6 text-muted-foreground">
              Conferences provide researchers and professionals with multiple presentations, interactive breakout
              sessions, hands-on product demonstrations and unrivalled networking opportunities.
            </p>

            <p className="text-lg mb-6 text-muted-foreground">
              We have invited some of the world&apos;s most sought-after keynote speakers, experts, brand ambassadors, and
              industry leaders to share their thoughts and ideas with our conference guests.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
              >
                <Star className="mr-2 h-5 w-5" /> REGISTER NOW
              </Button>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/10 dark:to-amber-900/20 border border-amber-200 dark:border-amber-800 transform transition-transform hover:scale-[1.02]">
                <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                <h3 className="text-xl font-medium">Keynote Forum</h3>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/10 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800 transform transition-transform hover:scale-[1.02]">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-medium">Mini-Plenary Sessions</h3>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/10 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 transform transition-transform hover:scale-[1.02]">
                <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-medium">Distinguished Speakers Forum</h3>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-900/10 dark:to-green-900/20 border border-green-200 dark:border-green-800 transform transition-transform hover:scale-[1.02]">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-medium">Student Forum</h3>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-900/10 dark:to-red-900/20 border border-red-200 dark:border-red-800 transform transition-transform hover:scale-[1.02]">
                <BookOpen className="h-6 w-6 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-medium">Educational Sessions</h3>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100/50 dark:from-indigo-900/10 dark:to-indigo-900/20 border border-indigo-200 dark:border-indigo-800 transform transition-transform hover:scale-[1.02]">
                <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-medium">Training Programs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const RegistrationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300">
            Participate
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
            How to Participate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at the Golden Conference Awards 2025 and be part of this prestigious event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20"
          >
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Submit Nominations</h3>
            <p className="text-muted-foreground text-center mb-6">
              Nominate yourself or someone you know for the Golden Conference Awards.
            </p>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
              <Trophy className="mr-2 h-4 w-4" /> Nominate Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20"
          >
            <div className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Register to Attend</h3>
            <p className="text-muted-foreground text-center mb-6">
              Be part of this spectacular event! Early bird tickets are now available.
            </p>
            <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              <Bookmark className="mr-2 h-4 w-4" /> Register Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20"
          >
            <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Submit Papers</h3>
            <p className="text-muted-foreground text-center mb-6">
              Researchers and academicians are invited to submit their latest papers for consideration.
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              <PenTool className="mr-2 h-4 w-4" /> Submit Paper
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/10">
          <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
            Registration Fee
          </h3>
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Investing in you is the best investment. Our conferences give patrons a feeling of the serendipity of real
            learning, skill development in strategic workshops, networking and start-up opportunities, thus, is value
            for money.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/10 dark:to-amber-900/20 border border-amber-200 dark:border-amber-800 shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <h4 className="font-bold">Early Bird Registration</h4>
              </div>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">$499</p>
              <p className="text-sm text-muted-foreground">Until July 31, 2025</p>
              <div className="mt-4 flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Gift className="h-4 w-4" />
                <span className="text-sm font-medium">Includes welcome package</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/10 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800 shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <h4 className="font-bold">Standard Registration</h4>
              </div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">$699</p>
              <p className="text-sm text-muted-foreground">After July 31, 2025</p>
              <div className="mt-4 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Gift className="h-4 w-4" />
                <span className="text-sm font-medium">Includes welcome package + dinner</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
            >
              <Star className="mr-2 h-5 w-5" /> Register at Early Bird Rate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const SponsorshipSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-purple-500/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 hover:from-amber-200 hover:to-amber-300 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-300">
            Sponsors
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
            Sponsorship Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with us and position your brand in front of the most innovative minds
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/10">
          <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
            Why Sponsor?
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-900/10 dark:to-transparent">
              <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 p-2 mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <p className="text-muted-foreground">
                Brand visibility across all conference materials and digital platforms
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/10 dark:to-transparent">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-muted-foreground">Direct access to industry leaders, researchers, and innovators</p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-muted-foreground">
                Opportunity to showcase products and services to a targeted audience
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/10 dark:to-transparent">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-2 mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-muted-foreground">Networking opportunities with potential clients and partners</p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-red-50 to-transparent dark:from-red-900/10 dark:to-transparent">
              <div className="rounded-full bg-red-100 dark:bg-red-900/30 p-2 mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <p className="text-muted-foreground">
                Association with a prestigious event celebrating innovation and excellence
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="platinum" className="border-amber-200 dark:border-amber-800">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 p-2 text-white">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <span>Platinum Sponsor - $10,000</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground pl-12">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Premium logo placement on all event materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>10-minute speaking opportunity during opening ceremony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Exhibition booth in prime location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>5 complimentary conference passes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Full-page ad in conference program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Sponsored email to all attendees</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gold" className="border-amber-200 dark:border-amber-800">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 p-2 text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <span>Gold Sponsor - $7,500</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground pl-12">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span>Prominent logo placement on event materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span>Exhibition booth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span>3 complimentary conference passes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span>Half-page ad in conference program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span>Logo and link on conference website</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="silver" className="border-amber-200 dark:border-amber-800">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-2 text-white">
                    <Gift className="h-4 w-4" />
                  </div>
                  <span>Silver Sponsor - $5,000</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground pl-12">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Logo on event materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>2 complimentary conference passes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Quarter-page ad in conference program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Logo and link on conference website</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bronze" className="border-amber-200 dark:border-amber-800">
              <AccordionTrigger className="text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-green-500 to-green-600 p-2 text-white">
                    <Bookmark className="h-4 w-4" />
                  </div>
                  <span>Bronze Sponsor - $2,500</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground pl-12">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Logo on event materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>1 complimentary conference pass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Logo and link on conference website</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
            >
              <Briefcase className="mr-2 h-5 w-5" /> Become a Sponsor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300">
            Contact
          </Badge>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about the Golden Conference Awards? We&apos;re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 p-3 mt-1 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">infoconference@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 p-3 mt-1 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (506) 909-0537</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-3 mt-1 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Venue</h4>
                  <p className="text-muted-foreground">Prague, Czech Republic</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gradient-to-r from-green-500 to-green-600 p-3 mt-1 text-white">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Date</h4>
                  <p className="text-muted-foreground">October 27-28, 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-none bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/10">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <Input id="name" placeholder="Your name" className="pl-10" />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Input id="email" type="email" placeholder="Your email" className="pl-10" />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <div className="relative">
                  <Input id="subject" placeholder="Message subject" className="pl-10" />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <div className="relative">
                  <Textarea id="message" placeholder="Your message" rows={5} className="pl-10 pt-8" />
                  <div className="absolute left-3 top-8 text-muted-foreground">
                    <PenTool className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-purple-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-purple-700/80"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Join us at the Golden Conference Awards 2025!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Celebrate innovation. Honor achievement. Shape the future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-amber-600 hover:text-amber-700 bg-white hover:bg-gray-100"
            >
              <Star className="mr-2 h-5 w-5" /> Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Trophy className="mr-2 h-5 w-5" /> Submit Nomination
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Briefcase className="mr-2 h-5 w-5" /> Become a Sponsor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
              Golden Conference Awards
            </h3>
            <p className="text-sm text-muted-foreground">
              Honoring Excellence in Innovation and Research. Join us for this prestigious event celebrating the
              brightest minds and groundbreaking contributions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>Award Categories</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>Speakers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>Registration</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span>Past Winners</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span>Venue Information</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 group"
                >
                  <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/30 transition-colors">
                    <ChevronRight className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span>Travel & Accommodation</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-300">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates about the Golden Conference Awards.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Input type="email" placeholder="Your email" className="pl-10" />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Golden Conference Awards. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30">
              <Globe className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
            >
              <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative">
      <RotatingBackground />
      <FloatingParticles />
      <ScrollProgress />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <AwardsSection />
        <SpeakersSection />
        <WhyAttendSection />
        <KeyFactsSection />
        <EventSummarySection />
        <RegistrationSection />
        <SponsorshipSection />
        <ContactSection />
        <CTASection />
      </main>

      <Footer />

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 rounded-full bg-white dark:bg-gray-800 shadow-lg border-none"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-purple-600" />
            ) : (
              <Sun className="h-5 w-5 text-amber-400" />
            )}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side="left">Toggle {theme === "light" ? "Dark" : "Light"} Mode</HoverCardContent>
      </HoverCard>
    </div>
  )
}

