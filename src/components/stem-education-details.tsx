
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { BrainCircuit, Rocket, Droplet, ToyBrick } from "lucide-react";

const focusAreas = [
    {
        title: "Robotics",
        icon: BrainCircuit,
    },
    {
        title: "Space Technology",
        icon: Rocket,
    },
    {
        title: "Water Technology",
        icon: Droplet,
    },
    {
        title: "Drone Technology",
        icon: ToyBrick,
    },
]

const schoolCurriculum = [
    {
        title: "Class 4–5: Foundation & Curiosity",
        details: [
            { subject: "Robotics", content: "Introduction to Robots, Daily life applications, Simple DIY robots" },
            { subject: "Space Technology", content: "Stories of rockets & satellites, ISRO missions, Paper rocket experiments" },
            { subject: "Water Technology", content: "Water cycle models, Basic purification experiments" },
            { subject: "Drone Technology", content: "Introduction to drones, Build-your-own glider models" },
        ]
    },
    {
        title: "Class 6–7: Concept Building & Exploration",
        details: [
            { subject: "Robotics", content: "Basic sensors & motors, Drag-and-drop coding (Scratch), Obstacle-avoiding bots" },
            { subject: "Space Technology", content: "Solar system & satellite types, Satellite communication models" },
            { subject: "Water Technology", content: "Rainwater harvesting, Water level indicators using sensors" },
            { subject: "Drone Technology", content: "Principles of flight, DIY mini-rotor models, Drone use in agriculture & rescue" },
        ]
    },
    {
        title: "Class 8–10: Application & Innovation",
        details: [
            { subject: "Robotics", content: "Microcontroller coding (Arduino), Smart robotics projects, Real-world automation" },
            { subject: "Space Technology", content: "Real-time satellite tracking, Chandrayaan & Gaganyaan simulations, Space mission planning" },
            { subject: "Water Technology", content: "Smart irrigation systems, Real-time water quality monitoring, IoTbased solutions" },
            { subject: "Drone Technology", content: "Drone assembling, GPS navigation programming, Precision agriculture & mapping" },
        ]
    }
]

const collegeCurriculum = [
    {
        title: "For ECE/EEE: Embedded Systems & Robotics Hardware",
        description: "Focus on the hardware and microcontrollers that power modern robotics.",
        topics: [
            "Registered Microcontroller Programming (ARM, STM32, ESP32)",
            "Microprocessor Architecture & Interfacing",
            "Sensor Integration (IR, Ultrasonic, LiDAR)",
            "Real-time Robotics Hardware Projects (Line Follower, Obstacle Avoider, IoT-based bots)",
            "Introduction to ROS 2 Communication System (Publisher/Subscriber, Services)"
        ],
        tools: "Arduino, ESP32, Embedded C, Python (rclpy), ROS 2 Foxy"
    },
    {
        title: "For CSE/ECE: Software Side of Robotics & Automation",
        description: "Focus on the software, algorithms, and simulation that bring robots to life.",
        topics: [
            "ROS 2 Foxy Setup & Workspace",
            "Python-based Node Development (Publisher, Subscriber, Services, Actions)",
            "ROS 2 Launch Files and Parameters",
            "SLAM Toolbox for Mapping & Localization",
            "Nav2 Stack for Autonomous Navigation",
            "Final Mini Project: Mapping + Navigation in Simulation"
        ],
        tools: "ROS 2 Foxy, Ubuntu 20.04, Python, Gazebo, RViz2, SLAM Toolbox"
    }
]

export function StemEducationDetails() {
  return (
    <div className="space-y-16">
      <section>
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">
                Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground">
                We provide hands-on education in four key areas of modern technology, preparing students for the future of innovation.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {focusAreas.map((area) => (
                 <Card key={area.title} className="text-center">
                    <CardHeader className="items-center">
                        <div className="bg-primary/10 text-primary p-4 rounded-full">
                           <area.icon className="h-8 w-8" />
                        </div>
                        <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">
                STEM for Schools
            </h2>
            <p className="text-lg text-muted-foreground">
                We empower students with hands-on learning in future technologies through our specialized STEM modules, aligned with NEP 2020 and designed to spark innovation in every child.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {schoolCurriculum.map((level) => (
                <Card key={level.title}>
                    <CardHeader>
                        <CardTitle>{level.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {level.details.map((item) => (
                                <li key={item.subject}>
                                    <p className="font-semibold">{item.subject}:</p>
                                    <p className="text-muted-foreground text-sm">{item.content}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Skill Development Includes</CardTitle>
                <CardDescription>Our curriculum is designed to build a strong foundation in both technical and soft skills.</CardDescription>
            </CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Block & Text-based Coding (Scratch, Arduino, Python)</li>
                    <li>Hands-on Electronics & Sensor Integration</li>
                    <li>Real-world Problem Solving through Projects</li>
                    <li>Design Thinking & 21st Century Skills</li>
                    <li>Participation in Competitions & Innovation Fairs</li>
                </ul>
            </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">
                Workshops for Engineering Colleges
            </h2>
            <p className="text-lg text-muted-foreground">
               Our workshops are custom-tailored for specific streams like ECE, CSE, EEE, Mech, AI/ML, etc., based on the college timetable and department availability.
            </p>
        </div>
         <div className="mt-12 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {collegeCurriculum.map((workshop, index) => (
                     <AccordionItem key={workshop.title} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">{workshop.title}</AccordionTrigger>
                        <AccordionContent className="p-4 space-y-4">
                           <p className="text-muted-foreground">{workshop.description}</p>
                            <div>
                               <p className="font-semibold mb-2">Topics Covered:</p>
                               <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                   {workshop.topics.map(topic => <li key={topic}>{topic}</li>)}
                               </ul>
                            </div>
                            <div>
                                <p className="font-semibold">Tools:</p>
                                <p className="text-muted-foreground">{workshop.tools}</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
