"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Compass, RotateCw, Satellite } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

export default function Technicalities() {
  // Detailed data for each component
  const components = [
    {
      icon: Cpu,
      name: "NVIDIA Jetson Nano",
      description:
        "The Jetson Nano is the main onboard computer, responsible for running AI models, computer vision, and sensor fusion. It features a quad-core ARM Cortex-A57 CPU and a 128-core Maxwell GPU, making it ideal for real-time inference and robotics applications.",
      specs: [
        { label: "CPU", value: "Quad-core ARM Cortex-A57" },
        { label: "GPU", value: "128-core Maxwell" },
        { label: "RAM", value: "2GB LPDDR4" },
        { label: "Storage", value: "128GB eMMC" },
        { label: "OS", value: "Ubuntu 18.04 with JetPack" },
        { label: "Connectivity", value: "Gigabit Ethernet, USB 3.0" },
      ],
      links: [
        { label: "Official Site", url: "https://developer.nvidia.com/embedded/jetson-nano-developer-kit" },
        { label: "Datasheet", url: "https://developer.nvidia.com/embedded/downloads" },
      ],
    },
    {
      icon: Cpu,
      name: "Pixhawk Flight Controller",
      description:
        "Pixhawk is an advanced open-source flight controller used for precise motor control, sensor integration, and autonomous navigation. It interfaces with the Jetson Nano for high-level commands and handles low-level real-time tasks.",
      specs: [
        { label: "Processor", value: "32-bit ARM Cortex M4" },
        { label: "Sensors", value: "Accelerometer, Gyroscope, Magnetometer, Barometer" },
        { label: "I/O", value: "PWM, UART, I2C, CAN" },
        { label: "Firmware", value: "PX4/ArduPilot" },
      ],
      links: [
        { label: "PX4 Docs", url: "https://docs.px4.io/" },
        { label: "ArduPilot Docs", url: "https://ardupilot.org/" },
      ],
    },
    {
      icon: Compass,
      name: "RPLIDAR A1",
      description:
        "The RPLIDAR A1 is a 360-degree 2D laser scanner (LIDAR) used for mapping, obstacle detection, and SLAM (Simultaneous Localization and Mapping). It provides real-time distance measurements to help the rover navigate complex environments.",
      specs: [
        { label: "Range", value: "0.15m - 12m" },
        { label: "Scan Rate", value: "5.5Hz (default)" },
        { label: "Angular Resolution", value: "1°" },
        { label: "Interface", value: "UART/USB" },
      ],
      links: [
        { label: "Official Site", url: "https://www.slamtec.com/en/Lidar/A1" },
        { label: "Datasheet", url: "https://www.slamtec.com/en/Lidar/A1/download" },
      ],
    },
    {
      icon: Compass,
      name: "YDLIDAR OS30A",
      description:
        "The YDLIDAR OS30A is a secondary LIDAR sensor, providing additional data for redundancy and improved mapping accuracy. It is especially useful for detecting obstacles at different heights.",
      specs: [
        { label: "Range", value: "0.1m - 30m" },
        { label: "Scan Rate", value: "10Hz" },
        { label: "Angular Resolution", value: "0.25°" },
        { label: "Interface", value: "USB" },
      ],
      links: [
        { label: "Official Site", url: "https://www.ydlidar.com/products/view/23.html" },
      ],
    },
    {
      icon: Compass,
      name: "GPS M8N",
      description:
        "The GPS M8N module provides accurate positioning for outdoor navigation and patrol route tracking. It supports multiple satellite systems for improved reliability.",
      specs: [
        { label: "Accuracy", value: "2.5m CEP" },
        { label: "Update Rate", value: "1-10Hz" },
        { label: "Satellite Systems", value: "GPS, GLONASS, QZSS" },
        { label: "Interface", value: "UART" },
      ],
      links: [
        { label: "Datasheet", url: "https://www.u-blox.com/en/product/neo-m8-series" },
      ],
    },
    {
      icon: Compass,
      name: "Logitech C270 Webcam",
      description:
        "A 720p HD webcam used for real-time video streaming, computer vision, and intruder detection. It is mounted on a gimbal for adjustable viewing angles.",
      specs: [
        { label: "Resolution", value: "720p (1280x720)" },
        { label: "Frame Rate", value: "30 FPS" },
        { label: "Interface", value: "USB 2.0" },
      ],
      links: [
        { label: "Product Page", url: "https://www.logitech.com/en-in/products/webcams/c270-hd-webcam.960-000694.html" },
      ],
    },
    {
      icon: RotateCw,
      name: "Waveshare DDSM 115 Motors",
      description:
        "High-torque DC motors for robust locomotion, enabling the rover to traverse rough terrain and obstacles.",
      specs: [
        { label: "Voltage", value: "12V" },
        { label: "Torque", value: "11.5kg.cm" },
        { label: "Speed", value: "100 RPM" },
      ],
      links: [
        { label: "Product Page", url: "https://www.waveshare.com/ddsm115.htm" },
      ],
    },
    {
      icon: RotateCw,
      name: "Waveshare DDSM HAT-A Motor Controller",
      description:
        "A motor controller HAT for precise speed and direction control of the DDSM motors, interfacing with the Jetson Nano and Pixhawk.",
      specs: [
        { label: "Channels", value: "2" },
        { label: "Max Current", value: "10A/channel" },
        { label: "Interface", value: "I2C, UART" },
      ],
      links: [
        { label: "Product Page", url: "https://www.waveshare.com/ddsm-hat-a.htm" },
      ],
    },
    {
      icon: RotateCw,
      name: "Brushless 2-Axis Gimbal",
      description:
        "A brushless gimbal system for stabilizing the camera, allowing smooth video capture and dynamic tracking of objects.",
      specs: [
        { label: "Axes", value: "2 (Pitch, Yaw)" },
        { label: "Control", value: "PWM/Serial" },
        { label: "Payload", value: "Up to 250g" },
      ],
      links: [],
    },
    {
      icon: RotateCw,
      name: "LiPo 5200mAh 14.8V Battery",
      description:
        "A high-capacity lithium polymer battery providing up to 3 hours of operation, with built-in safety features.",
      specs: [
        { label: "Capacity", value: "5200mAh" },
        { label: "Voltage", value: "14.8V" },
        { label: "Chemistry", value: "LiPo" },
        { label: "Runtime", value: "~3 hours" },
      ],
      links: [],
    },
    {
      icon: Satellite,
      name: "Communication Modules",
      description:
        "Multiple communication modules for robust connectivity, including Wi-Fi, Bluetooth, long-range radio, and RC.",
      specs: [
        { label: "Wi-Fi", value: "802.11ac Dual-Band" },
        { label: "Bluetooth", value: "5.0 BLE" },
        { label: "Radio", value: "915MHz Long Range" },
        { label: "RC", value: "2.4GHz Long Range" },
        { label: "Range", value: "Up to 1km" },
      ],
      links: [],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
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
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="px-3 py-1 text-sm" variant="outline">
                Technical Details
              </Badge>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Components & Architecture
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Explore the detailed technical breakdown of every major hardware and software component powering the RAKSHAK autonomous surveillance rover.
              </motion.p>
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

      {/* Components Section */}
      <AnimatedSection id="components" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">
                Hardware & Sensors
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Components</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Each module is carefully selected and integrated for optimal performance, reliability, and expandability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {components.map((comp, idx) => (
              <motion.div
                key={comp.name}
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <comp.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-center">{comp.name}</CardTitle>
                    </div>
                    <CardDescription className="text-center">{comp.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Specifications</h4>
                      <ul className="space-y-1 text-sm">
                        {comp.specs.map((spec, i) => (
                          <li key={i} className="flex justify-between">
                            <span className="font-medium">{spec.label}</span>
                            <span>{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {comp.links.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Links</h4>
                        <ul className="space-y-1 text-sm">
                          {comp.links.map((link, i) => (
                            <li key={i}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-primary/80"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}