import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle,
  UserIcon,
  MailIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Menu from "@/components/Menu";
import AnnouncementTagline from "@/components/AnnoucementTagline";
import ContactButton from "@/components/ui/ContactButton";
import Hero from "@/components/ui/Hero";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/IconButton";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(
        currentScrollY < lastScrollY.current || currentScrollY < 100
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Menu />

      <section className="pt-32 pb-20 reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Launch a software business website today with us!
              </h1>
              <p className="text-gray-600 mb-8">
                Get your business online with our professional web development
                services
              </p>
              <ContactButton onClick={undefined} />
            </div>
            <div className="relative">
              <img
                src="/images/group1.png"
                alt="Business professional"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl text-gray-600 mb-8 font-bold">
            Trusted by over 100+ businesses worldwide!
          </h2>
          <div className="overflow-hidden">
            <div className="logo-scroll">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {[
                    "intercom.png",
                    "marvel.png",
                    "notion.png",
                    "shazam.png",
                    "treehouse.png",
                    "zapier.png",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="w-24 h-12 flex items-center justify-center"
                    >
                      <img
                        src={`/images/logos/${logo}`}
                        alt={`${logo.split(".")[0]} logo`}
                        className="h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10" />
              <img
                src="/images/group2.png"
                alt="Feature illustration"
                className="w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let your business thrive under our supervision
              </h2>
              <p className="text-gray-600 mb-8">
                We provide comprehensive solutions to help your business grow
                online
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team support",
                  "24/7 monitoring",
                  "Regular updates",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20 reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let your business thrive under our supervision
              </h2>
              <p className="text-gray-600 mb-8">
                Launch a business today with our help and get it done with
                amazing launch features, websites, and more with uify. We help
                businesses like yours thrive every day and beyond.
              </p>
              <p className="font-bold mb-6">
                We are making every business grow!
              </p>
              <form className="space-y-4">
                <div className="flex items-center border-b border-gray-300 py-2">
                  <span className="mr-3 text-gray-500">
                    <UserIcon className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full focus:outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <span className="mr-3 text-gray-500">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full focus:outline-none"
                  />
                </div>
                <button className="bg-primary text-white py-2 px-6 rounded">
                  Contact Now
                </button>
              </form>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10" />
              <img
                src="/images/group3.png"
                alt="Feature illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our latest updates for you here!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "15 ways to grow your saas in 21 days with no money",
                image: "/images/latestUpdates/Growth.png",
              },
              {
                title: "Why everyone is moving today to subscriptions",
                image: "/images/latestUpdates/Career.png",
              },
              {
                title:
                  "9 ways to make it quick and never look back again in your life",
                image: "/images/latestUpdates/Design.png",
              },
            ].map((update, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={update.image}
                  alt={`Update ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">{update.title}</h3>
                <IconButton
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let your business thrive under our supervision
              </h2>
              <p className="text-gray-600 mb-8">
                Launch a business today with our help and get it done with
                amazing launch features, websites and more with uify. We help
                businesses like yours thrive every day and beyond.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xl font-bold">100+</p>
                  <p className="text-gray-600">Successful Projects</p>
                </div>
                <div>
                  <p className="text-xl font-bold">978+</p>
                  <p className="text-gray-600">Clients Today</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-primary text-white py-2 px-6 rounded">
                  Contact Now
                </button>
                <button className="border border-primary text-primary py-2 px-6 rounded">
                  Book a Demo Today
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10" />
              <img
                src="/images/group4.png"
                alt="Feature illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img
              src="/images/faqLogo.png"
              alt="FAQ Logo"
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Frequently asked questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            What’s happening around the World.
          </p>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                "What is the best way to create a SaaS business today?",
                "How can you help me scale my business?",
                "What are your key features and benefits?",
                "Why should I choose your service?",
              ].map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:bg-gray-200">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border rounded-lg border-t-0 bg-white">
                    <p>
                      Launch a business today with our help and get it done with
                      amazing launch features, websites and more with uifry. We
                      help business like yours thrive every day and beyond.
                      Launch a business today with our help and get it done with
                      amazing launch features, websites and more with uifry. We
                      help business like yours thrive every day and beyond.
                    </p>
                    <div className="my-4"></div>
                    <p>
                      Launch a business today with our help and get it done with
                      amazing launch features, websites and more with uifry. We
                      help business like yours thrive every day and beyond.
                      Launch a business today with our help and get it done with
                      amazing launch features, websites and more with uifry. We
                      help business like yours thrive every day and beyond.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center space-x-4 mt-10">
            <button className="bg-primary text-white py-2 px-6 rounded">
              Contact Now
            </button>
            <button className="border border-primary text-primary py-2 px-6 rounded">
              Book a Demo Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
