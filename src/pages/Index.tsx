import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import Profile from "@/pages/Profile";
import Icon from "@/components/ui/icon";

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Icon name="Crown" size={14} className="text-white" />
          </div>
          <span className="font-bold gradient-text">21 Династия</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Образовательный портал о великих династиях мира · 2025
        </p>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <CoursesSection />
    <Footer />
  </>
);

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "profile">("home");

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === "home" ? <HomePage /> : <Profile />}
    </div>
  );
};

export default Index;
