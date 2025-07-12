"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsAuthenticated(false);
    const response = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", password: "" });
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  };

  return (
    <nav className="font-outfit fixed top-2 w-full z-50 bg-transparent">
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">Rewear</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-white text-base font-outfit">
                Browse
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-white text-base font-outfit">
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] p-0">
                  <div className="p-6 bg-white rounded-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        Welcome back
                      </DialogTitle>
                      <DialogDescription className="text-gray-500">
                        Sign in to your account to continue
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="login" className="mt-6">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login" className="mt-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              placeholder="name@example.com"
                              type="email"
                              className="bg-gray-50/50"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              className="bg-gray-50/50"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-gray-900 text-white hover:bg-gray-800"
                            disabled={isLoading}
                          >
                            {isLoading ? "Loading..." : "Continue"}
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="register" className="mt-6">
                        <form onSubmit={handleSubmitRegister} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              type="text"
                              className="bg-gray-50/50"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-email">Email</Label>
                            <Input
                              id="register-email"
                              name="email"
                              placeholder="name@example.com"
                              type="email"
                              className="bg-gray-50/50"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-password">Password</Label>
                            <Input
                              id="register-password"
                              name="password"
                              type="password"
                              className="bg-gray-50/50"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-gray-900 text-white hover:bg-gray-800"
                            disabled={isLoading}
                          >
                            {isLoading ? "Loading..." : "Continue"}
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </div>
                </DialogContent>
              </Dialog>
              
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                className="p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full text-white text-base font-outfit">
                Browse
              </Button>
              <Button variant="ghost" className="w-full text-white text-base font-outfit">
                Login
              </Button>
              <Button variant="outline" className="w-full text-white border-white text-base font-outfit hover:bg-white hover:text-black transition">
                Signup
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;