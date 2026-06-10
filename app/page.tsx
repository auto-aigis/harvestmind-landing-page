"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Sun,
  Brain,
  Calendar,
  MapPin,
  BarChart3,
  ArrowRight,
  Check,
  Sprout,
  CloudSun,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <Brain className="h-6 w-6 text-green-600" />,
      title: "AI-Powered Advice",
      description:
        "Get NLP-driven, conversational recommendations tailored to your specific growing conditions and past results.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Location-Aware Intelligence",
      description:
        "HarvestMind knows your sunlight hours, local climate, and microclimate to suggest exactly what to plant and when.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      title: "Seasonal Replanting Plans",
      description:
        "Never miss a planting window. Get season-by-season guidance that adapts to your space and growing history.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-600" />,
      title: "Growth Milestone Tracking",
      description:
        "Log germination, first leaves, flowering, and harvest dates. Watch your garden data build into actionable insights.",
    },
    {
      icon: <Sun className="h-6 w-6 text-green-600" />,
      title: "Microclimate Learning",
      description:
        "The AI learns your balcony orientation, shade patterns, and soil notes to improve recommendations over time.",
    },
    {
      icon: <CloudSun className="h-6 w-6 text-green-600" />,
      title: "Browser-First Experience",
      description:
        "No app download needed. Access your grow journal from any device with a full-featured web experience.",
    },
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Log Your Space",
      description:
        "Tell HarvestMind about your balcony, windowsill, or patio — orientation, sun hours, and container sizes.",
      icon: <MapPin className="h-8 w-8 text-green-600" />,
    },
    {
      number: "02",
      title: "Add Your Plants",
      description:
        "Log what you are growing, track milestones, and note soil conditions. The AI starts learning immediately.",
      icon: <Sprout className="h-8 w-8 text-green-600" />,
    },
    {
      number: "03",
      title: "Get Smart Advice",
      description:
        "Receive personalized, seasonal recommendations — like when to switch crops, what to replant, and how to optimize yield.",
      icon: <Brain className="h-8 w-8 text-green-600" />,
    },
  ];

  const pricing: PricingTier[] = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your first few plants.",
      features: [
        "Up to 5 plants",
        "Basic growth tracking",
        "Seasonal planting calendar",
        "Community tips",
      ],
      highlighted: false,
    },
    {
      name: "Grower",
      price: "$7",
      period: "per month",
      description: "Full AI power for serious balcony and apartment gardeners.",
      features: [
        "Unlimited plants",
        "AI-powered recommendations",
        "Microclimate learning",
        "Replanting guidance",
        "Harvest analytics",
        "Priority support",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Garden Club",
      price: "$12",
      period: "per month",
      description: "For households with multiple growing spaces and shared access.",
      features: [
        "Everything in Grower",
        "Up to 5 growing spaces",
        "Shared household access",
        "Advanced yield predictions",
        "Export data & reports",
        "Early feature access",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HarvestMind</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="/login">
                <Button variant="ghost" className="text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="text-sm bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-gray-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <Separator />
              <div className="flex gap-3 pt-2">
                <a href="/login" className="flex-1">
                  <Button variant="outline" className="w-full text-sm">
                    Sign In
                  </Button>
                </a>
                <a href="/register" className="flex-1">
                  <Button className="w-full text-sm bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
            <Sprout className="h-3 w-3 mr-1" />
            Now in Early Access
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight max-w-4xl mx-auto">
            Your AI grow journal — plan, track, and harvest smarter
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            HarvestMind learns your balcony{"'"}s microclimate, tracks every milestone, and gives you
            hyper-personalized seasonal replanting advice — all from your browser.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 text-base">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="px-8 text-base">
                See How It Works
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required. Free plan available.</p>

          {/* Hero Visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-8 sm:p-12">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900 mb-1">HarvestMind AI</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {"Your south-facing balcony gets about 4 hours of direct sun in October. Your cherry tomatoes are winding down — it's the perfect time to switch to spinach or winter lettuce. Based on your soil notes from last spring, I'd recommend adding compost before replanting."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything your urban garden needs
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              No other browser tool combines AI learning, location awareness, and seasonal vegetable planning for apartment growers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-gray-200 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Smarter growing in three steps
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Set up in minutes. Get personalized advice in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-green-600 mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Plans that grow with you
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when you want the full power of AI-driven growing advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? "border-green-600 border-2 shadow-lg scale-[1.02]"
                    : "border-gray-200"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white hover:bg-green-600">{tier.badge}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500 ml-1">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : ""
                      }`}
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 hover:bg-green-50">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is HarvestMind only for balcony growers?</AccordionTrigger>
              <AccordionContent>
                While we designed HarvestMind specifically for apartment and balcony vegetable growers, it works great for anyone growing in containers, raised beds, windowsills, or small patios. The AI adapts to whatever space you describe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the AI learn my microclimate?</AccordionTrigger>
              <AccordionContent>
                When you set up your growing space, you tell us about orientation, sun exposure, and any shade patterns. As you log plants and outcomes over time, the AI refines its understanding of your specific conditions to give increasingly accurate recommendations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need to install an app?</AccordionTrigger>
              <AccordionContent>
                No. HarvestMind is a browser-first web application. Access it from any device — desktop, tablet, or phone — without downloading anything. Your data syncs across all your devices automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes this different from Planta or PictureThis?</AccordionTrigger>
              <AccordionContent>
                Those apps are mobile-only and focus on houseplant care reminders. HarvestMind is built specifically for vegetable growers who want seasonal replanting guidance, harvest tracking, and AI that learns your specific growing conditions over time — all accessible from your browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I try it for free?</AccordionTrigger>
              <AccordionContent>
                Yes! Our Starter plan is completely free and lets you track up to 5 plants with basic growth tracking and a seasonal calendar. Upgrade to Grower anytime to unlock AI-powered recommendations and unlimited plants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Start growing smarter today
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Join urban gardeners who are using AI to get more from their balconies. Free to start, no credit card needed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 text-base font-semibold">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 text-base">
                Sign In
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-gray-900">HarvestMind</span>
            </div>
            <div className="flex gap-8">
              <a href="#features" className="text-sm text-gray-500 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">Pricing</a>
              <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900">FAQ</a>
            </div>
            <p className="text-sm text-gray-500">
              {"© 2024 HarvestMind. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}