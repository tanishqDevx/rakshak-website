"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  MapPin,
  UserCheck,
  Bell,
  Radio,
  ShieldAlert,
  Github,
  Mail,
  ChevronRight,
  Cpu,
  Compass,
  Radar,
  Satellite,
  RotateCw,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false) // Add state to track client-side mount

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    setIsClient(true) // Set to true once the component mounts on the client
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Empty dependency array ensures this runs only once on mount

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#gallery", label: "Gallery" },
    { href: "#specs", label: "Specs" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
    // { href: "http://localhost:3001", label: "Facial Recognition Live Stream (On Local Network Only)" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      {/* <header
        className={`sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${scrollY > 50 ? "bg-background/95 shadow-md" : "bg-background/80"}`}
      >
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Shield className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.span
                className="inline-block font-bold"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                RAKSHAK
              </motion.span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                  <div className="flex flex-col gap-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black dark:bg-black relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-grid-white/5 bg-grid-8 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-multiply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Conditionally render particles only on the client */}
            {isClient &&
              [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/20"
                  style={{
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * -100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Badge className="px-3 py-1 text-sm" variant="outline">
                    Autonomous Surveillance Rover
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <AnimatedText text="RAKSHAK" />
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  AI-Powered Intruder Detection and Real-Time Surveillance
                </motion.p>
              </motion.div>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link href="#features">
                  <Button className="bg-primary hover:bg-primary/90 group relative overflow-hidden" size="lg">
                    <span className="relative z-10 flex items-center">
                      Explore More{" "}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Animated scanner line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </section>

        {/* Features Section */}
        <AnimatedSection id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Capabilities
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Advanced Capabilities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  RAKSHAK combines cutting-edge technologies to deliver autonomous surveillance and security.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Radar,
                  title: "Lidar Navigation",
                  description: "Advanced LIDAR sensors for precise mapping and navigation in complex environments.",
                },
                {
                  icon: MapPin,
                  title: "GPS Path Tracking",
                  description: "Accurate GPS tracking for predefined patrol routes and position monitoring.",
                },
                {
                  icon: UserCheck,
                  title: "Intruder Detection",
                  description: "AI-powered computer vision for real-time intruder detection and identification.",
                },
                {
                  icon: Bell,
                  title: "Real-time Alerts",
                  description: "Instant notifications and alerts when suspicious activities are detected.",
                },
                {
                  icon: Radio,
                  title: "Remote Control",
                  description: "Secure remote operation capabilities for manual control when needed.",
                },
                {
                  icon: ShieldAlert,
                  title: "Obstacle Avoidance",
                  description: "Autonomous obstacle detection and avoidance for uninterrupted operation.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="rounded-full bg-primary/10 p-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Section */}
        <AnimatedSection id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Gallery
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Project Gallery</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Visual documentation of RAKSHAK's development journey and field testing.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="rover" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="rover">Rover</TabsTrigger>
                  <TabsTrigger value="components">Components</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="testing">Field Testing</TabsTrigger>
                </TabsList>
                <TabsContent value="rover" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/rover11.png?height=400&width=600"
                        alt="RAKSHAK Rover Front View"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </motion.div>
                    <motion.div
                      className="overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/rover2.jpeg?height=400&width=600"
                        alt="RAKSHAK Rover Side View"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="components" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { name: "Jetson Nano", image: "/jetson.jpg" },
                      { name: "RPLIDAR A1", image: "/driver.jpg" },
                      { name: "Pixhawk", image: "/pixhack.jpg" },
                    ].map((component, index) => (
                      <motion.div
                        key={component.name}
                        className="overflow-hidden rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={`${component.image}?height=300&width=400`}
                          alt={component.name}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full transition-transform hover:scale-105"
                        />
                        <p className="mt-2 text-center font-medium">{component.name}</p>
                      </motion.div>
                    ))}
                  </div>

                </TabsContent>
                <TabsContent value="development" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { stage: "Early Prototype", image: "/devep1.jpeg" },
                      { stage: "Software Development", image: "/devep2.jpeg" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.stage}
                        className="overflow-hidden rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <Image
                          src={`${item.image}?height=400&width=600`}
                          alt={item.stage}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform hover:scale-105"
                        />
                        <p className="mt-2 text-center font-medium">{item.stage}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="testing" className="mt-6">
                  <div className="grid grid-cols-1 gap-6">
                    <motion.div
                      className="overflow-hidden rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Image
                        src="/final.png?height=400&width=600"
                        alt="Outdoor Testing"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                      <p className="mt-2 text-center font-medium">Outdoor Testing</p>
                    </motion.div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </AnimatedSection>

        {/* Technical Specs Section */}
        <AnimatedSection id="specs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Specifications
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Specifications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Core components and hardware specifications of the RAKSHAK rover.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: "Computing",
                  subtitle: "Processing and control systems",
                  specs: [
                    { name: "Main Computer", value: "NVIDIA Jetson Nano" },
                    { name: "Flight Controller", value: "Pixhawk" },
                    { name: "Memory", value: "2GB LPDDR4" },
                    { name: "Storage", value: "128GB eMMC" },
                  ],
                },
                {
                  icon: Compass,
                  title: "Sensors",
                  subtitle: "Navigation and detection systems",
                  specs: [
                    { name: "Primary LIDAR", value: "RPLIDAR A1" },
                    { name: "Secondary LIDAR", value: "YDLIDAR OS30A" },
                    { name: "GPS", value: "GPS M8N" },
                    { name: "Camera", value: "Logitech C270 720p Webcam" },
                  ],
                },
                {
                  icon: RotateCw,
                  title: "Locomotion",
                  subtitle: "Movement and power systems",
                  specs: [
                    { name: "Motors", value: "Waveshare DDSM 115" },
                    { name: "Motor Controller", value: "Waveshare DDSM HAT-A" },
                    { name: "Gimbal", value: "Brushless 2-Axis" },
                    { name: "Battery", value: "LiPo 5200mAh 14.8V" },
                    { name: "Runtime", value: "~3 hours" },
                  ],
                },
                {
                  icon: Satellite,
                  title: "Communication",
                  subtitle: "Connectivity and data transmission",
                  specs: [
                    { name: "Wi-Fi", value: "802.11ac Dual-Band" },
                    { name: "Bluetooth", value: "5.0 BLE" },
                    { name: "Radio", value: "915MHz Long Range" },
                    { name: "RC", value: "2.4GHz Long Range" },
                    { name: "Range", value: "Up to 1km" },
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="rounded-full bg-primary/10 p-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <category.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {category.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + specIndex * 0.1, duration: 0.3 }}
                      >
                        <span className="font-medium">{spec.name}</span>
                        <span>{spec.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/specs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View Full Technical Details
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Our Team
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  The talented student contributors behind the RAKSHAK project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Shoaib SSM",
                  image: "/shoaib.jpeg?height=400&width=600",
                  role: "CSE-A",
                  description: "24BD1A051K",
                },
                {
                  name: "Tanishq Jain",
                  image: "/tanishq.png?height=400&width=600",
                  role: "CSE - A",
                  description: "24BD1A051T",
                },
                {
                  name: "Shaik Mohammed Omar",
                  image: "/image.png?height=400&width=600",
                  role: "CSE - A",
                  description: "24BD1A051J",
                },
                {
                  name: "Tarang Harsola",
                  image: "/tarang.jpg?height=400&width=600",
                  role: "CSE - A",
                  description: "24BD1A051U",
                },
                {
                  name: "Anirudha KSM",
                  image: "/anirudha.jpg?height=400&width=600",
                  role: "CSE - A",
                  description: "24BD1A0503",
                },
                {
                  name:"Nikunj Jayesh",
                  image: "/nikunj.jpg?height=400&width=600",
                  role: "CSE - E",
                  description: "24BD1A0598",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex justify-center">
                        <motion.div
                          className="relative h-24 w-24 rounded-full overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardTitle className="text-center mt-4">{member.name}</CardTitle>
                      <CardDescription className="text-center">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Common questions about the RAKSHAK project and its capabilities.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is the battery life of RAKSHAK?",
                    answer:
                      "RAKSHAK is equipped with a high-capacity 5200mAh 14.8V LiPo battery that provides approximately 3 hours of continuous operation. The actual runtime may vary depending on terrain conditions, operational mode, and sensor usage.",
                  },
                  {
                    question: "What is the communication range?",
                    answer:
                      "The rover has a communication range of up to 1 kilometer in open areas using its 2.4GHz long-range radio module. In urban environments or areas with obstacles, the effective range may be reduced to 300-500 meters. The system automatically switches to store-and-forward mode when out of range.",
                  },
                  {
                    question: "Does RAKSHAK use cloud infrastructure?",
                    answer:
                      "Yes, RAKSHAK utilizes a cloud backend for data storage, advanced analytics, and remote monitoring. The system can operate in offline mode with reduced capabilities when cloud connectivity is unavailable. All critical security functions continue to work without internet access.",
                  },
                  {
                    question: "How does the intruder detection work?",
                    answer:
                      "RAKSHAK uses a combination of computer vision and machine learning algorithms running on the Jetson Nano to detect and classify potential intruders. The system is trained to recognize human figures, distinguish between authorized personnel and intruders, and can operate in various lighting conditions including low-light environments.",
                  },
                  {
                    question: "Can RAKSHAK operate in all weather conditions?",
                    answer:
                      "The current prototype aims have an IP54 rating, making it resistant to dust and water splashes. It can operate in temperatures ranging from 0°C to 45°C. Future iterations will include enhanced weatherproofing for operation in more extreme conditions.",
                  },
                  {
                    question: "How is RAKSHAK controlled remotely?",
                    answer:
                      "RAKSHAK can be controlled through a dedicated web interface or mobile application. The control system allows for both manual operation and setting autonomous patrol routes. Authorized users can take manual control at any time, overriding the autonomous mode when necessary.",
                  },
                  {
                    question: "What is the maximum speed of the rover?",
                    answer:
                      "The rover has a maximum speed of 5 km/h (3.1 mph) on flat terrain. During autonomous operation, it typically moves at a slower pace of 2-3 km/h to ensure optimal sensor performance and obstacle detection.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem value={`item-${index + 1}`} className="border-b">
                      <AccordionTrigger className="hover:no-underline">
                        <span className="text-left hover:text-primary transition-colors">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Shield className="h-6 w-6 text-primary" />
            </motion.div>
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} RAKSHAK Project. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="https://github.com/Team-Aston"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 hover:bg-accent"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="mailto:shoaibkulsums@gmail.com" className="rounded-md p-2 hover:bg-accent">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
